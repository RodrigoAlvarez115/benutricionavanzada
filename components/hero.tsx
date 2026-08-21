import Image from 'next/image'
import { Watermark } from '@/components/watermark'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <Watermark
        tone="light"
        size={560}
        className="-right-28 -top-16 w-[420px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-tech" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tech">
              Nutrición de precisión · Salud corporativa
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
            BE Nutrición Avanzada
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Evolución nutricional para entornos exigentes: salud real,
            rendimiento sostenible.
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
    </section>
  )
}
