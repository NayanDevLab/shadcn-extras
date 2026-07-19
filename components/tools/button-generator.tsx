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

type HoverEffect = 'none' | 'darken' | 'lift' | 'grow';

export function ButtonGenerator() {
  const [background, setBackground] = useState('#18181b');
  const [textColor, setTextColor] = useState('#ffffff');
  const [radius, setRadius] = useState(8);
  const [paddingX, setPaddingX] = useState(20);
  const [paddingY, setPaddingY] = useState(10);
  const [fontSize, setFontSize] = useState(14);
  const [shadow, setShadow] = useState(true);
  const [hover, setHover] = useState<HoverEffect>('darken');

  const hoverClass = {
    none: '',
    darken: 'hover:brightness-90',
    lift: 'hover:-translate-y-0.5 hover:shadow-lg',
    grow: 'hover:scale-105',
  }[hover];

  const tailwind = [
    `bg-[${background}]`,
    `text-[${textColor}]`,
    `rounded-[${radius}px]`,
    `px-[${paddingX}px]`,
    `py-[${paddingY}px]`,
    `text-[${fontSize}px]`,
    'font-medium',
    shadow ? 'shadow-md' : '',
    'transition-all duration-200',
    hoverClass,
  ]
    .filter(Boolean)
    .join(' ');

  const css = [
    `background: ${background};`,
    `color: ${textColor};`,
    `border-radius: ${radius}px;`,
    `padding: ${paddingY}px ${paddingX}px;`,
    `font-size: ${fontSize}px;`,
    `font-weight: 500;`,
    shadow ? 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);' : null,
    'transition: all 0.2s;',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <ToolLayout
      controls={
        <>
          <ColorField label='Background' value={background} onChange={setBackground} />
          <ColorField label='Text color' value={textColor} onChange={setTextColor} />
          <RangeField label='Radius' value={radius} min={0} max={32} onChange={setRadius} />
          <RangeField label='Padding X' value={paddingX} min={8} max={48} onChange={setPaddingX} />
          <RangeField label='Padding Y' value={paddingY} min={4} max={24} onChange={setPaddingY} />
          <RangeField label='Font size' value={fontSize} min={11} max={20} onChange={setFontSize} />
          <SwitchRow label='Shadow' checked={shadow} onChange={setShadow} />
          <OptionGroup
            label='Hover effect'
            columns={2}
            options={[
              { value: 'none', label: 'None' },
              { value: 'darken', label: 'Darken' },
              { value: 'lift', label: 'Lift' },
              { value: 'grow', label: 'Grow' },
            ]}
            value={hover}
            onChange={setHover}
          />
        </>
      }
    >
      <div className='flex min-h-64 w-full items-center justify-center gap-4 rounded-3xl border bg-[radial-gradient(circle_at_50%_0%,rgba(120,120,255,0.08),transparent_60%)] p-8 shadow-sm'>
        <button
          type='button'
          className={`font-medium transition-all duration-200 ${
            hover === 'lift' ? 'hover:-translate-y-0.5 hover:shadow-lg' : ''
          } ${hover === 'grow' ? 'hover:scale-105' : ''} ${
            hover === 'darken' ? 'hover:brightness-90' : ''
          }`}
          style={{
            background,
            color: textColor,
            borderRadius: radius,
            padding: `${paddingY}px ${paddingX}px`,
            fontSize,
            boxShadow: shadow ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' : undefined,
          }}
        >
          Click me
        </button>
      </div>

      <CopyBlock label='Tailwind CSS' code={tailwind} />
      <CopyBlock label='CSS' code={css} />
    </ToolLayout>
  );
}
