import { Video, Smartphone, PlayCircle, BarChart3 } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    icon: Video,
    title: 'Consultas virtuales',
    text: 'Atención nutricional uno a uno para colaboradores en descanso o teletrabajo.',
  },
  {
    icon: Smartphone,
    title: 'Seguimiento',
    text: 'Plataforma innovadora de acceso continuo para lograr metas biológicas y de hábitos.',
  },
  {
    icon: PlayCircle,
    title: 'Webinars',
    text: 'Capacitaciones remotas desde cualquier punto del país.',
  },
  {
    icon: BarChart3,
    title: 'Reportes',
    text: 'Dashboard consolidado con KPIs para las empresas.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Acompañamiento remoto y continuo"
          subtitle="Un ecosistema digital que sostiene la intervención nutricional en cualquier punto del país."
        />

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 2) * 90} className="flex gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
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
