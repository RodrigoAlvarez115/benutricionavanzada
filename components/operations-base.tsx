import { MapPin, Globe2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CONTACT } from '@/lib/site-config'

export function OperationsBase() {
  return (
    <section id="base-operativa" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-3xl bg-navy p-8 shadow-md sm:p-12 lg:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-celeste" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-celeste">
                  Base operativa
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-tech/20 text-celeste">
                  <MapPin className="size-6" aria-hidden="true" />
                </span>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {CONTACT.base}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-tech/20 text-celeste">
                <Globe2 className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-celeste">
                  Cobertura
                </h3>
                <p className="mt-1.5 text-pretty leading-relaxed text-blue-100">
                  {CONTACT.coverage}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
