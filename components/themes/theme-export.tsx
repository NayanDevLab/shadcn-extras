'use client';

import React, { useState } from 'react';
import { Check, Copy, Download } from 'lucide-react';

import {
  buildExportCss,
  type ExportFormat,
} from '@/lib/themes/build-css';
import type { ThemePreset } from '@/lib/themes/types';
import { cn } from '@/lib/utils';

interface ThemeExportProps {
  preset: ThemePreset;
}

const FORMATS: { id: ExportFormat; label: string; hint: string }[] = [
  { id: 'v4', label: 'Tailwind v4', hint: 'Modern shadcn (hsl() values)' },
  { id: 'v3', label: 'Tailwind v3', hint: 'Classic shadcn (raw channels)' },
];

export function ThemeExport({ preset }: ThemeExportProps) {
  const [format, setFormat] = useState<ExportFormat>('v4');
  const [copied, setCopied] = useState(false);

  const css = buildExportCss(preset, format);

  const handleCopy = () => {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${preset.id}-theme.css`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className='space-y-3'>
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <h2 className='text-lg font-semibold text-zinc-900 dark:text-zinc-100'>
          Get the code
        </h2>
        <div className='flex items-center gap-2'>
          <div className='flex items-center rounded-lg border border-zinc-200 p-1 dark:border-zinc-800'>
            {FORMATS.map((item) => (
              <button
                key={item.id}
                type='button'
                onClick={() => setFormat(item.id)}
                title={item.hint}
                className={cn(
                  'rounded-md px-3 py-1 text-xs font-medium transition-colors',
                  format === item.id
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            type='button'
            onClick={handleCopy}
            className='flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900'
          >
            {copied ? (
              <Check className='size-3.5 text-green-500' />
            ) : (
              <Copy className='size-3.5' />
            )}
            {copied ? 'Copied!' : 'Copy CSS'}
          </button>
          <button
            type='button'
            onClick={handleDownload}
            className='flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200'
          >
            <Download className='size-3.5' />
            Download .css
          </button>
        </div>
      </div>

      <pre className='max-h-96 overflow-auto rounded-xl bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-300'>
        <code>{css}</code>
      </pre>

      <p className='text-xs text-zinc-500 dark:text-zinc-400'>
        Paste this into your project&apos;s <code>globals.css</code> (replace
        your existing <code>:root</code> and <code>.dark</code> token blocks).
        The <code>@import</code> lines load the theme fonts from Google Fonts —
        or swap them for <code>next/font</code> if you prefer self-hosting.
      </p>
    </div>
  );
}
