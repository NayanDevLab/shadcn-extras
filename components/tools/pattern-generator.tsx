'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Copy, Check, Grid3X3, Minus, Circle } from 'lucide-react';

type PatternType = 'dots' | 'grid' | 'lines';

export function PatternGenerator() {
  const [type, setType] = useState<PatternType>('dots');
  const [color, setColor] = useState('#94a3b8'); // slate-400
  const [bgColor, setBgColor] = useState('transparent');
  const [size, setSize] = useState(16); // Gap size
  const [opacity, setOpacity] = useState(0.2);
  const [stroke, setStroke] = useState(1); // Dot radius or Line thickness
  const [copied, setCopied] = useState(false);

  // Helper to generate the bg-[...] string

  // Helper to generate the bg-[...] string - kept for future implementation
  /*
    const _getTailwindClass = () => {
        const bgHex = bgColor === "transparent" ? "" : `bg-[${bgColor}]`;
        let patternValue = "";

        if (type === "dots") {
            patternValue = `radial-gradient(${color}_${stroke}px,_transparent_${stroke}px),_radial-gradient(${color}_${stroke}px,_transparent_${stroke}px)`;
        } else if (type === "grid") {
            patternValue = `linear-gradient(to_right,${color}_${stroke}px,_transparent_${stroke}px),_linear-gradient(to_bottom,${color}_${stroke}px,_transparent_${stroke}px)`;
        } else if (type === "lines") {
            patternValue = `repeating-linear-gradient(45deg,${color}_0,${color}_${stroke}px,transparent_${stroke}px,transparent_${size}px)`;
        }
        return patternValue;
    };
    */

  const getStyle = () => {
    const s = size;
    const c = `rgba(${parseInt(color.slice(1, 3), 16)},${parseInt(color.slice(3, 5), 16)},${parseInt(color.slice(5, 7), 16)},${opacity})`;

    let background = '';
    let backgroundSize = `${s}px ${s}px`;

    if (type === 'dots') {
      background = `radial-gradient(${c} ${stroke}px, transparent ${stroke}px)`;
      // Dots usually look best with one layer, standard grid of dots
    } else if (type === 'grid') {
      background = `linear-gradient(to right, ${c} ${stroke}px, transparent ${stroke}px), linear-gradient(to bottom, ${c} ${stroke}px, transparent ${stroke}px)`;
    } else if (type === 'lines') {
      // For diagonal lines, background-size determines the repeat interval
      // but repeating-linear-gradient handles the spacing internally better
      background = `repeating-linear-gradient(45deg, ${c} 0, ${c} ${stroke}px, transparent 0, transparent 50%)`;
      backgroundSize = `${s}px ${s}px`; // logic varies for diagonal

      // Simpler version for controlled gap
      background = `repeating-linear-gradient(45deg, ${c} 0, ${c} ${stroke}px, transparent 0, transparent ${size}px)`;
      backgroundSize = ''; // Not needed for repeating-linear
    }

    return {
      backgroundColor: bgColor,
      backgroundImage: background,
      backgroundSize: backgroundSize || undefined,
    };
  };

  const generateCode = () => {
    const style = getStyle();
    const styleString = Object.entries(style)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: "${v}"`)
      .join(',\n  ');

    return `<div 
  className="w-full h-full"
  style={{
  ${styleString}
  }}
/>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 p-4 lg:grid-cols-3 lg:p-0'>
      {/* Controls */}
      <div className='bg-card h-fit space-y-6 rounded-xl border p-6 shadow-sm'>
        <div className='space-y-4'>
          <Label className='text-base font-semibold'>Pattern Type</Label>
          <div className='bg-muted/50 flex rounded-lg p-1'>
            {(['dots', 'grid', 'lines'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  'flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-all',
                  type === t
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-primary hover:bg-background/50'
                )}
              >
                {t === 'dots' && <Circle className='h-4 w-4' />}
                {t === 'grid' && <Grid3X3 className='h-4 w-4' />}
                {t === 'lines' && <Minus className='h-4 w-4 rotate-45' />}
                <span className='capitalize'>{t}</span>
              </button>
            ))}
          </div>
        </div>

        <div className='space-y-4'>
          <Label className='text-base font-semibold'>Colors</Label>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div className='space-y-2'>
              <Label className='text-muted-foreground text-xs uppercase tracking-wider'>
                Pattern
              </Label>
              <div className='flex items-center gap-2'>
                <div className='relative h-9 w-9 shrink-0 overflow-hidden rounded-full border shadow-sm'>
                  <input
                    type='color'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className='absolute -left-[50%] -top-[50%] h-[200%] w-[200%] cursor-pointer border-0 bg-transparent p-0 [appearance:none]'
                  />
                </div>
                <Input
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className='bg-background h-9 font-mono uppercase'
                  maxLength={7}
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label className='text-muted-foreground text-xs uppercase tracking-wider'>
                Background
              </Label>
              <div className='flex items-center gap-2'>
                <div
                  className={cn(
                    'relative h-9 w-9 shrink-0 overflow-hidden rounded-full border shadow-sm',
                    bgColor === 'transparent' &&
                      "bg-[url('https://transparent-textures.patterns.s3.amazonaws.com/subtle-grey.png')]"
                  )}
                >
                  {bgColor !== 'transparent' && (
                    <input
                      type='color'
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className='absolute -left-[50%] -top-[50%] h-[200%] w-[200%] cursor-pointer border-0 bg-transparent p-0 [appearance:none]'
                    />
                  )}
                </div>
                <Input
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className='bg-background h-9 font-mono lowercase'
                  placeholder='transparent'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <Label>Gap / Size</Label>
              <span className='text-muted-foreground'>{size}px</span>
            </div>
            <Slider
              min={4}
              max={100}
              step={2}
              value={[size]}
              onValueChange={(v) => setSize(v[0])}
            />
          </div>

          <div className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <Label>{type === 'dots' ? 'Radius' : 'Thickness'}</Label>
              <span className='text-muted-foreground'>{stroke}px</span>
            </div>
            <Slider
              min={1}
              max={10}
              step={0.5}
              value={[stroke]}
              onValueChange={(v) => setStroke(v[0])}
            />
          </div>

          <div className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <Label>Opacity</Label>
              <span className='text-muted-foreground'>
                {Math.round(opacity * 100)}%
              </span>
            </div>
            <Slider
              min={0.05}
              max={1}
              step={0.05}
              value={[opacity]}
              onValueChange={(v) => setOpacity(v[0])}
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className='space-y-6 lg:col-span-2'>
        <div
          className='bg-background relative aspect-video w-full overflow-hidden rounded-3xl border shadow-sm'
          style={{
            backgroundColor: bgColor === 'transparent' ? '#ffffff' : bgColor,
          }} // Default to white for preview if transparent
        >
          {/* Checkerboard for transparency indication */}
          {bgColor === 'transparent' && (
            <div
              className='absolute inset-0 opacity-20'
              style={{
                backgroundImage: `
                                linear-gradient(45deg, #000 25%, transparent 25%), 
                                linear-gradient(-45deg, #000 25%, transparent 25%), 
                                linear-gradient(45deg, transparent 75%, #000 75%), 
                                linear-gradient(-45deg, transparent 75%, #000 75%)
                            `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
              }}
            />
          )}

          <div
            className='absolute inset-0 h-full w-full transition-all duration-300'
            style={getStyle()}
          />
        </div>

        <div className='space-y-2'>
          <Label>React / CSS Code</Label>
          <div
            className='bg-muted hover:bg-muted/80 group relative cursor-pointer overflow-x-auto rounded-lg p-4 font-mono text-sm transition-colors'
            onClick={handleCopy}
          >
            <pre>{generateCode()}</pre>
            <div className='absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100'>
              {copied ? (
                <Check className='h-4 w-4 text-green-500' />
              ) : (
                <Copy className='h-4 w-4' />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
