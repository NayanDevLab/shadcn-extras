'use client';

import React, { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  ColorField,
  CopyBlock,
  OptionGroup,
  RangeField,
  ToolLayout,
} from './shared';

type Direction = 'to-r' | 'to-br' | 'to-b' | 'to-tr';

const ANGLES: Record<Direction, string> = {
  'to-r': '90deg',
  'to-br': '135deg',
  'to-b': '180deg',
  'to-tr': '45deg',
};

export function TextGradientGenerator() {
  const [from, setFrom] = useState('#6366f1');
  const [via, setVia] = useState('#a855f7');
  const [to, setTo] = useState('#ec4899');
  const [useVia, setUseVia] = useState(true);
  const [direction, setDirection] = useState<Direction>('to-r');
  const [text, setText] = useState('Gradient text');
  const [fontSize, setFontSize] = useState(56);

  const colors = useVia ? [from, via, to] : [from, to];
  const gradient = `linear-gradient(${ANGLES[direction]}, ${colors.join(', ')})`;

  const tailwind = [
    `bg-gradient-${direction}`,
    `from-[${from}]`,
    useVia ? `via-[${via}]` : '',
    `to-[${to}]`,
    'bg-clip-text text-transparent',
    'font-bold',
  ]
    .filter(Boolean)
    .join(' ');

  const css = `background: ${gradient};
-webkit-background-clip: text;
background-clip: text;
color: transparent;`;

  return (
    <ToolLayout
      controls={
        <>
          <div className='space-y-2'>
            <Label>Text</Label>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <ColorField label='From' value={from} onChange={setFrom} />
          <div className='space-y-2'>
            <ColorField label='Via' value={via} onChange={setVia} />
            <button
              type='button'
              onClick={() => setUseVia(!useVia)}
              className='text-muted-foreground text-xs hover:underline'
            >
              {useVia ? 'Remove middle color' : 'Add middle color'}
            </button>
          </div>
          <ColorField label='To' value={to} onChange={setTo} />
          <OptionGroup
            label='Direction'
            columns={4}
            options={[
              { value: 'to-r', label: '→' },
              { value: 'to-br', label: '↘' },
              { value: 'to-b', label: '↓' },
              { value: 'to-tr', label: '↗' },
            ]}
            value={direction}
            onChange={setDirection}
          />
          <RangeField label='Font size' value={fontSize} min={24} max={96} onChange={setFontSize} />
        </>
      }
    >
      <div className='flex min-h-64 w-full items-center justify-center rounded-3xl border p-8 shadow-sm'>
        <span
          className='text-center font-bold tracking-tight'
          style={{
            fontSize,
            backgroundImage: gradient,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {text || 'Gradient text'}
        </span>
      </div>

      <CopyBlock label='Tailwind CSS' code={tailwind} />
      <CopyBlock label='CSS' code={css} />
    </ToolLayout>
  );
}
