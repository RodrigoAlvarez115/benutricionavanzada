import { ScanLine, HeartPulse, UtensilsCrossed, Brain } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const COMPETENCIES = [
  {
    icon: ScanLine,
    title: 'Diagnóstico metabólico no invasivo',
    text: 'Protocolización y ejecución de mediciones segmentarias con InBody 270 para monitoreo de masa grasa, masa muscular, agua corporal y grasa visceral.',
  },
  {
    icon: HeartPulse,
    title: 'Estratificación y tratamiento cardiometabólico',
    text: 'Diseño de planes dietoterapéuticos adaptados a perfiles bioquímicos alterados, turnos rotativos y estrés fisiológico de altitud.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Auditoría nutricional del catering',
    text: 'Relevamiento técnico y optimización de minutas en campamento junto al proveedor de alimentación para garantizar opciones cardiosaludables y funcionales.',
  },
  {
    icon: Brain,
    title: 'Educación y cambio de hábitos',
    text: 'Talleres y abordaje psico-emocional enfocado en la adherencia sostenible de los colaboradores a largo plazo.',
  },
]

export function Competencies() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Equipo"
          title="Competencias del equipo"
          subtitle="Capacidades técnicas y clínicas que sostienen cada intervención."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {COMPETENCIES.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 2) * 100}
              className="flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm md:p-8"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
