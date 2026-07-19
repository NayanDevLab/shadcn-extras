'use client';

import React, { useState } from 'react';

import {
  ColorField,
  CopyBlock,
  SwitchRow,
  ToolLayout,
  hexToRgba,
} from './shared';

export function BadgeGenerator() {
  const [background, setBackground] = useState('#6366f1');
  const [textColor, setTextColor] = useState('#ffffff');
  const [pill, setPill] = useState(true);
  const [dot, setDot] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [soft, setSoft] = useState(false);

  const softBg = hexToRgba(background, 0.15);
  const resolvedBg = soft ? softBg : background;
  const resolvedText = soft ? background : textColor;

  const tailwind = [
    'inline-flex items-center gap-1.5',
    pill ? 'rounded-full' : 'rounded-md',
    'px-2.5 py-0.5 text-xs font-medium',
    uppercase ? 'uppercase tracking-wide' : '',
    soft ? `bg-[${background}]/15 text-[${background}]` : `bg-[${background}] text-[${textColor}]`,
  ]
    .filter(Boolean)
    .join(' ');

  const jsx = `<span className='${tailwind}'>${
    dot
      ? `\n  <span className='h-1.5 w-1.5 rounded-full bg-current' />`
      : ''
  }\n  Badge\n</span>`;

  return (
    <ToolLayout
      controls={
        <>
          <ColorField label='Color' value={background} onChange={setBackground} />
          <ColorField label='Text color' value={textColor} onChange={setTextColor} />
          <SwitchRow label='Pill shape' checked={pill} onChange={setPill} />
          <SwitchRow label='Status dot' checked={dot} onChange={setDot} />
          <SwitchRow label='Uppercase' checked={uppercase} onChange={setUppercase} />
          <SwitchRow label='Soft (tinted)' checked={soft} onChange={setSoft} />
        </>
      }
    >
      <div className='flex min-h-64 w-full flex-wrap items-center justify-center gap-4 rounded-3xl border p-8 shadow-sm'>
        {['Badge', 'New', 'In progress'].map((label) => (
          <span
            key={label}
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium ${
              pill ? 'rounded-full' : 'rounded-md'
            } ${uppercase ? 'tracking-wide uppercase' : ''}`}
            style={{ background: resolvedBg, color: resolvedText }}
          >
            {dot && (
              <span
                className='h-1.5 w-1.5 rounded-full'
                style={{ background: 'currentcolor' }}
              />
            )}
            {label}
          </span>
        ))}
      </div>

      <CopyBlock label='JSX + Tailwind' code={jsx} />
      <CopyBlock label='Tailwind classes' code={tailwind} />
    </ToolLayout>
  );
}
