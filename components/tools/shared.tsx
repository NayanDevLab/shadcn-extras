'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

/** Two-column tool layout: controls card on the left, preview + code right */
export function ToolLayout({
  controls,
  children,
}: {
  controls: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 p-4 lg:grid-cols-3 lg:p-0'>
      <div className='bg-card h-fit space-y-6 rounded-xl border p-6 shadow-sm'>
        {controls}
      </div>
      <div className='space-y-6 lg:col-span-2'>{children}</div>
    </div>
  );
}

export function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className='space-y-2'>
      <Label>{label}</Label>
      <div className='relative'>
        <input
          type='color'
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className='absolute top-1/2 left-1 h-8 w-8 -translate-y-1/2 cursor-pointer rounded border-0 bg-transparent p-0'
        />
        <Input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className='pl-12 font-mono uppercase'
          maxLength={7}
        />
      </div>
    </div>
  );
}

export function RangeField({
  label,
  value,
  min,
  max,
  step = 1,
  unit = 'px',
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <Label>{label}</Label>
        <span className='text-muted-foreground font-mono text-xs'>
          {value}
          {unit}
        </span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([next]) => onChange(next)}
      />
    </div>
  );
}

export function SwitchRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className='flex items-center justify-between'>
      <Label>{label}</Label>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

export function OptionGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  columns = 3,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  columns?: number;
}) {
  return (
    <div className='space-y-2'>
      <Label>{label}</Label>
      <div
        className='grid gap-2'
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {options.map((option) => (
          <Button
            key={option.value}
            variant={value === option.value ? 'default' : 'outline'}
            size='sm'
            onClick={() => onChange(option.value)}
            className='capitalize'
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export function CopyBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='space-y-2'>
      <Label>{label} (Click to copy)</Label>
      <div
        className='bg-muted hover:bg-muted/80 group relative cursor-pointer rounded-lg p-4 transition-colors'
        onClick={handleCopy}
      >
        <pre className='overflow-x-auto font-mono text-sm break-words whitespace-pre-wrap'>
          <code>{code}</code>
        </pre>
        <div className='absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100'>
          {copied ? (
            <Check className='h-4 w-4 text-green-500' />
          ) : (
            <Copy className='h-4 w-4' />
          )}
        </div>
      </div>
    </div>
  );
}

/** #rrggbb + opacity (0-1) -> rgba() string */
export function hexToRgba(hex: string, opacity: number): string {
  const clean = hex.replace('#', '');
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((char) => char + char)
          .join('')
      : clean;
  const r = parseInt(full.slice(0, 2), 16) || 0;
  const g = parseInt(full.slice(2, 4), 16) || 0;
  const b = parseInt(full.slice(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${Number(opacity.toFixed(2))})`;
}
