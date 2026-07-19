'use client';

import React, { useState } from 'react';

import {
  ColorField,
  CopyBlock,
  RangeField,
  ToolLayout,
  hexToRgba,
} from './shared';

export function GlassmorphismGenerator() {
  const [blur, setBlur] = useState(12);
  const [bgOpacity, setBgOpacity] = useState(25);
  const [borderOpacity, setBorderOpacity] = useState(40);
  const [radius, setRadius] = useState(16);
  const [tint, setTint] = useState('#ffffff');
  const [saturation, setSaturation] = useState(140);

  const background = hexToRgba(tint, bgOpacity / 100);
  const borderColor = hexToRgba(tint, borderOpacity / 100);
  const backdrop = `blur(${blur}px) saturate(${saturation}%)`;

  const css = `background: ${background};
backdrop-filter: ${backdrop};
-webkit-backdrop-filter: ${backdrop};
border: 1px solid ${borderColor};
border-radius: ${radius}px;`;

  const tailwind = [
    `bg-[${background.replace(/\s+/g, '_')}]`,
    `backdrop-blur-[${blur}px]`,
    `backdrop-saturate-[${saturation}%]`,
    `border border-[${borderColor.replace(/\s+/g, '_')}]`,
    `rounded-[${radius}px]`,
  ].join(' ');

  return (
    <ToolLayout
      controls={
        <>
          <RangeField label='Blur' value={blur} min={0} max={32} onChange={setBlur} />
          <RangeField label='Background opacity' value={bgOpacity} min={0} max={80} unit='%' onChange={setBgOpacity} />
          <RangeField label='Border opacity' value={borderOpacity} min={0} max={100} unit='%' onChange={setBorderOpacity} />
          <RangeField label='Saturation' value={saturation} min={100} max={200} unit='%' onChange={setSaturation} />
          <RangeField label='Radius' value={radius} min={0} max={32} onChange={setRadius} />
          <ColorField label='Tint' value={tint} onChange={setTint} />
        </>
      }
    >
      <div className='relative flex min-h-80 w-full items-center justify-center overflow-hidden rounded-3xl border p-8 shadow-sm'>
        {/* Colorful backdrop so the glass effect is visible */}
        <div className='absolute inset-0 bg-[linear-gradient(135deg,#6366f1,#a855f7,#ec4899)]' />
        <div className='absolute top-8 left-10 h-32 w-32 rounded-full bg-yellow-300/70 blur-md' />
        <div className='absolute right-12 bottom-6 h-40 w-40 rounded-full bg-cyan-300/70 blur-md' />

        <div
          className='relative z-10 w-full max-w-sm p-6 text-white'
          style={{
            background,
            backdropFilter: backdrop,
            WebkitBackdropFilter: backdrop,
            border: `1px solid ${borderColor}`,
            borderRadius: radius,
          }}
        >
          <h3 className='text-lg font-semibold'>Glass card</h3>
          <p className='mt-1 text-sm opacity-90'>
            Frosted glass over a colorful background — tune the blur and
            opacity to taste.
          </p>
        </div>
      </div>

      <CopyBlock label='CSS' code={css} />
      <CopyBlock label='Tailwind CSS' code={tailwind} />
    </ToolLayout>
  );
}
