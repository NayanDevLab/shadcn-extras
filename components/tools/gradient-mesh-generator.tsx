'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Copy, Check, Plus, Trash2 } from 'lucide-react';

type Blob = {
  id: string;
  color: string;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

const DEFAULT_BLOBS: Blob[] = [
  {
    id: '1',
    color: '#ec4899',
    top: 10,
    left: 20,
    size: 300,
    delay: 0,
    duration: 20,
  },
  {
    id: '2',
    color: '#8b5cf6',
    top: 40,
    left: 60,
    size: 350,
    delay: 2,
    duration: 18,
  },
  {
    id: '3',
    color: '#3b82f6',
    top: 70,
    left: 30,
    size: 250,
    delay: 4,
    duration: 25,
  },
];

export function GradientMeshGenerator() {
  const [blobs, setBlobs] = useState<Blob[]>(DEFAULT_BLOBS);
  const [bgColor, setBgColor] = useState('#0f172a'); // slate-950
  const [blur, setBlur] = useState(100); // blur-3xl equivalent roughly
  const [isAnimated, setIsAnimated] = useState(true);
  const [copied, setCopied] = useState(false);

  const addBlob = () => {
    if (blobs.length < 6) {
      setBlobs([
        ...blobs,
        {
          id: crypto.randomUUID(),
          color: '#22c55e',
          top: Math.random() * 80,
          left: Math.random() * 80,
          size: 200,
          delay: Math.random() * 5,
          duration: 15 + Math.random() * 10,
        },
      ]);
    }
  };

  const removeBlob = (id: string) => {
    if (blobs.length > 1) {
      setBlobs(blobs.filter((b) => b.id !== id));
    }
  };

  const updateBlob = (id: string, key: keyof Blob, value: any) => {
    setBlobs(blobs.map((b) => (b.id === id ? { ...b, [key]: value } : b)));
  };

  const generateCode = () => {
    const blobElements = blobs
      .map(
        (b) =>
          `  <div 
    className="absolute rounded-full mix-blend-multiply filter opacity-70 ${
      isAnimated ? 'animate-blob' : ''
    }"
    style={{
      backgroundColor: "${b.color}",
      top: "${b.top}%",
      left: "${b.left}%",
      width: "${b.size}px",
      height: "${b.size}px",
      filter: "blur(${blur}px)",
      animationDelay: "${b.delay}s",
      animationDuration: "${b.duration}s",
    }}
  />`
      )
      .join('\n');

    return `<div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: "${bgColor}" }}>
${blobElements}
</div>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 p-4 lg:grid-cols-3 lg:p-0'>
      {/* Controls */}
      <div className='bg-card h-fit max-h-[800px] space-y-6 overflow-y-auto rounded-xl border p-6 shadow-sm'>
        <div className='space-y-3'>
          <Label>Background Color</Label>
          <div className='flex items-center gap-2'>
            <input
              type='color'
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className='h-10 w-10 cursor-pointer rounded border-0 bg-transparent p-0'
            />
            <Input
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className='font-mono uppercase'
            />
          </div>
        </div>

        <div className='space-y-3'>
          <div className='flex justify-between'>
            <Label>Global Blur ({blur}px)</Label>
            <div className='flex items-center gap-2'>
              <Label htmlFor='animate' className='text-xs'>
                Animate
              </Label>
              <Switch
                id='animate'
                checked={isAnimated}
                onCheckedChange={setIsAnimated}
              />
            </div>
          </div>
          <Slider
            min={0}
            max={200}
            step={5}
            value={[blur]}
            onValueChange={(v) => setBlur(v[0])}
          />
        </div>

        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <Label>Blobs ({blobs.length}/6)</Label>
            <Button
              size='sm'
              variant='outline'
              onClick={addBlob}
              disabled={blobs.length >= 6}
            >
              <Plus className='mr-2 h-4 w-4' /> Add Blob
            </Button>
          </div>

          <div className='space-y-4'>
            {blobs.map((blob, index) => (
              <div
                key={blob.id}
                className='bg-muted/30 space-y-3 rounded-lg border p-3'
              >
                <div className='flex items-center justify-between'>
                  <span className='text-muted-foreground text-xs font-medium'>
                    Blob {index + 1}
                  </span>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-6 w-6'
                    onClick={() => removeBlob(blob.id)}
                  >
                    <Trash2 className='h-3 w-3' />
                  </Button>
                </div>

                <div className='flex gap-2'>
                  <input
                    type='color'
                    value={blob.color}
                    onChange={(e) =>
                      updateBlob(blob.id, 'color', e.target.value)
                    }
                    className='h-8 w-8 flex-shrink-0 cursor-pointer rounded border-0 bg-transparent p-0'
                  />
                  <div className='w-full space-y-1'>
                    <Label className='text-[10px]'>Position (Top/Left)</Label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input
                        type='number'
                        value={Math.round(blob.top)}
                        onChange={(e) =>
                          updateBlob(blob.id, 'top', Number(e.target.value))
                        }
                        className='h-7 text-xs'
                      />
                      <Input
                        type='number'
                        value={Math.round(blob.left)}
                        onChange={(e) =>
                          updateBlob(blob.id, 'left', Number(e.target.value))
                        }
                        className='h-7 text-xs'
                      />
                    </div>
                  </div>
                </div>

                <div className='space-y-1'>
                  <Label className='text-[10px]'>Size ({blob.size}px)</Label>
                  <Slider
                    min={50}
                    max={600}
                    step={10}
                    value={[blob.size]}
                    onValueChange={(v) => updateBlob(blob.id, 'size', v[0])}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className='space-y-6 lg:col-span-2'>
        <div
          className='relative isolate aspect-video w-full overflow-hidden rounded-3xl border shadow-2xl'
          style={{ backgroundColor: bgColor }}
        >
          {blobs.map((b) => (
            <div
              key={b.id}
              className={cn(
                'absolute rounded-full opacity-70 mix-blend-multiply',
                isAnimated && 'animate-blob'
              )}
              style={{
                backgroundColor: b.color,
                top: `${b.top}%`,
                left: `${b.left}%`,
                width: `${b.size}px`,
                height: `${b.size}px`,
                filter: `blur(${blur}px)`,
                transform: 'translate(-50%, -50%)', // Center based on pivot
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.duration}s`,
              }}
            />
          ))}
        </div>

        <div className='space-y-2'>
          <Label>React / JSX Code</Label>
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
          <p className='text-muted-foreground text-xs'>
            Note: Ensure you have `animate-blob` defined in your
            `tailwind.config.ts` for animations to work.
          </p>
        </div>
      </div>
    </div>
  );
}
