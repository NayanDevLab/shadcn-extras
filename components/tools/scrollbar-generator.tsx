'use client';

import React, { useState } from 'react';

import {
  ColorField,
  CopyBlock,
  RangeField,
  ToolLayout,
} from './shared';

export function ScrollbarGenerator() {
  const [width, setWidth] = useState(10);
  const [trackColor, setTrackColor] = useState('#f4f4f5');
  const [thumbColor, setThumbColor] = useState('#a1a1aa');
  const [hoverColor, setHoverColor] = useState('#71717a');
  const [radius, setRadius] = useState(8);

  const css = `/* WebKit (Chrome, Edge, Safari) */
.custom-scroll::-webkit-scrollbar {
  width: ${width}px;
  height: ${width}px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: ${trackColor};
  border-radius: ${radius}px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: ${thumbColor};
  border-radius: ${radius}px;
}
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: ${hoverColor};
}

/* Firefox */
.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: ${thumbColor} ${trackColor};
}`;

  return (
    <ToolLayout
      controls={
        <>
          <RangeField label='Width' value={width} min={4} max={20} onChange={setWidth} />
          <RangeField label='Radius' value={radius} min={0} max={12} onChange={setRadius} />
          <ColorField label='Track' value={trackColor} onChange={setTrackColor} />
          <ColorField label='Thumb' value={thumbColor} onChange={setThumbColor} />
          <ColorField label='Thumb hover' value={hoverColor} onChange={setHoverColor} />
        </>
      }
    >
      <div className='flex min-h-72 w-full items-center justify-center rounded-3xl border p-8 shadow-sm'>
        <style>{`
          .tool-scroll-preview::-webkit-scrollbar { width: ${width}px; height: ${width}px; }
          .tool-scroll-preview::-webkit-scrollbar-track { background: ${trackColor}; border-radius: ${radius}px; }
          .tool-scroll-preview::-webkit-scrollbar-thumb { background: ${thumbColor}; border-radius: ${radius}px; }
          .tool-scroll-preview::-webkit-scrollbar-thumb:hover { background: ${hoverColor}; }
          .tool-scroll-preview { scrollbar-width: thin; scrollbar-color: ${thumbColor} ${trackColor}; }
        `}</style>
        <div className='tool-scroll-preview h-56 w-full max-w-md overflow-y-scroll rounded-xl border p-4'>
          {Array.from({ length: 14 }).map((_, index) => (
            <p key={index} className='text-muted-foreground mb-3 text-sm'>
              Scroll me — line {index + 1}. This panel uses your custom
              scrollbar styles.
            </p>
          ))}
        </div>
      </div>

      <CopyBlock label='CSS' code={css} />
    </ToolLayout>
  );
}
