import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Marca de agua sutil con el isotipo de BE Nutrición Avanzada.
 * Presencia de marca elegante y de baja opacidad; nunca interfiere con la
 * lectura. Se usa de forma puntual en secciones estratégicas, no en todas.
 *
 * En superficies claras se aplica `mix-blend-multiply` para que el fondo
 * blanco del JPG desaparezca visualmente y solo se perciba el isotipo.
 */
type WatermarkProps = {
  className?: string
  /** Tono del fondo donde se coloca la marca de agua. */
  tone?: 'light' | 'dark'
  size?: number
}

export function Watermark({
  className,
  tone = 'light',
  size = 420,
}: WatermarkProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute select-none',
        tone === 'light'
          ? 'opacity-[0.05] mix-blend-multiply'
          : 'opacity-[0.06]',
        className,
      )}
    >
      <Image
        src="/images/logo-bena.jpg"
        alt=""
        width={size}
        height={size}
        className="h-auto w-full object-contain"
      />
    </div>
  )
}
