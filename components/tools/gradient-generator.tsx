'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy, Plus, Trash2, Check, RefreshCw } from 'lucide-react';

type GradientType = 'linear' | 'radial' | 'conic';
type GradientDirection =
  'to-t' | 'to-tr' | 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-l' | 'to-tl';

const DIRECTIONS: { value: GradientDirection; label: string; angle: string }[] =
  [
    { value: 'to-tl', label: '↖', angle: '315deg' },
    { value: 'to-t', label: '↑', angle: '0deg' },
    { value: 'to-tr', label: '↗', angle: '45deg' },
    { value: 'to-l', label: '←', angle: '270deg' },
    { value: 'to-r', label: '→', angle: '90deg' }, // Center for grid alignment
    { value: 'to-bl', label: '↙', angle: '225deg' },
    { value: 'to-b', label: '↓', angle: '180deg' },
    { value: 'to-br', label: '↘', angle: '135deg' },
  ];

export function GradientGenerator() {
  const [type, setType] = useState<GradientType>('linear');
  const [direction, setDirection] = useState<GradientDirection>('to-br');
  const [colors, setColors] = useState<string[]>([
    '#6366f1',
    '#a855f7',
    '#ec4899',
  ]);
  const [copied, setCopied] = useState(false);

  // Generate CSS background string
  const getBackgroundStyle = () => {
    const colorString = colors.join(', ');
    if (type === 'linear') {
      // Tailwind uses specific logic, but for raw CSS style:
      const angle =
        DIRECTIONS.find((d) => d.value === direction)?.angle || '135deg';
      return `linear-gradient(${angle}, ${colorString})`;
    } else if (type === 'radial') {
      return `radial-gradient(circle, ${colorString})`;
    } else if (type === 'conic') {
      return `conic-gradient(from 180deg at 50% 50%, ${colorString})`;
    }
    return '';
  };

  // Generate Tailwind Class string (Arbitrary values)
  const getTailwindClass = () => {
    // Basic implementation for 2-3 colors which maps nicely to from- via- to-
    // For more colors, Tailwind arbitrary bg-[] is better or comma separated syntax is complex.
    // Let's stick to arbitrary utility class for the gradient itself if complex,
    // OR use the standard from/via/to for simple cases.

    // Strategy: Use bg-[...] for maximum compatibility with arbitrary colors and types
    const style = getBackgroundStyle();
    // Escape spaces and special chars for arbitrary value
    const arbitraryStyle = style.replace(/\s+/g, '_').replace(/,/g, ',');
    return `bg-[${arbitraryStyle}]`;
  };

  // Alternative: Construct standard tailwind classes if possible (linear only)
  const getStandardTailwindClasses = () => {
    if (type !== 'linear') return null;
    if (colors.length < 2 || colors.length > 3) return null;

    let classes = `bg-gradient-${direction}`;
    classes += ` from-[${colors[0]}]`;
    if (colors.length === 3) {
      classes += ` via-[${colors[1]}]`;
      classes += ` to-[${colors[2]}]`;
    } else {
      classes += ` to-[${colors[1]}]`;
    }
    return classes;
  };

  const generatedCode = getStandardTailwindClasses() || getTailwindClass();

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addColor = () => {
    if (colors.length < 5) {
      setColors([...colors, '#000000']);
    }
  };

  const removeColor = (index: number) => {
    if (colors.length > 2) {
      const newColors = [...colors];
      newColors.splice(index, 1);
      setColors(newColors);
    }
  };

  const updateColor = (index: number, value: string) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  const randomize = () => {
    const randomHex = () =>
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    setColors(colors.map(() => randomHex()));
  };

  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 p-4 lg:grid-cols-3 lg:p-0'>
      {/* Controls Panel */}
      <div className='bg-card h-fit space-y-8 rounded-xl border p-6 shadow-sm'>
        {/* Type Selector */}
        <div className='space-y-3'>
          <Label>Gradient Type</Label>
          <div className='grid grid-cols-3 gap-2'>
            {(['linear', 'radial', 'conic'] as const).map((t) => (
              <Button
                key={t}
                variant={type === t ? 'default' : 'outline'}
                onClick={() => setType(t)}
                className='capitalize'
                size='sm'
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        {/* Direction Selector (Linear Only) */}
        {type === 'linear' && (
          <div className='space-y-3'>
            <Label>Direction</Label>
            <div className='mx-auto grid w-fit grid-cols-3 gap-2'>
              {DIRECTIONS.map((dir) => (
                <Button
                  key={dir.value}
                  variant={direction === dir.value ? 'default' : 'outline'}
                  size='icon'
                  onClick={() => setDirection(dir.value)}
                  className={cn(
                    dir.value === 'to-r' ? 'col-start-3 row-start-2' : ''
                  )} // Just simple grid layout
                >
                  <span className='text-lg leading-none'>{dir.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Colors */}
        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <Label>Colors</Label>
            <Button
              variant='ghost'
              size='icon'
              onClick={randomize}
              title='Randomize Colors'
            >
              <RefreshCw className='h-4 w-4' />
            </Button>
          </div>
          <div className='space-y-2'>
            {colors.map((color, index) => (
              <div key={index} className='flex items-center gap-2'>
                <div className='relative flex-1'>
                  <input
                    type='color'
                    value={color}
                    onChange={(e) => updateColor(index, e.target.value)}
                    className='absolute top-1/2 left-1 h-8 w-8 -translate-y-1/2 cursor-pointer rounded border-0 bg-transparent p-0'
                  />
                  <Input
                    value={color}
                    onChange={(e) => updateColor(index, e.target.value)}
                    className='pl-12 font-mono uppercase'
                    maxLength={7}
                  />
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => removeColor(index)}
                  disabled={colors.length <= 2}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
            ))}
          </div>
          {colors.length < 5 && (
            <Button variant='outline' className='w-full' onClick={addColor}>
              <Plus className='mr-2 h-4 w-4' /> Add Color
            </Button>
          )}
        </div>
      </div>

      {/* Preview Panel */}
      <div className='space-y-6 lg:col-span-2'>
        <div
          className='aspect-video w-full rounded-3xl border shadow-2xl transition-all duration-500 ease-in-out'
          style={{ background: getBackgroundStyle() }}
        />

        <div className='space-y-2'>
          <Label>Tailwind CSS (Click to copy)</Label>
          <div
            className='bg-muted hover:bg-muted/80 group relative cursor-pointer rounded-lg p-4 font-mono text-sm break-all transition-colors'
            onClick={handleCopy}
          >
            {generatedCode}
            <div className='absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100'>
              {copied ? (
                <Check className='h-4 w-4 text-green-500' />
              ) : (
                <Copy className='h-4 w-4' />
              )}
            </div>
          </div>
        </div>

        <div className='space-y-2'>
          <Label>CSS Style</Label>
          <div className='bg-muted text-muted-foreground overflow-x-auto rounded-lg p-4 font-mono text-sm select-all'>
            background: {getBackgroundStyle()};
          </div>
        </div>
      </div>
    </div>
  );
}
