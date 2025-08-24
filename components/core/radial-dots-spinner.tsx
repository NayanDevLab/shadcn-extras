'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export type RadialDotsSpinnerProps = {
  /** Overall square size (px) */
  size?: number
  /** Number of radial spokes */
  spokes?: number
  /** Dots per spoke (excluding center rings) */
  dotsPerSpoke?: number
  /** Inner radius where spokes start (px) */
  innerRadius?: number
  /** Outer radius (px). Default: size/2 - 6 */
  outerRadius?: number
  /** Dot radius across spokes. Either fixed number or { inner, outer } to taper. */
  dotRadius?: number | { inner: number; outer: number }
  /** How many dotted rings around the center (0–3 works well) */
  centerRings?: number
  /** Radius of the first ring (px) */
  centerRingRadius?: number
  /** Gap between center rings (px) */
  centerRingGap?: number
  /** Dots on each center ring */
  centerRingDots?: number
  /** Seconds per full rotation (set 0 or falsey to disable spin) */
  speed?: number
  /** Extra classes (use to set color: text-white, text-zinc-900, etc.) */
  className?: string
  /** Extra classes applied to each dot (e.g. drop-shadow) */
  dotClassName?: string
  /** Accessible label */
  label?: string
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function RadialDotsSpinner({
  size = 160,
  spokes = 12,
  dotsPerSpoke = 10,
  innerRadius = 14,
  outerRadius,
  dotRadius = { inner: 2, outer: 3.5 },
  centerRings = 2,
  centerRingRadius = 10,
  centerRingGap = 6,
  centerRingDots = 16,
  speed = 1.6,
  className,
  dotClassName,
  label = 'Loading…',
}: RadialDotsSpinnerProps) {
  const w = size
  const h = size
  const cx = w / 2
  const cy = h / 2
  const R = outerRadius ?? Math.floor(size / 2) - 6
  const step = dotsPerSpoke > 1 ? (R - innerRadius) / (dotsPerSpoke - 1) : 0

  const getDotR = (idx: number) => {
    if (typeof dotRadius === 'number') return dotRadius
    const t = dotsPerSpoke <= 1 ? 0 : idx / (dotsPerSpoke - 1)
    return lerp(dotRadius.inner, dotRadius.outer, t)
  }

  // build center rings (array of arrays of points)
  const rings = Array.from({ length: Math.max(0, centerRings) }, (_, r) => {
    const radius = centerRingRadius + r * centerRingGap
    return Array.from({ length: centerRingDots }, (_, i) => {
      const a = (i / centerRingDots) * Math.PI * 2
      return {
        x: cx + Math.cos(a) * radius,
        y: cy + Math.sin(a) * radius,
      }
    })
  })

  // styles for rotation that work inside SVG everywhere
  const spinStyle: React.CSSProperties | undefined =
    speed && speed > 0
      ? {
          transformOrigin: '50% 50%',
          animation: `rds-rotate ${speed}s linear infinite`,
        }
      : undefined

  return (
    <svg
      role="status"
      aria-label={label}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={cn('inline-block align-middle text-current', className)}
    >
      {/* local keyframes so we don't depend on Tailwind's animate-spin */}
      <style>{`
        @keyframes rds-rotate {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* spin the whole group */}
      <g style={spinStyle}>
        {/* center dotted rings */}
        {rings.map((pts, ringIdx) =>
          pts.map((p, i) => (
            <circle
              key={`ring-${ringIdx}-${i}`}
              cx={p.x}
              cy={p.y}
              r={2.2}
              className={cn('fill-current', dotClassName)}
            />
          ))
        )}

        {/* spokes */}
        {Array.from({ length: spokes }, (_, s) => {
          const angle = (s / spokes) * Math.PI * 2
          const dx = Math.cos(angle)
          const dy = Math.sin(angle)

          return Array.from({ length: dotsPerSpoke }, (_, j) => {
            const r = innerRadius + j * step
            const x = cx + dx * r
            const y = cy + dy * r
            const rr = getDotR(j)
            return (
              <circle
                key={`sp-${s}-${j}`}
                cx={x}
                cy={y}
                r={rr}
                className={cn('fill-current', dotClassName)}
              />
            )
          })
        })}
      </g>
    </svg>
  )
}
