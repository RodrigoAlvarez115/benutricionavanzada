import Image from 'next/image'
import { ScanLine, HeartPulse, UtensilsCrossed, Brain } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Watermark } from '@/components/watermark'

const PROFILES = [
  {
    name: 'Lic. Silvana Rivas',
    license: 'M.P. 558',
    role: 'Co-Directora | Especialista en Composición Corporal y Gestión Alimentaria',
    points: [
      'Licenciada en Nutrición — Universidad Nacional de Salta.',
      'Especialización en Nutrigenética.',
      'Certificación Internacional en Antropometría ISAK I.',
      'Más de 9 años de experiencia en evaluación y seguimiento de composición corporal con tecnología InBody.',
      'Experiencia en control y gestión de servicios de alimentación.',
    ],
  },
  {
    name: 'Lic. Cecilia Inés Belton',
    license: 'M.P. 475',
    role: 'Co-Directora | Especialista en Fisiopatología Cardiometabólica y Diabetes',
    points: [
      'Licenciada en Nutrición — Universidad Nacional de Córdoba.',
      'Especialista técnica y clínica en Diabetes, Tecnología Metabólica e Infusores Continuos de Insulina.',
      'Formación especializada en diabetes y enfermedades cardiometabólicas.',
      'Más de 12 años de experiencia en el abordaje clínico de enfermedades crónicas no transmisibles.',
      'Experiencia hospitalaria.',
    ],
  },
]

const COMPETENCIES = [
  {
    icon: ScanLine,
    title: 'Diagnóstico metabólico no invasivo',
    text: 'Mediciones segmentarias con InBody 270: masa grasa, masa muscular, agua corporal y grasa visceral.',
  },
  {
    icon: HeartPulse,
    title: 'Tratamiento cardiometabólico',
    text: 'Planes dietoterapéuticos adaptados a perfiles bioquímicos, turnos rotativos y altitud.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Auditoría nutricional del catering',
    text: 'Optimización de minutas en campamento para opciones cardiosaludables y funcionales.',
  },
  {
    icon: Brain,
    title: 'Educación y cambio de hábitos',
    text: 'Abordaje psico-emocional enfocado en la adherencia sostenible a largo plazo.',
  },
]

export function About() {
  return (
    <section
      id="quienes-somos"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <Watermark tone="light" size={520} className="-left-28 top-24 w-[380px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Presentation + photo */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl shadow-navy/10">
              <Image
                src="/images/equipo-bena.jpg"
                alt="Lic. Silvana Rivas y Lic. Cecilia Inés Belton, co-directoras de BE Nutrición Avanzada"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-tech" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tech">
                Quiénes somos
              </span>
            </div>
            <h2 className="text-pretty text-3xl font-bold leading-tight text-navy md:text-4xl">
              BE Nutrición Avanzada
            </h2>
            <p className="mt-3 text-pretty text-lg font-medium text-tech">
              Evolución nutricional para entornos exigentes: salud real,
              rendimiento sostenible.
            </p>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Dirección técnica y consultoría especializada en intervención
              metabólica, diagnóstico clínico de precisión y programas de salud
              laboral para la industria minera. Integramos tecnología médica de
              bioimpedancia segmentaria directa (InBody 270), estratificación de
              riesgo cardiometabólico y adecuación nutricional en entornos de
              alta exigencia operativa y altitud.
            </p>
          </Reveal>
        </div>

        {/* Directors */}
        <div className="mt-16 grid gap-x-12 gap-y-10 lg:grid-cols-2">
          {PROFILES.map(({ name, license, role, points }, i) => (
            <Reveal key={name} delay={i * 120} className="flex flex-col">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-bold text-navy">{name}</h3>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-tech">
                  {license}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-blue-mid">
                {role}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-tech"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Team competencies */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-tech">
            Competencias del equipo
          </h3>
          <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {COMPETENCIES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 2) * 90} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="font-semibold text-navy">{title}</h4>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
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
