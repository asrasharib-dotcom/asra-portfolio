import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { WorkGallery } from '@/components/work-gallery'
import { SocialPortfolio } from '@/components/social-portfolio'
import { OrganicResults } from '@/components/organic-results'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <WorkGallery />
        <SocialPortfolio />
        <OrganicResults />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
