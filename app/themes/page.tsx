'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Palette } from 'lucide-react';

import { ThemeExport } from '@/components/themes/theme-export';
import { ThemePicker } from '@/components/themes/theme-picker';
import { ThemePreview } from '@/components/themes/theme-preview';
import { buildPreviewCss, type PreviewMode } from '@/lib/themes/build-css';
import { THEME_PRESETS } from '@/lib/themes/presets';
import { themeFontVariables } from './fonts';

export default function ThemesPage() {
  const [selectedId, setSelectedId] = useState(THEME_PRESETS[0].id);
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

  const preset =
    THEME_PRESETS.find((item) => item.id === selectedId) ?? THEME_PRESETS[0];

  return (
    <div
      className={`min-h-screen bg-zinc-50 dark:bg-zinc-950 ${themeFontVariables}`}
    >
      <style dangerouslySetInnerHTML={{ __html: buildPreviewCss(preset, mode) }} />

      <main className='mx-auto max-w-7xl space-y-10 px-6 py-12'>
        <div className='max-w-2xl space-y-3'>
          <div className='inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400'>
            <Palette className='size-3.5' />
            Theme Gallery
          </div>
          <h1 className='text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50'>
            Themes with personality for shadcn/ui
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Not just another color swap — each theme changes colors, fonts,
            radius and effects. Pick one, preview it on real components in
            light and dark mode, then copy or download the CSS.
          </p>
        </div>

        <ThemePicker
          presets={THEME_PRESETS}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <ThemePreview
          preset={preset}
          mode={mode}
          onModeChange={setMode}
          fontClass={themeFontVariables}
        />

        <ThemeExport preset={preset} />
      </main>
    </div>
  );
}
