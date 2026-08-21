import { MapPin, Mail, Phone, Globe, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { CONTACT } from '@/lib/site-config'

export function Contact() {
  return (
    <section id="contacto" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contacto"
          title="Transforme la Salud de su Capital Humano"
          subtitle="Solicite una Jornada Demostrativa Gratuita de InBody 270 para su Equipo Directivo o una Prueba Piloto en sus Instalaciones."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-start">
          {/* Left: info + CTA */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <dl className="flex flex-col gap-6">
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
                      Sitio Web
                    </dt>
                    <dd className="mt-1 text-navy">{CONTACT.website}</dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            {/* Highlighted CTA */}
            <Reveal
              delay={100}
              className="rounded-2xl bg-navy p-7 shadow-md"
            >
              <h3 className="text-xl font-bold text-white">
                Prueba Piloto Diagnóstica
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-blue-100/90">
                Coordinemos una demostración técnica presencial o virtual para
                evaluar sus requerimientos corporativos.
              </p>
              <a
                href="#form-contacto"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-tech px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-celeste hover:text-navy"
              >
                Solicitar prueba piloto
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <div id="form-contacto" className="scroll-mt-24 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
