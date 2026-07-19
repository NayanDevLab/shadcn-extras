import { NextResponse } from 'next/server';

import { FONT_META } from '@/lib/themes/fonts-meta';
import {
  TOKEN_KEYS,
  type FontId,
  type ThemePreset,
  type ThemeTokens,
} from '@/lib/themes/types';

const FONT_IDS = Object.keys(FONT_META) as FontId[];

const SYSTEM_INSTRUCTION = `You are an expert UI/UX designer specialized in shadcn/ui and Tailwind CSS themes.
Generate a beautiful, cohesive theme from the user's prompt.
Output valid raw JSON ONLY (no markdown, no \`\`\` wrappers) with this exact structure:
{
  "name": "Short theme name (2-3 words)",
  "description": "One sentence describing the vibe",
  "radius": "border radius in rem, e.g. \\"0rem\\" for sharp/brutalist, \\"0.6rem\\" default, \\"1.25rem\\" for playful/soft",
  "fonts": { "sans": "...", "heading": "...", "mono": "..." },
  "light": { ${TOKEN_KEYS.map((key) => `"${key}": "..."`).join(', ')} },
  "dark": { same keys as light },
  "shadows": { "light": "css box-shadow value or \\"none\\"", "dark": "css box-shadow value or \\"none\\"" }
}
Rules:
- Every color value MUST be a raw HSL triplet like "210 40% 98%" (no hsl() wrapper, no hex, no rgb).
- fonts values MUST each be one of: ${FONT_IDS.join(', ')}. Pick fonts matching the aesthetic (playfair/lora = elegant serif, orbitron = futuristic display, spaceGrotesk = modern geometric, jetbrains = technical mono, quicksand = friendly rounded, system = neutral).
- light mode: light background, dark text. dark mode: dark background, light text. Ensure WCAG-readable contrast between every background/foreground pair.
- primary and accent must strongly capture the prompt's aesthetic; chart-1..5 should form a harmonious data palette.
- shadows should fit the vibe (e.g. "3px 3px 0 0 hsl(24 45% 22%)" for retro, "0 0 16px hsl(320 100% 60% / 0.45)" for neon glow, "none" for flat).`;

// Guard against CSS injection: only plain hsl values may reach the <style> tag
const HSL_VALUE = /^hsl\([0-9.\s%,/deg]+\)$/i;
const RADIUS_VALUE = /^[0-9.]+(rem|px|em)$/;
const SHADOW_VALUE = /^[0-9a-z.\s%,/()#-]+$/i;

function normalizeTokens(raw: unknown): ThemeTokens | null {
  if (!raw || typeof raw !== 'object') return null;
  const source = raw as Record<string, unknown>;
  const tokens = {} as ThemeTokens;
  for (const key of TOKEN_KEYS) {
    const rawValue = source[key] ?? source[`--${key}`];
    if (typeof rawValue !== 'string' || !rawValue.trim()) return null;
    let value = rawValue.trim();
    if (!value.startsWith('hsl(')) value = `hsl(${value})`;
    if (!HSL_VALUE.test(value)) return null;
    tokens[key] = value;
  }
  return tokens;
}

function normalizeFont(value: unknown): FontId {
  return FONT_IDS.includes(value as FontId) ? (value as FontId) : 'system';
}

function normalizeShadow(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed || trimmed === 'none') return undefined;
  return SHADOW_VALUE.test(trimmed) ? trimmed : undefined;
}

export async function POST(request: Request) {
  const apiKey = "AQ.Ab8RN6L1QHVlqTUjEuAaQL2N2qKNHgNXXHhKhHwrDNkTiZ6M7g";
  if (!apiKey) {
    return NextResponse.json(
      { error: 'GEMINI_API_KEY is not configured. Add it to .env.local.' },
      { status: 500 }
    );
  }

  let prompt: unknown;
  let image: unknown;
  try {
    ({ prompt, image } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const hasPrompt = typeof prompt === 'string' && prompt.trim().length > 0;

  const imageInput = image as { data?: unknown; mimeType?: unknown } | undefined;
  const hasImage =
    imageInput &&
    typeof imageInput.data === 'string' &&
    imageInput.data.length > 0 &&
    typeof imageInput.mimeType === 'string' &&
    ['image/png', 'image/jpeg', 'image/webp'].includes(imageInput.mimeType);

  if (!hasPrompt && !hasImage) {
    return NextResponse.json(
      { error: 'A prompt or an image is required.' },
      { status: 400 }
    );
  }
  if (hasImage && (imageInput.data as string).length > 8_000_000) {
    return NextResponse.json(
      { error: 'Image is too large. Please use an image under ~5MB.' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                ...(hasImage
                  ? [
                      {
                        inline_data: {
                          mime_type: imageInput.mimeType,
                          data: imageInput.data,
                        },
                      },
                    ]
                  : []),
                {
                  text: hasImage
                    ? `Extract a beautiful, cohesive shadcn theme from this image. Capture its dominant colors, mood and style — primary/accent from the standout colors, background/muted from the softer tones. Pick fonts and radius matching the vibe.${
                        hasPrompt
                          ? ` Additional direction: ${(prompt as string).trim().slice(0, 500)}`
                          : ''
                      }`
                    : (prompt as string).trim().slice(0, 500),
                },
              ],
            },
          ],
          systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          generationConfig: {
            temperature: 0.8,
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.error?.message || `Gemini API error (${response.status})`
      );
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Empty response from Gemini.');

    const parsed = JSON.parse(text.trim());
    const light = normalizeTokens(parsed.light);
    const dark = normalizeTokens(parsed.dark);
    if (!light || !dark) {
      throw new Error('The AI returned an incomplete palette. Please try again.');
    }

    const radius =
      typeof parsed.radius === 'string' && RADIUS_VALUE.test(parsed.radius.trim())
        ? parsed.radius.trim()
        : '0.6rem';
    const shadowLight = normalizeShadow(parsed.shadows?.light);
    const shadowDark = normalizeShadow(parsed.shadows?.dark);

    const preset: ThemePreset = {
      id: 'ai',
      name: typeof parsed.name === 'string' ? parsed.name.slice(0, 60) : 'AI Theme',
      description:
        typeof parsed.description === 'string'
          ? parsed.description.slice(0, 200)
          : 'Generated by AI',
      radius,
      fonts: {
        sans: normalizeFont(parsed.fonts?.sans),
        heading: normalizeFont(parsed.fonts?.heading),
        mono: normalizeFont(parsed.fonts?.mono),
      },
      light,
      dark,
      shadows:
        shadowLight || shadowDark
          ? { light: shadowLight, dark: shadowDark }
          : undefined,
      swatches: [light.primary, light.accent, light.background, light.foreground],
    };

    return NextResponse.json({ preset });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to generate theme.';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
