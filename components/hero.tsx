import Image from 'next/image'
import { ArrowRight, MapPin, Building2, Truck, MonitorSmartphone } from 'lucide-react'
import { COVERAGE } from '@/lib/site-config'

const FEATURES = [
  { icon: Building2, label: 'Presencial In-Company' },
  { icon: Truck, label: 'Estaciones Móviles en Campamento Puna' },
  { icon: MonitorSmartphone, label: 'Plataforma Remota 100% Online' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-puna-mining.png"
          alt="Operación minera de altura en la Puna Salteña"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-celeste" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-celeste">
              Nutrición de precisión · Salud corporativa
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Salud, rendimiento y productividad corporativa
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-blue-100/90 lg:text-xl">
            Programas Integrales de Nutrición de Precisión y Bienestar Laboral
            para el Sector Industrial y Minero en la Puna Salteña.
          </p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                <Icon className="size-4 text-celeste" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-tech px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-navy/40 transition-all hover:bg-celeste hover:text-navy"
            >
              Solicitar prueba piloto
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#solucion"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Conocer nuestra solución
            </a>
          </div>
        </div>
      </div>

      {/* Coverage strip */}
      <div className="relative border-t border-white/10 bg-navy-dark/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <MapPin className="size-4 shrink-0 text-celeste" aria-hidden="true" />
          <p className="text-sm font-medium text-blue-100">
            <span className="font-semibold text-white">
              Cobertura Regional:
            </span>{' '}
            {COVERAGE}
          </p>
        </div>
      </div>
    </section>
  )
}
