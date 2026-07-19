'use client';

import React from 'react';
import { previewFontFamily } from '@/lib/themes/fonts-meta';
import type { ThemePreset } from '@/lib/themes/types';
import { cn } from '@/lib/utils';

interface ThemePickerProps {
  presets: ThemePreset[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ThemePicker({ presets, selectedId, onSelect }: ThemePickerProps) {
  return (
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
      {presets.map((preset) => {
        const selected = preset.id === selectedId;
        return (
          <button
            key={preset.id}
            type='button'
            onClick={() => onSelect(preset.id)}
            aria-pressed={selected}
            className={cn(
              'group flex flex-col gap-2 border p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md',
              selected
                ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-zinc-50 dark:ring-offset-zinc-950'
                : 'ring-0'
            )}
            style={{
              backgroundColor: preset.light.background,
              color: preset.light.foreground,
              borderColor: preset.light.border,
              borderRadius: `calc(${preset.radius} + 4px)`,
            }}
          >
            <span
              className='text-sm font-semibold'
              style={{ fontFamily: previewFontFamily(preset.fonts.heading) }}
            >
              {preset.name}
            </span>
            <span
              className='line-clamp-2 text-xs opacity-70'
              style={{ fontFamily: previewFontFamily(preset.fonts.sans) }}
            >
              {preset.description}
            </span>
            <span className='mt-1 flex items-center gap-1.5'>
              {preset.swatches.map((color, index) => (
                <span
                  key={index}
                  className='size-4 rounded-full border border-black/10'
                  style={{ backgroundColor: color }}
                />
              ))}
            </span>
          </button>
        );
      })}
    </div>
  );
}
