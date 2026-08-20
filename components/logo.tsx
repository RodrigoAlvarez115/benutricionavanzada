import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Logo oficial de BE Nutrición Avanzada.
 * El archivo es un JPG con fondo blanco, por lo que en superficies oscuras
 * (variant="white") se coloca sobre un "chip" blanco redondeado para que el
 * fondo del logo se integre de forma intencional y el logo permanezca legible.
 */
type LogoProps = {
  variant?: 'navy' | 'white'
  className?: string
  priority?: boolean
}

export function Logo({ variant = 'navy', className, priority = false }: LogoProps) {
  const isWhite = variant === 'white'

  return (
    <span
      className={cn(
        'inline-flex items-center',
        isWhite && 'rounded-xl bg-white p-2 shadow-sm',
        className,
      )}
      aria-label="BE Nutrición Avanzada"
    >
      <Image
        src="/images/logo-bena.jpg"
        alt="BE Nutrición Avanzada"
        width={200}
        height={200}
        priority={priority}
        className={cn('h-11 w-auto object-contain', isWhite && 'h-12')}
      />
    </span>
  )
}
