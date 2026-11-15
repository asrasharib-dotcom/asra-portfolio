
'use client'

import { useRef, type ReactNode, type PointerEvent } from 'react'

export function Magnetic({
  children,
  className = '',
  strength = 0.2,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return

    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()

    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)

    el.style.transition = 'transform 100ms ease-out'
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return

    el.style.transition = 'transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)'
    el.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
