import Image from 'next/image'
import {
  ArrowUpRight,
  CalendarCheck,
  MapPin,
  User,
  Building2,
} from 'lucide-react'
import { PORTAL_URL, COVERAGE } from '@/lib/site-config'

const AUDIENCES = [
  {
    icon: User,
    label: 'Pacientes',
    text: 'Atención nutricional y coordinación de citas.',
  },
  {
    icon: Building2,
    label: 'Empresas',
    text: 'Soluciones corporativas y salud laboral.',
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-tech" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tech">
              Nutrición de precisión · Salud corporativa
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
            Salud real.
            <span className="block text-tech">Rendimiento sostenible.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Evolución nutricional para entornos exigentes. Acompañamos a
            personas y organizaciones con intervención metabólica, diagnóstico
            de precisión y programas de salud laboral.
          </p>

          {/* Dual audience */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {AUDIENCES.map(({ icon: Icon, label, text }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-navy">{label}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-tech px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-navy/10 transition-colors hover:bg-navy"
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Solicitar turno
            </a>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy/25 px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:border-tech hover:text-tech"
            >
              Acceso pacientes
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Real consultorio photo */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl shadow-navy/10 sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/consultorio.jpg"
              alt="Consultorio de BE Nutrición Avanzada con equipamiento de diagnóstico InBody"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute -bottom-4 -left-4 -z-10 h-40 w-40 rounded-3xl bg-tech/10"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Coverage strip */}
      <div className="border-t border-border bg-navy">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <MapPin className="size-4 shrink-0 text-celeste" aria-hidden="true" />
          <p className="text-sm font-medium text-blue-100">
            <span className="font-semibold text-white">
              Cobertura regional:
            </span>{' '}
            {COVERAGE}
          </p>
        </div>
      </div>
    </section>
  )
}
