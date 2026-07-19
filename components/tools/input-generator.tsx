'use client';

import React, { useState } from 'react';

import {
  ColorField,
  CopyBlock,
  RangeField,
  ToolLayout,
  hexToRgba,
} from './shared';

export function InputGenerator() {
  const [borderColor, setBorderColor] = useState('#d4d4d8');
  const [focusColor, setFocusColor] = useState('#6366f1');
  const [background, setBackground] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#18181b');
  const [radius, setRadius] = useState(8);
  const [height, setHeight] = useState(40);
  const [ringWidth, setRingWidth] = useState(3);

  const ringRgba = hexToRgba(focusColor, 0.25);

  const tailwind = [
    'w-full',
    `h-[${height}px]`,
    'px-3',
    `bg-[${background}]`,
    `text-[${textColor}]`,
    `rounded-[${radius}px]`,
    `border border-[${borderColor}]`,
    'outline-none transition-shadow',
    `focus:border-[${focusColor}]`,
    `focus:ring-[${ringWidth}px]`,
    `focus:ring-[${focusColor}]/25`,
  ].join(' ');

  const css = `input {
  width: 100%;
  height: ${height}px;
  padding: 0 12px;
  background: ${background};
  color: ${textColor};
  border: 1px solid ${borderColor};
  border-radius: ${radius}px;
  outline: none;
  transition: box-shadow 0.15s, border-color 0.15s;
}
input:focus {
  border-color: ${focusColor};
  box-shadow: 0 0 0 ${ringWidth}px ${ringRgba};
}`;

  return (
    <ToolLayout
      controls={
        <>
          <ColorField label='Border color' value={borderColor} onChange={setBorderColor} />
          <ColorField label='Focus color' value={focusColor} onChange={setFocusColor} />
          <ColorField label='Background' value={background} onChange={setBackground} />
          <ColorField label='Text color' value={textColor} onChange={setTextColor} />
          <RangeField label='Radius' value={radius} min={0} max={24} onChange={setRadius} />
          <RangeField label='Height' value={height} min={32} max={56} onChange={setHeight} />
          <RangeField label='Focus ring' value={ringWidth} min={0} max={8} onChange={setRingWidth} />
        </>
      }
    >
      <div className='flex min-h-64 w-full items-center justify-center rounded-3xl border p-8 shadow-sm'>
        <style>{`.tool-input-preview:focus { border-color: ${focusColor}; box-shadow: 0 0 0 ${ringWidth}px ${ringRgba}; }`}</style>
        <div className='w-full max-w-sm space-y-2'>
          <label className='text-sm font-medium'>Email address</label>
          <input
            placeholder='name@example.com'
            className='tool-input-preview w-full outline-none'
            style={{
              height,
              padding: '0 12px',
              background,
              color: textColor,
              border: `1px solid ${borderColor}`,
              borderRadius: radius,
              transition: 'box-shadow 0.15s, border-color 0.15s',
            }}
          />
          <p className='text-muted-foreground text-xs'>
            Click the input to see the focus ring.
          </p>
        </div>
      </div>

      <CopyBlock label='Tailwind CSS' code={tailwind} />
      <CopyBlock label='CSS' code={css} />
    </ToolLayout>
  );
}
