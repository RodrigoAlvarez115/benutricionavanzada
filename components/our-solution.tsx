import { Building2, Mountain, Map } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const PILLARS = [
  {
    icon: Building2,
    title: 'Sedes corporativas',
    text: 'Atención e intervención en las sedes corporativas de Salta.',
  },
  {
    icon: Mountain,
    title: 'Proyectos de la Puna',
    text: 'Despliegue operativo en campamentos y proyectos de altura.',
  },
  {
    icon: Map,
    title: 'Resto del país',
    text: 'Acompañamiento remoto en cualquier punto del país.',
  },
]

export function OurSolution() {
  return (
    <section id="nuestra-solucion" className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-celeste" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-celeste">
                Nuestra solución
              </span>
            </div>
            <p className="text-balance text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
              Estructura flexible que integra las sedes corporativas en Salta y
              los proyectos de la Puna, como en el resto del país.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {PILLARS.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-tech/20 text-celeste">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-pretty leading-relaxed text-blue-100/80">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
