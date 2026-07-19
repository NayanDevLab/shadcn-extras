import type { FontId } from './types';

export interface FontMeta {
  /** Real family name for exported CSS, null for system stack */
  name: string | null;
  /** CSS variable injected by next/font on the /themes page, null for system */
  cssVar: string | null;
  /** Fallback stack appended after the family name */
  fallback: string;
  /** Google Fonts stylesheet URL for the exported @import line */
  googleImport: string | null;
}

export const FONT_META: Record<FontId, FontMeta> = {
  system: {
    name: null,
    cssVar: null,
    fallback: 'ui-sans-serif, system-ui, sans-serif',
    googleImport: null,
  },
  playfair: {
    name: 'Playfair Display',
    cssVar: '--font-theme-playfair',
    fallback: 'Georgia, serif',
    googleImport:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap',
  },
  lora: {
    name: 'Lora',
    cssVar: '--font-theme-lora',
    fallback: 'Georgia, serif',
    googleImport:
      'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap',
  },
  orbitron: {
    name: 'Orbitron',
    cssVar: '--font-theme-orbitron',
    fallback: 'ui-sans-serif, system-ui, sans-serif',
    googleImport:
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap',
  },
  spaceGrotesk: {
    name: 'Space Grotesk',
    cssVar: '--font-theme-space-grotesk',
    fallback: 'ui-sans-serif, system-ui, sans-serif',
    googleImport:
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
  },
  jetbrains: {
    name: 'JetBrains Mono',
    cssVar: '--font-theme-jetbrains',
    fallback: 'ui-monospace, monospace',
    googleImport:
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap',
  },
  quicksand: {
    name: 'Quicksand',
    cssVar: '--font-theme-quicksand',
    fallback: 'ui-sans-serif, system-ui, sans-serif',
    googleImport:
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap',
  },
};

/** Font-family value for the live preview (uses next/font CSS vars) */
export function previewFontFamily(id: FontId): string {
  const meta = FONT_META[id];
  if (!meta.cssVar) return meta.fallback;
  return `var(${meta.cssVar}), ${meta.fallback}`;
}

/** Font-family value for exported CSS (real family names) */
export function exportFontFamily(id: FontId): string {
  const meta = FONT_META[id];
  if (!meta.name) return meta.fallback;
  return `'${meta.name}', ${meta.fallback}`;
}
