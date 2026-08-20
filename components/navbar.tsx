'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { ACCESS_URL, NAV_ITEMS } from '@/lib/site-config'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background/60 backdrop-blur-sm',
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
          aria-label="BE Nutrición Avanzada — Inicio"
        >
          <Logo priority />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-tech"
            >
              {item.label}
            </a>
          ))}
          <a
            href={ACCESS_URL}
            className="ml-3 inline-flex items-center gap-1.5 rounded-md border border-navy/25 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-tech hover:bg-tech hover:text-white"
          >
            Acceso
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-navy transition-colors hover:bg-muted xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'xl:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="mx-auto max-w-7xl border-t border-border bg-background px-4 pb-6 pt-2 sm:px-6">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-base font-medium text-navy transition-colors hover:text-tech"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ACCESS_URL}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-navy px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Acceso
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
