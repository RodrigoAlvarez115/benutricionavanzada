import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { COVERAGE } from '@/lib/site-config'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
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
