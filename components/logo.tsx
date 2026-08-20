import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Logo oficial de BE Nutrición Avanzada.
 * Se conservan EXACTAMENTE los colores originales del archivo (no se recolorea
 * ni se deforma). El archivo es un JPG con fondo blanco, por lo que en
 * superficies oscuras (variant="white") se coloca sobre un "chip" blanco
 * redondeado para que el logo permanezca legible.
 */
type LogoProps = {
  variant?: 'navy' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  priority?: boolean
}

const SIZES: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-10',
  md: 'h-14',
  lg: 'h-16',
  xl: 'h-20',
}

export function Logo({
  variant = 'navy',
  size = 'md',
  className,
  priority = false,
}: LogoProps) {
  const isWhite = variant === 'white'

  return (
    <span
      className={cn(
        'inline-flex items-center',
        isWhite && 'rounded-2xl bg-white p-2.5 shadow-sm',
        className,
      )}
      aria-label="BE Nutrición Avanzada"
    >
      <Image
        src="/images/logo-bena.jpg"
        alt="BE Nutrición Avanzada"
        width={320}
        height={320}
        priority={priority}
        className={cn('w-auto object-contain', SIZES[size])}
      />
    </span>
  )
}
