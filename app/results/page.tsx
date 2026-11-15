import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import OrganicResults from '@/components/organic-results'

export const metadata: Metadata = {
  title: 'Results & Analytics — Asra Sharib',
  description:
    'Explore social media performance, organic growth, Instagram insights, TikTok results, LinkedIn analytics and Meta Ads campaign performance.',
}

export default function ResultsPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-28 md:pt-36">
        <OrganicResults />
      </main>

      <SiteFooter />
    </>
  )
}