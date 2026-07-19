'use client';

import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  ColorField,
  CopyBlock,
  RangeField,
  SwitchRow,
  ToolLayout,
  hexToRgba,
} from './shared';

interface ShadowLayer {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
}

const DEFAULT_LAYER: ShadowLayer = {
  x: 0,
  y: 8,
  blur: 24,
  spread: -4,
  color: '#18181b',
  opacity: 0.2,
  inset: false,
};

export function ShadowGenerator() {
  const [layers, setLayers] = useState<ShadowLayer[]>([{ ...DEFAULT_LAYER }]);
  const [active, setActive] = useState(0);

  const layer = layers[active] ?? layers[0];

  const updateLayer = (patch: Partial<ShadowLayer>) => {
    setLayers(
      layers.map((item, index) =>
        index === active ? { ...item, ...patch } : item
      )
    );
  };

  const addLayer = () => {
    if (layers.length >= 4) return;
    setLayers([...layers, { ...DEFAULT_LAYER, y: 2, blur: 8, opacity: 0.1 }]);
    setActive(layers.length);
  };

  const removeLayer = (index: number) => {
    if (layers.length <= 1) return;
    const next = layers.filter((_, i) => i !== index);
    setLayers(next);
    setActive(Math.min(active, next.length - 1));
  };

  const boxShadow = layers
    .map(
      (item) =>
        `${item.inset ? 'inset ' : ''}${item.x}px ${item.y}px ${item.blur}px ${
          item.spread
        }px ${hexToRgba(item.color, item.opacity)}`
    )
    .join(', ');

  const tailwind = `shadow-[${boxShadow.replace(/\s+/g, '_')}]`;

  return (
    <ToolLayout
      controls={
        <>
          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <Label>Layers</Label>
              <Button
                variant='ghost'
                size='icon'
                onClick={addLayer}
                disabled={layers.length >= 4}
              >
                <Plus className='h-4 w-4' />
              </Button>
            </div>
            <div className='flex flex-wrap gap-2'>
              {layers.map((_, index) => (
                <div key={index} className='flex items-center'>
                  <Button
                    variant={index === active ? 'default' : 'outline'}
                    size='sm'
                    onClick={() => setActive(index)}
                  >
                    {index + 1}
                  </Button>
                  {layers.length > 1 && index === active && (
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => removeLayer(index)}
                    >
                      <Trash2 className='h-4 w-4' />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <RangeField label='Offset X' value={layer.x} min={-40} max={40} onChange={(x) => updateLayer({ x })} />
          <RangeField label='Offset Y' value={layer.y} min={-40} max={40} onChange={(y) => updateLayer({ y })} />
          <RangeField label='Blur' value={layer.blur} min={0} max={80} onChange={(blur) => updateLayer({ blur })} />
          <RangeField label='Spread' value={layer.spread} min={-24} max={24} onChange={(spread) => updateLayer({ spread })} />
          <RangeField
            label='Opacity'
            value={Math.round(layer.opacity * 100)}
            min={0}
            max={100}
            unit='%'
            onChange={(value) => updateLayer({ opacity: value / 100 })}
          />
          <ColorField label='Color' value={layer.color} onChange={(color) => updateLayer({ color })} />
          <SwitchRow label='Inset' checked={layer.inset} onChange={(inset) => updateLayer({ inset })} />
        </>
      }
    >
      <div className='flex min-h-72 w-full items-center justify-center rounded-3xl border bg-zinc-50 p-8 dark:bg-zinc-900'>
        <div
          className='flex h-40 w-64 items-center justify-center rounded-2xl bg-white text-sm font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300'
          style={{ boxShadow }}
        >
          Shadow preview
        </div>
      </div>

      <CopyBlock label='CSS' code={`box-shadow: ${boxShadow};`} />
      <CopyBlock label='Tailwind CSS' code={tailwind} />
    </ToolLayout>
  );
}
