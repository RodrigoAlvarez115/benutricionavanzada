import { MapPin, Mail, Phone, Globe, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { CONTACT, NUTREANDO_URL } from '@/lib/site-config'

export function Contact() {
  const primaryPhone = CONTACT.phones[0]?.replace(/[^0-9]/g, '') ?? ''

  return (
    <section id="contacto" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contacto"
          title="Transforme la Salud de su Capital Humano"
          subtitle="Solicite una Jornada Demostrativa Gratuita de InBody 270 para su Equipo Directivo o una Prueba Piloto en sus Instalaciones."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-stretch">
          {/* Info */}
          <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-sm lg:col-span-3">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                    Base Operativa Regional
                  </dt>
                  <dd className="mt-1 leading-relaxed text-navy">
                    {CONTACT.base}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                    Email Corporativo
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-navy underline-offset-4 hover:text-tech hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                    WhatsApp / Teléfono B2B
                  </dt>
                  <dd className="mt-1 flex flex-col gap-0.5">
                    {CONTACT.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy underline-offset-4 hover:text-tech hover:underline"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                  <Globe className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                    Plataforma Nutreando
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={NUTREANDO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-navy underline-offset-4 hover:text-tech hover:underline"
                    >
                      Acceder a la plataforma
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>

          {/* Highlighted CTA */}
          <Reveal
            delay={100}
            className="flex flex-col justify-center rounded-2xl bg-navy p-7 shadow-md lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-white">
              Prueba Piloto Diagnóstica
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-blue-100/90">
              Coordinemos una demostración técnica presencial o virtual para
              evaluar sus requerimientos corporativos.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`https://wa.me/${primaryPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-tech px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-celeste hover:text-navy"
              >
                Coordinar por WhatsApp
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-celeste hover:text-celeste"
              >
                Escribir un email
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
