
'use client'
import { Bricolage_Grotesque } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
})
const poses = [
  '/images/hero/front.png',
  '/images/hero/left.png',
  '/images/hero/right.png',
  '/images/hero/typing.png',
]

const poseNames = [
  'Front pose',
  'Looking left',
  'Looking right',
  'Typing on keyboard',
]

export function HeroPortrait() {
  const [poseIndex, setPoseIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const portraitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = portraitRef.current?.closest('section')
    if (!section) return

    function handleMove(event: Event) {
      const pointer = event as PointerEvent
      if (pointer.pointerType === 'touch') return

      const bounds = section.getBoundingClientRect()
      const x = (pointer.clientX - bounds.left) / bounds.width

      setIsHovering(true)

      if (x < 0.36) setPoseIndex(1)
      else if (x > 0.64) setPoseIndex(2)
      else setPoseIndex(0)
    }

    function handleLeave() {
      setIsHovering(false)
      setPoseIndex(0)
    }

    section.addEventListener('pointermove', handleMove)
    section.addEventListener('pointerleave', handleLeave)

    return () => {
      section.removeEventListener('pointermove', handleMove)
      section.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  useEffect(() => {
    if (isHovering) return

    const timer = window.setInterval(() => {
      setPoseIndex((current) => (current + 1) % poses.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [isHovering])

  return (
    <div
      ref={portraitRef}
      className="relative isolate mx-auto flex w-full max-w-2xl items-center justify-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-visible"
      >
        <span
  aria-hidden="true"
  className={`${bricolage.className} animate-[float_6s_ease-in-out_infinite] whitespace-nowrap text-[clamp(5rem,12vw,15rem)] font-extrabold leading-none tracking-tight text-[#263847]/65`}
>
  ASRA
</span>
      </div>

      <div className="relative z-10 aspect-[4/5] w-full max-w-lg">
        {poses.map((src, index) => (
          <div
            key={src}
            aria-hidden={poseIndex !== index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              poseIndex === index
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-2 scale-[0.98] opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={
                poseIndex === index
                  ? `Asra Sharib — ${poseNames[index]}`
                  : ''
              }
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain object-bottom"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
