import {
  CalendarCheck,
  Video,
  LineChart,
  BellRing,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PORTAL_URL } from '@/lib/site-config'

const FEATURES = [
  {
    icon: Video,
    title: 'Consultas en línea',
    text: 'Atención nutricional profesional desde donde estés.',
  },
  {
    icon: LineChart,
    title: 'Seguimiento continuo',
    text: 'Metas biológicas y de hábitos con acompañamiento real.',
  },
  {
    icon: BellRing,
    title: 'Recordatorios',
    text: 'Turnos y pautas organizados en un solo lugar.',
  },
]

export function PatientPlatform() {
  return (
    <section
      id="plataforma-pacientes"
      className="bg-secondary py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Copy */}
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-tech" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tech">
                  Pacientes · B2C
                </span>
              </div>
              <h2 className="text-pretty text-3xl font-bold leading-tight text-navy md:text-4xl">
                Plataforma pacientes
              </h2>
              <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                Coordiná tu cita y gestioná tu seguimiento nutricional de forma
                simple, con atención profesional y acompañamiento continuo.
              </p>

              <div className="mt-8">
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-tech px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy"
                >
                  <CalendarCheck className="size-5" aria-hidden="true" />
                  Coordinar cita
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Feature panel */}
            <div className="relative flex flex-col justify-center gap-4 bg-navy p-8 sm:p-12 lg:p-14">
              {FEATURES.map(({ icon: Icon, title, text }, i) => (
                <Reveal
                  key={title}
                  delay={i * 100}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-tech/20 text-celeste">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-blue-100/80">
                      {text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
