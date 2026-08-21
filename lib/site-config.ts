// ============================================================
// BE Nutrición Avanzada — configuración del sitio
// ============================================================

// Enlace externo del botón "Acceso".
// Reemplazar por la URL real cuando esté disponible:
//   export const ACCESS_URL = "https://URL-REAL";
export const ACCESS_URL = '#PENDIENTE_URL_ACCESO'

export const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El desafío', href: '#desafio' },
  { label: 'Nuestra solución', href: '#solucion' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const CONTACT = {
  base: 'Salta, Argentina (Presencial en Salta, Jujuy, Catamarca)',
  email: 'benutricion.a@gmail.com',
  phones: ['+54 9 387 5217749', '+54 9 387 5818508'],
  website: 'www.benutricion.com',
} as const

export const COVERAGE = 'Salta (Puna) · Jujuy · Catamarca · Remoto Nacional'
