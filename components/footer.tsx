import { Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'
import { CONTACT, NAV_ITEMS } from '@/lib/site-config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo size="xl" />
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Evolución nutricional para entornos exigentes. Salud real,
              rendimiento sostenible.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Secciones">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
              Secciones
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-tech"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0 text-tech" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-tech"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin
                  className="size-4 shrink-0 text-tech"
                  aria-hidden="true"
                />
                <span>{CONTACT.base}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © {year} BE Nutrición Avanzada. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
