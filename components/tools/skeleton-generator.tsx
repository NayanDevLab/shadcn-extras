'use client';

import React, { useState } from 'react';

import {
  ColorField,
  CopyBlock,
  RangeField,
  SwitchRow,
  ToolLayout,
} from './shared';

export function SkeletonGenerator() {
  const [lines, setLines] = useState(3);
  const [showAvatar, setShowAvatar] = useState(true);
  const [radius, setRadius] = useState(6);
  const [speed, setSpeed] = useState(1.4);
  const [baseColor, setBaseColor] = useState('#e4e4e7');
  const [highlightColor, setHighlightColor] = useState('#f4f4f5');

  const shimmer = `linear-gradient(90deg, ${baseColor} 25%, ${highlightColor} 50%, ${baseColor} 75%)`;

  const css = `.skeleton {
  border-radius: ${radius}px;
  background: ${shimmer};
  background-size: 200% 100%;
  animation: shimmer ${speed}s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`;

  const jsx = `<div className='flex items-start gap-4'>${
    showAvatar ? `\n  <div className='skeleton h-12 w-12 !rounded-full' />` : ''
  }
  <div className='flex-1 space-y-3'>
${Array.from({ length: lines })
  .map(
    (_, index) =>
      `    <div className='skeleton h-3' style={{ width: '${
        index === lines - 1 ? 60 : 100 - index * 10
      }%' }} />`
  )
  .join('\n')}
  </div>
</div>`;

  const skeletonStyle = (width?: string): React.CSSProperties => ({
    borderRadius: radius,
    background: shimmer,
    backgroundSize: '200% 100%',
    animation: `tool-shimmer ${speed}s ease-in-out infinite`,
    width,
  });

  return (
    <ToolLayout
      controls={
        <>
          <RangeField label='Lines' value={lines} min={1} max={6} unit='' onChange={setLines} />
          <SwitchRow label='Avatar' checked={showAvatar} onChange={setShowAvatar} />
          <RangeField label='Radius' value={radius} min={0} max={16} onChange={setRadius} />
          <RangeField label='Speed' value={speed} min={0.6} max={3} step={0.1} unit='s' onChange={setSpeed} />
          <ColorField label='Base color' value={baseColor} onChange={setBaseColor} />
          <ColorField label='Highlight' value={highlightColor} onChange={setHighlightColor} />
        </>
      }
    >
      <div className='flex min-h-64 w-full items-center justify-center rounded-3xl border bg-white p-8 shadow-sm dark:bg-zinc-900'>
        <style>{`@keyframes tool-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
        <div className='flex w-full max-w-md items-start gap-4'>
          {showAvatar && (
            <div
              className='h-12 w-12 shrink-0'
              style={{ ...skeletonStyle(), borderRadius: '9999px' }}
            />
          )}
          <div className='flex-1 space-y-3'>
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className='h-3'
                style={skeletonStyle(
                  `${index === lines - 1 ? 60 : 100 - index * 10}%`
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <CopyBlock label='CSS' code={css} />
      <CopyBlock label='JSX' code={jsx} />
    </ToolLayout>
  );
}
