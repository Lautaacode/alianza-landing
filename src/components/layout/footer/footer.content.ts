import type { FooterContent } from './footer.types'

export const footerContent: FooterContent = {
    brand: {
        title: 'Servicio Técnico Hardware',
        description: [
            'Reparación y mantenimiento de PCs, notebooks y equipos empresariales.',
            'Atención rápida · Diagnóstico claro · Garantía escrita',
        ],
    },

    services: {
        title: 'Servicios',
        items: [
            'Diagnóstico y reparación',
            'Mantenimiento preventivo',
            'Soporte a empresas',
            'Armado de equipos',
        ],
    },

    contact: [
        { icon: '📍', label: 'Atención en taller y a domicilio' },
        { icon: '📧', label: 'soporte@serviciotecnico.com' },
        { icon: '📞', label: '+54 11 1234 5678' },
    ],

    socials: [
        { label: 'Facebook', short: 'F' },
        { label: 'Twitter', short: 'T' },
        { label: 'Instagram', short: 'I' },
        { label: 'LinkedIn', short: 'L' },
    ],

    copyright:
        `© ${new Date().getFullYear()} Servicio Técnico Hardware. Todos los derechos reservados.`,
}
