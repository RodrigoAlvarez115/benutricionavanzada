// ============================================================
// BE Nutrición Avanzada — configuración del sitio
// ============================================================

// Portal externo de pacientes (Acceso pacientes / Solicitar turno / Coordinar cita).
// La marca visible sigue siendo exclusivamente BE Nutrición Avanzada / BENA.
export const PORTAL_URL = 'https://nutreando.com/be-nutricion'

// Aliases retrocompatibles (mismo destino).
export const ACCESS_URL = PORTAL_URL
export const NUTREANDO_URL = PORTAL_URL

export const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El desafío operacional', href: '#desafio' },
  { label: 'Soluciones corporativas', href: '#soluciones-corporativas' },
  { label: 'Nuestra solución', href: '#nuestra-solucion' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const CONTACT = {
  base: 'Salta, Argentina.',
  coverage:
    'Cobertura regional (Salta, Jujuy, Catamarca, San Juan y resto del país)',
  email: 'benutricion.a@gmail.com',
} as const
