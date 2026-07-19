'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ThemeExport } from '@/components/themes/theme-export';
import { ThemePreview } from '@/components/themes/theme-preview';
import { buildPreviewCss, type PreviewMode } from '@/lib/themes/build-css';
import type { ThemePreset } from '@/lib/themes/types';
import { themeFontVariables } from '../themes/fonts';

const SUGGESTIONS = [
  'Matcha green tea with soft cream and leafy greens',
  'Miami synthwave sunset with hot pink and purple',
  'Scandinavian minimal with muted blues and warm gray',
  'Halloween pumpkin patch at midnight',
  'Luxury watch brand — black, silver and deep emerald',
];

export default function ThemeGeneratorPage() {
  const [prompt, setPrompt] = useState(
    'Cyberpunk neon with hot pinks and electric blues'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [preset, setPreset] = useState<ThemePreset | null>(null);
  const [mode, setMode] = useState<PreviewMode>('light');
  const [modeSynced, setModeSynced] = useState(false);
  const { resolvedTheme } = useTheme();

  // Initialize the preview mode from the site theme once, then let the
  // preview toggle own it.
  useEffect(() => {
    if (!modeSynced && resolvedTheme) {
      setMode(resolvedTheme === 'dark' ? 'dark' : 'light');
      setModeSynced(true);
    }
  }, [resolvedTheme, modeSynced]);

  const generateTheme = async () => {
    if (!prompt.trim() || isLoading) return;
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate theme.');
      }
      setPreset(data.preset);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-zinc-50 dark:bg-zinc-950 ${themeFontVariables}`}
    >
      {preset && (
        <style
          dangerouslySetInnerHTML={{ __html: buildPreviewCss(preset, mode) }}
        />
      )}

      <main className='mx-auto max-w-7xl space-y-10 px-6 py-12'>
        <div className='max-w-2xl space-y-3'>
          <div className='inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400'>
            <Sparkles className='size-3.5 text-blue-500' />
            AI Theme Generator
          </div>
          <h1 className='text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50'>
            Describe it, and AI themes it
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Describe an aesthetic and Gemini generates a complete shadcn/ui
            theme — colors, fonts, radius and shadows — previewed live on real
            components in light and dark mode.
          </p>
        </div>

        <div className='space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
          <div className='space-y-2'>
            <Label htmlFor='prompt' className='text-sm font-semibold'>
              Theme description
            </Label>
            <Textarea
              id='prompt'
              placeholder='e.g. Matcha green tea aesthetic with soft cream colors and dark leafy greens'
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              rows={3}
              className='resize-none border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950'
            />
          </div>

          <div className='flex flex-wrap gap-2'>
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type='button'
                onClick={() => setPrompt(suggestion)}
                className='rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100'
              >
                {suggestion}
              </button>
            ))}
          </div>

          {error && (
            <div className='rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400'>
              {error}
            </div>
          )}

          <Button
            className='h-11 w-full gap-2 bg-blue-600 text-white hover:bg-blue-700 sm:w-auto sm:px-8'
            onClick={generateTheme}
            disabled={isLoading || !prompt.trim()}
          >
            {isLoading ? (
              <Loader2 className='size-4 animate-spin' />
            ) : (
              <Wand2 className='size-4' />
            )}
            {isLoading ? 'Generating magic...' : 'Generate theme'}
          </Button>
        </div>

        {preset ? (
          <>
            <ThemePreview
              preset={preset}
              mode={mode}
              onModeChange={setMode}
              fontClass={themeFontVariables}
            />
            <ThemeExport preset={preset} />
          </>
        ) : (
          <div className='rounded-2xl border border-dashed border-zinc-300 p-12 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400'>
            Your generated theme will be previewed here on real shadcn/ui
            components — with copy and download, just like the{' '}
            <a href='/themes' className='text-blue-500 hover:underline'>
              Theme Gallery
            </a>
            .
          </div>
        )}
      </main>
    </div>
  );
}
