'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROVINCES = ['Salta', 'Jujuy', 'Catamarca', 'Otra', 'Remoto Nacional']

const SERVICES = [
  'Be-Diagnostic',
  'Be-Occupational',
  'Be-Exclusive',
  'Be-Workshops',
  'Be-Entornos',
  'Be-Impact',
  'Prueba Piloto Diagnóstica',
]

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-navy shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-tech focus:ring-2 focus:ring-tech/30'

const labelClass = 'mb-1.5 block text-sm font-medium text-navy'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  )

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Frontend-only: se simula el envío. No se guardan datos ni hay backend.
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 900)
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm"
      >
        <div className="flex size-16 items-center justify-center rounded-full bg-tech/10 text-tech">
          <CheckCircle2 className="size-9" aria-hidden="true" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-navy">
          Solicitud enviada
        </h3>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Gracias por su interés. Nuestro equipo se pondrá en contacto para
          coordinar la demostración técnica o prueba piloto.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Nombre y apellido"
          />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            required
            autoComplete="organization"
            className={fieldClass}
            placeholder="Razón social"
          />
        </div>
        <div>
          <label htmlFor="cargo" className={labelClass}>
            Cargo
          </label>
          <input
            id="cargo"
            name="cargo"
            type="text"
            autoComplete="organization-title"
            className={fieldClass}
            placeholder="Ej. Gerente de RRHH"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email corporativo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="nombre@empresa.com"
          />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="+54 9 ..."
          />
        </div>
        <div>
          <label htmlFor="colaboradores" className={labelClass}>
            Cantidad aproximada de colaboradores
          </label>
          <input
            id="colaboradores"
            name="colaboradores"
            type="text"
            inputMode="numeric"
            className={fieldClass}
            placeholder="Ej. 250"
          />
        </div>
        <div>
          <label htmlFor="provincia" className={labelClass}>
            Provincia
          </label>
          <select
            id="provincia"
            name="provincia"
            defaultValue=""
            className={cn(fieldClass, 'appearance-none')}
          >
            <option value="" disabled>
              Seleccione una opción
            </option>
            {PROVINCES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="servicio" className={labelClass}>
            Tipo de servicio de interés
          </label>
          <select
            id="servicio"
            name="servicio"
            defaultValue=""
            className={cn(fieldClass, 'appearance-none')}
          >
            <option value="" disabled>
              Seleccione una opción
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className={cn(fieldClass, 'resize-y')}
          placeholder="Cuéntenos sobre su operación y requerimientos."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-dark disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Solicitar prueba piloto
          </>
        )}
      </button>
    </form>
  )
}
