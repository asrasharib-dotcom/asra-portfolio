'use client'

import { useState, type FormEvent } from 'react'
import { Info } from 'lucide-react'
import { site } from '@/lib/site'

const fieldClass =
  'w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-blush focus:outline-none focus:ring-2 focus:ring-blush/20'

export function ContactForm() {
  const [notice, setNotice] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface/80 p-6 backdrop-blur md:p-10"
      aria-describedby="form-status"
    >
      <h3 className="font-serif text-3xl text-foreground">Start a project</h3>
      <p className="mt-2 text-sm text-muted-foreground">Share a few details and what you have in mind.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-foreground/90">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-foreground/90">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="company" className="text-sm text-foreground/90">
            Brand / Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <input id="company" name="company" autoComplete="organization" placeholder="Brand name" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm text-foreground/90">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your brand and goals..."
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-10px_#7b182b] transition-colors hover:bg-[#8f1e33]"
      >
        Send message
      </button>

      <div id="form-status" role="status" aria-live="polite">
        {notice && (
          <p className="mt-5 flex gap-3 rounded-xl border border-blush/25 bg-primary/15 p-4 text-sm leading-relaxed text-foreground/90">
            <Info className="mt-0.5 size-4 shrink-0 text-blush" aria-hidden="true" />
            <span>
              This form isn&apos;t connected to an email service yet, so your message was not sent.
              Please email me directly at{' '}
              <a href={`mailto:${site.contact.email}`} className="text-blush underline underline-offset-4">
                {site.contact.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  )
}
