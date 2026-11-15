
'use client'

import Link from 'next/link'
import { useEffect, useState, type MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Magnetic } from '@/components/magnetic'

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void
    }
  }
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Tawk.to Live Chat
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {}

    const existingScript = document.getElementById('tawkto-widget')

    if (!existingScript) {
      const script = document.createElement('script')
      script.id = 'tawkto-widget'
      script.async = true
      script.src =
        'https://embed.tawk.to/6af9f50b6adb8e3c49dd2d1c/1k7g6adeg'
      script.charset = 'UTF-8'
      script.setAttribute('crossorigin', '*')
      document.body.appendChild(script)
    }
  }, [])

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    isHome: boolean,
  ) => {
    setOpen(false)

    if (isHome && window.location.pathname === '/') {
      event.preventDefault()
      window.history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleChatClick = () => {
    window.Tawk_API?.maximize?.()
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10"
      >
        <Magnetic strength={0.15}>
          <Link
            href="/"
            className="inline-block font-serif text-2xl tracking-wide text-foreground"
            onClick={() => setOpen(false)}
          >
            ASRA SHARIB<span className="text-blush">.</span>
          </Link>
        </Magnetic>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isHome = link.label.toLowerCase() === 'home'

            return (
              <li key={link.href}>
                <Magnetic strength={0.18}>
                  <Link
                    href={isHome ? '/#home' : link.href}
                    onClick={(event) => handleNavClick(event, isHome)}
                    className="group relative inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-blush transition-all duration-300 group-hover:w-full" />
                  </Link>
                </Magnetic>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Magnetic strength={0.15}>
            <button
              type="button"
              onClick={handleChatClick}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#344F60]"
            >
              Let's Talk
            </button>
          </Magnetic>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isHome = link.label.toLowerCase() === 'home'

              return (
                <li key={link.href}>
                  <Magnetic strength={0.1}>
                    <Link
                      href={isHome ? '/#home' : link.href}
                      onClick={(event) => handleNavClick(event, isHome)}
                      className="block py-3 font-serif text-3xl text-foreground"
                    >
                      {link.label}
                    </Link>
                  </Magnetic>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={() => {
              setOpen(false)
              handleChatClick()
            }}
            className="mt-5 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Let's Talk
          </button>
        </div>
      )}
    </header>
  )
}
