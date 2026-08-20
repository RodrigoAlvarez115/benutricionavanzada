'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight, CalendarCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { PORTAL_URL, NAV_ITEMS } from '@/lib/site-config'

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
          : 'border-transparent bg-background/70 backdrop-blur-sm',
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
          aria-label="BE Nutrición Avanzada — Inicio"
        >
          <Logo priority size="lg" className="sm:hidden" />
          <Logo priority size="xl" className="hidden sm:inline-flex" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-tech"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy/25 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-tech hover:text-tech"
          >
            Acceso pacientes
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-tech px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Solicitar turno
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
            <X className="size-7" aria-hidden="true" />
          ) : (
            <Menu className="size-7" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={cn('xl:hidden', open ? 'block' : 'hidden')}>
        <div className="mx-auto max-w-7xl border-t border-border bg-background px-4 pb-6 pt-2 sm:px-6">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-base font-medium text-navy transition-colors hover:text-tech"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-navy/25 px-4 py-3.5 text-base font-semibold text-navy transition-colors hover:border-tech hover:text-tech"
            >
              Acceso pacientes
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-tech px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy"
            >
              <CalendarCheck className="size-4" aria-hidden="true" />
              Solicitar turno
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
