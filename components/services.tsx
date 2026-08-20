import {
  Activity,
  ClipboardCheck,
  Presentation,
  Stethoscope,
  Video,
  PlayCircle,
  Smartphone,
  BarChart3,
  MapPin,
  Cloud,
} from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const ONSITE = [
  {
    icon: Activity,
    title: 'Estación móvil InBody 270',
    text: 'Diagnóstico biofísico in-situ en campamentos y oficinas.',
  },
  {
    icon: ClipboardCheck,
    title: 'Auditoría de comedores',
    text: 'Asesoramiento e ingeniería de menús para catering minero.',
  },
  {
    icon: Presentation,
    title: 'Workshops vivenciales',
    text: 'Talleres prácticos sobre energía operacional y nutrición.',
  },
  {
    icon: Stethoscope,
    title: 'Diagnóstico ocupacional',
    text: 'Detección temprana de patologías en salud laboral.',
  },
]

const DIGITAL = [
  {
    icon: Video,
    title: 'Consultas virtuales',
    text: 'Atención uno a uno para colaboradores en descanso o teletrabajo.',
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

type Item = { icon: React.ElementType; title: string; text: string }

function BlockList({ items, inverted }: { items: Item[]; inverted?: boolean }) {
  return (
    <ul className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title} className="flex gap-4">
          <div
            className={
              inverted
                ? 'flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-celeste'
                : 'flex size-11 shrink-0 items-center justify-center rounded-lg bg-tech/10 text-tech'
            }
          >
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <div>
            <h4 className={inverted ? 'font-semibold text-white' : 'font-semibold text-navy'}>
              {title}
            </h4>
            <p
              className={
                inverted
                  ? 'mt-1 text-sm leading-relaxed text-blue-100/80'
                  : 'mt-1 text-sm leading-relaxed text-muted-foreground'
              }
            >
              {text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Presencial y remoto, según cada operación"
          subtitle="Combinamos despliegue presencial en sede y campamento con un ecosistema digital de acompañamiento continuo."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* On-site block */}
          <Reveal className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-navy text-white">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tech">
                  Despliegue presencial
                </p>
                <h3 className="text-xl font-bold text-navy">On-Site</h3>
              </div>
            </div>
            <BlockList items={ONSITE} />
          </Reveal>

          {/* Digital block */}
          <Reveal
            delay={120}
            className="rounded-2xl border border-navy bg-navy p-8 shadow-md md:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-tech text-white">
                <Cloud className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-celeste">
                  Ecosistema digital
                </p>
                <h3 className="text-xl font-bold text-white">Remoto</h3>
              </div>
            </div>
            <BlockList items={DIGITAL} inverted />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
