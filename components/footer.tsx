import { ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { ACCESS_URL, CONTACT, NAV_ITEMS, NUTREANDO_URL } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="bg-navy-dark text-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo variant="white" />
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-blue-100/80">
              BE NUTRICIÓN AVANZADA — Ciencia, Tecnología y Datos aplicados a la
              Salud Corporativa.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegación del pie de página">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-celeste">
              Navegación
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-blue-100/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={ACCESS_URL}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-celeste transition-colors hover:text-white"
                >
                  Acceso
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-celeste">
              Contacto
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-blue-100/80 transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100/80 transition-colors hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={NUTREANDO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100/80 transition-colors hover:text-white"
                >
                  Plataforma Nutreando
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-blue-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} BE Nutrición Avanzada. Todos los
            derechos reservados.
          </p>
          <p>{CONTACT.base}</p>
        </div>
      </div>
    </footer>
  )
}
