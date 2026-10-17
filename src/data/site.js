export const site = {
  name: 'PIIUIT Steak House',
  brand: 'PIIUIT',
  brandLine: 'Steak House',
  tagline: 'O sabor da brasa. A essência dos grandes cortes.',
  signature: 'Steak House • Cortes especiais',
  legalName: 'Piuit Steak House Restaurante Ltda',
  cnpj: '38.071.784/0001-11',
  instagram: 'https://www.instagram.com/piiuit_steak/',
  instagramHandle: '@piiuit_steak',
  phoneDisplay: '(75) 98339-8052',
  phoneE164: '5575983398052',
  address: {
    street: 'Rua D, 50',
    neighborhood: 'Parque Ipê',
    city: 'Feira de Santana',
    state: 'BA',
    postalCode: '44054-000',
  },
  mapsUrl:
    'https://www.google.com/maps/place/Piiuit+Steak+Bar/@-12.2156702,-38.9520137,17z',
  hours: {
    label: 'Horários e funcionamento',
    days: 'Terça-feira a domingo',
    time: '17:00 às 00:00',
    note: 'Segunda-feira fechado',
  },
}

export function whatsappLink(message) {
  const base = `https://wa.me/${site.phoneE164}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const reservationMessage =
  'Olá! Vim pelo site da PIIUIT Steak House e gostaria de falar sobre uma reserva.'

export const destinations = {
  menu: { kind: 'view', view: 'menu' },
  maps: { kind: 'external', href: site.mapsUrl },
  reservations: { kind: 'external', href: whatsappLink(reservationMessage) },
  instagram: { kind: 'external', href: site.instagram },
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
