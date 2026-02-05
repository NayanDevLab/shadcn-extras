'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check, Info } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

export function NoiseGenerator() {
  const [opacity, setOpacity] = useState(0.05);
  const [baseFrequency, setBaseFrequency] = useState(0.65);
  const [numOctaves, setNumOctaves] = useState(3);
  const [type, setType] = useState<'turbulence' | 'fractalNoise'>('turbulence');
  const [bgColor, setBgColor] = useState('#0f172a'); // slate-900
  const [bgGradient, setBgGradient] = useState(true);
  const [copied, setCopied] = useState(false);

  // Generate the SVG data URI for the noise
  const getNoiseSvg = () => {
    const svg = `
<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='${type}' 
      baseFrequency='${baseFrequency}' 
      numOctaves='${numOctaves}' 
      stitchTiles='stitch' 
    />
  </filter>
  <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='${opacity}' />
</svg>`
      .trim()
      .replace(/>\s+</g, '><');

    // Encode SVG for data URI
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };

  const getStyle = () => {
    const noiseUri = getNoiseSvg();
    let background = '';

    if (bgGradient) {
      background = `url("${noiseUri}"), linear-gradient(to bottom right, ${bgColor}, #000000)`;
    } else {
      background = `url("${noiseUri}"), ${bgColor}`;
    }

    return {
      backgroundImage: background,
    };
  };

  const generateCode = () => {
    const noiseSvg = `
<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='${type}' 
      baseFrequency='${baseFrequency}' 
      numOctaves='${numOctaves}' 
      stitchTiles='stitch' 
    />
  </filter>
  <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='${opacity}' />
</svg>`;

    const css = `
.bg-noise {
  background-image: url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(noiseSvg.trim().replace(/>\s+</g, '><'))}");
}`.trim();

    return css;
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
          <div className='flex items-center justify-between'>
            <Label className='text-base font-semibold'>Noise Type</Label>
          </div>
          <div className='bg-muted/50 flex rounded-lg p-1'>
            {(['turbulence', 'fractalNoise'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  'flex-1 rounded-md py-2 text-xs font-medium capitalize transition-all sm:text-sm',
                  type === t
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-primary hover:bg-background/50'
                )}
              >
                {t.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            ))}
          </div>
        </div>

        <div className='space-y-4'>
          <div className='space-y-3'>
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

          <div className='space-y-3'>
            <div className='flex justify-between text-sm'>
              <Label>Roughness (Frequency)</Label>
              <span className='text-muted-foreground'>{baseFrequency}</span>
            </div>
            <Slider
              min={0.1}
              max={2.0}
              step={0.05}
              value={[baseFrequency]}
              onValueChange={(v) => setBaseFrequency(v[0])}
            />
          </div>

          <div className='space-y-3'>
            <div className='flex justify-between text-sm'>
              <Label>Depth (Octaves)</Label>
              <span className='text-muted-foreground'>{numOctaves}</span>
            </div>
            <Slider
              min={1}
              max={5}
              step={1}
              value={[numOctaves]}
              onValueChange={(v) => setNumOctaves(v[0])}
            />
          </div>
        </div>

        <div className='space-y-4 border-t pt-4'>
          <Label className='text-base font-semibold'>Preview Settings</Label>

          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <Label className='text-sm'>Background Color</Label>
              <div className='flex items-center gap-2'>
                <div className='relative h-8 w-8 shrink-0 overflow-hidden rounded-full border shadow-sm'>
                  <input
                    type='color'
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className='absolute -left-[50%] -top-[50%] h-[200%] w-[200%] cursor-pointer border-0 bg-transparent p-0 [appearance:none]'
                  />
                </div>
                <Input
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className='h-8 w-20 text-center font-mono text-xs uppercase'
                  maxLength={7}
                />
              </div>
            </div>

            <div className='bg-muted/30 flex items-center justify-between rounded-lg border p-2'>
              <Label
                className='ml-1 cursor-pointer text-sm'
                htmlFor='gradient-mode'
              >
                Gradient Overlay
              </Label>
              <Switch
                id='gradient-mode'
                checked={bgGradient}
                onCheckedChange={setBgGradient}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className='space-y-6 lg:col-span-2'>
        <div
          className='relative aspect-video w-full overflow-hidden rounded-3xl border shadow-xl'
          style={getStyle()}
        >
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-background/80 max-w-sm rounded-xl border p-6 text-center shadow-lg backdrop-blur-sm'>
              <h3 className='mb-2 text-lg font-bold'>Content Overlay</h3>
              <p className='text-muted-foreground text-sm'>
                This demonstrates how the noise texture sits behind your
                content, adding depth without reducing readability.
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-2'>
          <Label className='flex items-center gap-2'>
            CSS Code <Info className='text-muted-foreground h-3 w-3' />
          </Label>
          <div
            className='bg-muted hover:bg-muted/80 group relative cursor-pointer overflow-x-auto rounded-lg p-4 font-mono text-sm transition-colors'
            onClick={handleCopy}
          >
            <pre className='text-xs'>{generateCode()}</pre>
            <div className='absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100'>
              {copied ? (
                <Check className='h-4 w-4 text-green-500' />
              ) : (
                <Copy className='h-4 w-4' />
              )}
            </div>
          </div>
          <p className='text-muted-foreground mt-2 text-xs'>
            Includes an optimized SVG data URI. Supports all modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}
