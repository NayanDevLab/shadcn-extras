'use client';

import React, { useState } from 'react';

import {
  ColorField,
  CopyBlock,
  OptionGroup,
  RangeField,
  SwitchRow,
  ToolLayout,
} from './shared';

type ShadowPreset = 'none' | 'sm' | 'md' | 'lg' | 'xl';

const SHADOWS: Record<ShadowPreset, string> = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
};

export function CardGenerator() {
  const [background, setBackground] = useState('#ffffff');
  const [borderColor, setBorderColor] = useState('#e4e4e7');
  const [radius, setRadius] = useState(16);
  const [padding, setPadding] = useState(24);
  const [borderWidth, setBorderWidth] = useState(1);
  const [shadow, setShadow] = useState<ShadowPreset>('md');
  const [hoverLift, setHoverLift] = useState(true);

  const tailwind = [
    `bg-[${background}]`,
    `rounded-[${radius}px]`,
    `p-[${padding}px]`,
    borderWidth > 0 ? `border-[${borderWidth}px] border-[${borderColor}]` : '',
    shadow !== 'none' ? `shadow-${shadow}` : '',
    hoverLift ? 'transition-all hover:-translate-y-1 hover:shadow-xl' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const jsx = `<div className='${tailwind}'>
  <h3 className='text-lg font-semibold'>Card title</h3>
  <p className='mt-1 text-sm text-zinc-500'>
    Card description goes here.
  </p>
</div>`;

  return (
    <ToolLayout
      controls={
        <>
          <ColorField label='Background' value={background} onChange={setBackground} />
          <ColorField label='Border color' value={borderColor} onChange={setBorderColor} />
          <RangeField label='Radius' value={radius} min={0} max={32} onChange={setRadius} />
          <RangeField label='Padding' value={padding} min={12} max={48} onChange={setPadding} />
          <RangeField label='Border width' value={borderWidth} min={0} max={4} onChange={setBorderWidth} />
          <OptionGroup
            label='Shadow'
            columns={5}
            options={(['none', 'sm', 'md', 'lg', 'xl'] as const).map((s) => ({
              value: s,
              label: s,
            }))}
            value={shadow}
            onChange={setShadow}
          />
          <SwitchRow label='Hover lift' checked={hoverLift} onChange={setHoverLift} />
        </>
      }
    >
      <div className='flex min-h-72 w-full items-center justify-center rounded-3xl border bg-zinc-50 p-8 dark:bg-zinc-900'>
        <div
          className={
            hoverLift
              ? 'transition-all hover:-translate-y-1 hover:shadow-xl'
              : ''
          }
          style={{
            background,
            borderRadius: radius,
            padding,
            border: borderWidth > 0 ? `${borderWidth}px solid ${borderColor}` : undefined,
            boxShadow: SHADOWS[shadow],
            width: '100%',
            maxWidth: 340,
          }}
        >
          <h3 className='text-lg font-semibold text-zinc-900'>Card title</h3>
          <p className='mt-1 text-sm text-zinc-500'>
            This is a live preview of your card. Hover it to test the lift
            effect.
          </p>
          <div className='mt-4 h-2 w-2/3 rounded-full bg-zinc-100' />
          <div className='mt-2 h-2 w-1/2 rounded-full bg-zinc-100' />
        </div>
      </div>

      <CopyBlock label='JSX + Tailwind' code={jsx} />
      <CopyBlock label='Tailwind classes' code={tailwind} />
    </ToolLayout>
  );
}
