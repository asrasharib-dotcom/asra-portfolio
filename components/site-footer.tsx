import Link from 'next/link'
import { navLinks, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <Link href="/" className="font-serif text-3xl text-foreground">
            ASRA<span className="text-blush">.</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">{site.role}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-blush">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">
          {'© '}
          {new Date().getFullYear()} Asra Sharib
        </p>
      </div>
    </footer>
  )
}
