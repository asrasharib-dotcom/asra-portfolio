'use client'

import Image from 'next/image'
import { ArrowUp } from 'lucide-react'
import { Magnetic } from '@/components/magnetic'

export function FloatingContact() {
  const goToContact = () => {
    const contact = document.getElementById('contact')

    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', '#contact')
    } else {
      window.location.href = '/#contact'
    }
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Back to top — left side */}
      <Magnetic className="fixed bottom-6 left-6 z-50" strength={0.2}>
        <button
          type="button"
          onClick={goToTop}
          aria-label="Back to top"
          className="flex size-[40px] items-center justify-center rounded-full border-2 border-blush/50 bg-[#101827] text-white shadow-xl transition-transform duration-300 hover:scale-105"
        >
          <ArrowUp className="size-7" />
        </button>
      </Magnetic>

      {/* Contact — right side */}
      <Magnetic className="fixed bottom-6 right-6 z-50" strength={0.2}>
        <button
          type="button"
          onClick={goToContact}
          aria-label="Let's Talk"
          className="group relative flex items-center justify-center"
        >
          <span className="pointer-events-none absolute right-[calc(100%-10px)] translate-x-3 whitespace-nowrap rounded-full border border-white/10 bg-[#101827] px-5 py-3 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
            Let's Talk
          </span>

          <Image
            src="/images/hero/front.png"
            alt="Asra Sharib"
            width={100}
            height={100}
            className="size-[100px] rounded-full border-2 border-blush/50 object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      </Magnetic>
    </>
  )
}