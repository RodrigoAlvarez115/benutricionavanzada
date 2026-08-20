'use client'

import { useState } from 'react'
import { MapPin, Mail, Send, CalendarCheck, ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { CONTACT, PORTAL_URL } from '@/lib/site-config'

export function Contact() {
  const [sent, setSent] = useState(false)

  // Formulario frontend preparado para una futura integración (sin backend).
  // Se abre el cliente de correo del usuario hacia el email oficial.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const org = String(data.get('org') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Consulta web — ${name || 'Contacto'}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmpresa/Organización: ${org}\n\n${message}`,
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contacto"
          title="Hablemos de tu salud o la de tu equipo"
          subtitle="Escribinos para coordinar una consulta o solicitar una propuesta corporativa a medida."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-stretch">
          {/* Form */}
          <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-8 lg:col-span-3">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-navy"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none transition-colors focus-visible:border-tech focus-visible:ring-2 focus-visible:ring-tech/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="org"
                    className="text-sm font-medium text-navy"
                  >
                    Empresa u organización{' '}
                    <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <input
                    id="org"
                    name="org"
                    type="text"
                    autoComplete="organization"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none transition-colors focus-visible:border-tech focus-visible:ring-2 focus-visible:ring-tech/30"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-navy"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="resize-y rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none transition-colors focus-visible:border-tech focus-visible:ring-2 focus-visible:ring-tech/30"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-tech px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy"
                >
                  Escribir mail
                  <Send className="size-4" aria-hidden="true" />
                </button>
                {sent ? (
                  <p role="status" className="text-sm text-muted-foreground">
                    Se abrió tu cliente de correo. Si no ocurrió, escribinos a{' '}
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-medium text-tech underline-offset-4 hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>

          {/* Info + CTA */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <dl className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="break-all text-navy underline-offset-4 hover:text-tech hover:underline"
                      >
                        {CONTACT.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-tech">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-tech">
                      Base operativa
                    </dt>
                    <dd className="mt-1 leading-relaxed text-navy">
                      {CONTACT.base}
                    </dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal
              delay={100}
              className="flex flex-col justify-center rounded-2xl bg-navy p-7 shadow-md"
            >
              <h3 className="text-lg font-bold text-white">
                ¿Sos paciente?
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-blue-100/90">
                Coordiná tu cita directamente desde la plataforma de pacientes.
              </p>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-tech px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-celeste hover:text-navy"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                Coordinar cita
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
