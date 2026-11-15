
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WorkGallery } from '@/components/work-gallery'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WorkGallery />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
