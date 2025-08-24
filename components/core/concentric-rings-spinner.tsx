'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type RadiusShape = number | { inner: number; outer: number }

export type ConcentricRingsSpinnerProps = {
  /** Canvas size in px (square) */
  size?: number
  /** Number of rings */
  rings?: number
  /** Dots per ring (constant or per-ring taper if you pass a function) */
  dotsPerRing?: number
  /** Radius for first (inner) ring */
  innerRadius?: number
  /** Space between rings */
  ringGap?: number
  /** Dot radius. Number for fixed or {inner, outer} to taper */
  dotRadius?: RadiusShape
  /** Seconds per revolution for middle ring */
  speed?: number
  /** Spin direction: 1 (cw) or -1 (ccw) */
  direction?: 1 | -1
  /** Fade the center (0..1). 0=no fade, 1=strong fade */
  fadeCenter?: number
  /** Fade the edges (0..1). 0=no fade, 1=strong fade */
  fadeEdge?: number
  /** Whether to alternately reverse rings (nice parallax) */
  alternate?: boolean
  /** Optional pulsing opacity */
  pulse?: boolean
  /** Extra classes */
  className?: string
  /** Extra classes for each dot */
  dotClassName?: string
  /** a11y label */
  label?: string
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function ConcentricRingsSpinner({
  size = 200,
  rings = 12,
  dotsPerRing = 36,
  innerRadius = 10,
  ringGap = 8,
  dotRadius = { inner: 2, outer: 4 },
  speed = 2,
  direction = 1,
  fadeCenter = 0.15,
  fadeEdge = 0.35,
  alternate = true,
  pulse = true,
  className,
  dotClassName,
  label = 'Loading…',
}: ConcentricRingsSpinnerProps) {
  const w = size
  const h = size
  const cx = w / 2
  const cy = h / 2

  const getDotR = (ringIdx: number) => {
    if (typeof dotRadius === 'number') return dotRadius
    // ringIdx: 0 (inner) -> rings-1 (outer)
    const t = rings <= 1 ? 0 : ringIdx / (rings - 1)
    return lerp(dotRadius.inner, dotRadius.outer, t)
  }

  // ring opacity falloff
  const opacityFor = (ringIdx: number) => {
    const t = rings <= 1 ? 0 : ringIdx / (rings - 1)
    const centerFade = lerp(1, 1 - fadeCenter, 1 - Math.abs(0.5 - t) * 2) // higher in middle
    const edgeFade = lerp(1, 1 - fadeEdge, t) // fade outer
    return Math.max(0, Math.min(1, centerFade * edgeFade))
  }

  return (
    <svg
      role="status"
      aria-label={label}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={cn('inline-block text-current', className)}
    >
      <style>{`
        @keyframes crs-rotate { to { transform: rotate(360deg); } }
        @keyframes crs-pulse  { 0%,100% { opacity: 1 } 50% { opacity: .6 } }
      `}</style>

      {Array.from({ length: rings }, (_, r) => {
        const radius = innerRadius + r * ringGap
        const dots = dotsPerRing
        const ringSpeed =
          speed * (0.6 + 0.8 * (r / Math.max(1, rings - 1))) // inner slower, outer faster
        const sign = alternate ? (r % 2 === 0 ? direction : (direction * -1) as 1 | -1) : direction

        const groupStyle: React.CSSProperties = {
          transformOrigin: '50% 50%',
          animation: `crs-rotate ${ringSpeed}s linear infinite`,
          animationDirection: sign === 1 ? 'normal' : 'reverse',
        }

        return (
          <g key={r} style={groupStyle} opacity={opacityFor(r)}>
            {Array.from({ length: dots }, (_, i) => {
              const a = (i / dots) * Math.PI * 2
              const x = cx + Math.cos(a) * radius
              const y = cy + Math.sin(a) * radius
              return (
                <circle
                  key={`${r}-${i}`}
                  cx={x}
                  cy={y}
                  r={getDotR(r)}
                  className={cn('fill-current', dotClassName)}
                  style={
                    pulse
                      ? {
                          animation: `crs-pulse ${1.4 + (i % 6) * 0.12}s ease-in-out infinite`,
                          animationDelay: `${(i * 20) % 400}ms`,
                        }
                      : undefined
                  }
                />
              )
            })}
          </g>
        )
      })}

      {/* tiny center dot for compositional balance */}
      <circle cx={cx} cy={cy} r={2} className={cn('fill-current/80', dotClassName)} />
    </svg>
  )
}
