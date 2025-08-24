'use client'
import { ConcentricRingsSpinner } from '@/components/core/concentric-rings-spinner'

export function CrsBasic() {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-xl bg-black">
      <ConcentricRingsSpinner className="text-white" />
    </div>
  )
}
