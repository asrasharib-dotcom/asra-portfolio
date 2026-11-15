
'use client'

import { useState, type FormEvent } from 'react'
import { Info, CheckCircle2, Loader2 } from 'lucide-react'
import { site } from '@/lib/site'
import { Magnetic } from '@/components/magnetic'

const fieldClass =
  'w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-blush focus:outline-none focus:ring-2 focus:ring-blush/20'

const formEndpoint = 'https://formspree.io/f/xbgogygn'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    setStatus('submitting')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface/80 p-6 backdrop-blur md:p-10"
      aria-describedby="form-status"
      aria-busy={status === 'submitting'}
    >
      <Magnetic strength={0.12}>
        <h3 className="font-serif text-3xl text-foreground">
          Start a project
        </h3>
      </Magnetic>

      <Magnetic strength={0.07}>
        <p className="mt-2 text-sm text-muted-foreground">
          Share a few details and what you have in mind.
        </p>
      </Magnetic>

      <input
        type="hidden"
        name="_subject"
        value="New Project Inquiry from Portfolio"
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Magnetic strength={0.1}>
            <label htmlFor="name" className="text-sm text-foreground/90">
              Name
            </label>
          </Magnetic>
          <Magnetic strength={0.06}>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </Magnetic>
        </div>

        <div className="flex flex-col gap-2">
          <Magnetic strength={0.1}>
            <label htmlFor="email" className="text-sm text-foreground/90">
              Email
            </label>
          </Magnetic>
          <Magnetic strength={0.06}>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
            />
          </Magnetic>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Magnetic strength={0.1}>
            <label htmlFor="company" className="text-sm text-foreground/90">
              Brand / Company{' '}
              <span className="text-muted-foreground">(optional)</span>
            </label>
          </Magnetic>
          <Magnetic strength={0.06}>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder="Brand name"
              className={fieldClass}
            />
          </Magnetic>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Magnetic strength={0.1}>
            <label htmlFor="message" className="text-sm text-foreground/90">
              Message
            </label>
          </Magnetic>
          <Magnetic strength={0.04}>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your brand and goals..."
              className={`${fieldClass} resize-none`}
            />
          </Magnetic>
        </div>
      </div>

      <Magnetic className="mt-8" strength={0.2}>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-10px_#527D89] transition-colors hover:bg-[#344F60] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send message'
          )}
        </button>
      </Magnetic>

      <div id="form-status" role="status" aria-live="polite">
        {status === 'success' && (
          <Magnetic strength={0.06}>
            <p className="mt-5 flex gap-3 rounded-xl border border-green-500/25 bg-green-500/10 p-4 text-sm leading-relaxed text-foreground/90">
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span>
                Thank you for reaching out! Your message has been sent
                successfully. I'll get back to you soon.
              </span>
            </p>
          </Magnetic>
        )}

        {status === 'error' && (
          <Magnetic strength={0.06}>
            <p className="mt-5 flex gap-3 rounded-xl border border-blush/25 bg-primary/15 p-4 text-sm leading-relaxed text-foreground/90">
              <Info
                className="mt-0.5 size-4 shrink-0 text-blush"
                aria-hidden="true"
              />
              <span>
                Something went wrong. Please try again or email me directly at{' '}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-blush underline underline-offset-4"
                >
                  {site.contact.email}
                </a>
                .
              </span>
            </p>
          </Magnetic>
        )}
      </div>
    </form>
  )
}