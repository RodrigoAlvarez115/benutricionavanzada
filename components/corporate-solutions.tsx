import { ScanLine, ShieldPlus, GraduationCap, UtensilsCrossed } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { Watermark } from '@/components/watermark'

const UNITS = [
  {
    icon: ScanLine,
    title: 'Diagnóstico biofísico',
    text: 'Evaluación con informe individual confidencial y reporte gerencial anónimo para RRHH.',
  },
  {
    icon: ShieldPlus,
    title: 'Salud ocupacional',
    text: 'Prevención de patologías profesionales, síndrome metabólico e hipertensión junto a Medicina Laboral.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitaciones',
    text: 'Talleres de crononutrición en turnos rotativos, energía operacional y manejo del estrés.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Consultoría de comedores',
    text: 'Ingeniería de menús para comedores corporativos y servicios de catering minero en campamento.',
  },
]

export function CorporateSolutions() {
  return (
    <section
      id="soluciones-corporativas"
      className="relative overflow-hidden bg-secondary py-20 md:py-28"
    >
      <Watermark
        tone="light"
        size={520}
        className="-right-24 top-10 w-[420px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Empresas · B2B"
          title="Soluciones corporativas"
          subtitle="Programas de nutrición y salud laboral diseñados para empresas, organizaciones y operaciones industriales de alta exigencia."
        />

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {UNITS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 2) * 90} className="flex gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-tech/10 text-tech">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="border-b border-border pb-8">
                <h3 className="text-xl font-bold text-navy">{title}</h3>
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
