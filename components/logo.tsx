import { cn } from '@/lib/utils'

/**
 * PLACEHOLDER del logo de BE Nutrición Avanzada.
 *
 * Es un marcador de posición claramente identificable, construido para
 * respetar la identidad visual del dossier (azul marino + celeste).
 * Reemplazar por el logo OFICIAL cuando esté disponible: lo ideal es
 * sustituir este componente por un <Image src="/images/logo-oficial.svg" />.
 */
type LogoProps = {
  variant?: 'navy' | 'white'
  className?: string
  priority?: boolean
}

export function Logo({ variant = 'navy', className }: LogoProps) {
  const isWhite = variant === 'white'

  return (
    <span
      className={cn('flex items-center gap-2.5', className)}
      aria-label="BE Nutrición Avanzada"
      data-placeholder-logo="true"
    >
      {/* Monograma */}
      <span
        className={cn(
          'relative flex size-10 items-center justify-center rounded-lg font-heading text-lg font-bold leading-none',
          isWhite ? 'bg-white/10 text-white' : 'bg-navy text-white',
        )}
      >
        BE
        <span
          aria-hidden="true"
          className="absolute bottom-1.5 right-1.5 size-1.5 rounded-full bg-celeste"
        />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-[0.95rem] font-bold uppercase tracking-tight',
            isWhite ? 'text-white' : 'text-navy',
          )}
        >
          BE Nutrición
        </span>
        <span
          className={cn(
            'text-[0.6rem] font-medium uppercase tracking-[0.28em]',
            isWhite ? 'text-celeste' : 'text-tech',
          )}
        >
          Avanzada
        </span>
      </span>
    </span>
  )
}
