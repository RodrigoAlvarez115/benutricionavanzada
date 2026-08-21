import { Logo } from '@/components/logo'
import { NAV_ITEMS } from '@/lib/site-config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo size="xl" />
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Evolución nutricional para entornos exigentes: salud real,
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
