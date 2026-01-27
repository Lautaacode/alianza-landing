import type { ServicesContent } from './services.types'

export const servicesContent: ServicesContent = {
    heading: {
        title: 'Servicios diseñados para resolver problemas reales',
        description:
            'Atención técnica profesional para particulares y empresas, con respuestas claras y tiempos reales.',
    },
    items: [
        {
            title: 'Reparación rápida y precisa',
            description:
                'Detectamos fallas de hardware y software para que tu equipo vuelva a funcionar sin pérdidas de tiempo.',
            cta: 'Solicitar diagnóstico',
            image: 'https://dummyimage.com/720x400',
        },
        {
            title: 'Mantenimiento preventivo',
            description:
                'Evitá fallas futuras con limpieza interna, cambio de pasta térmica y optimización.',
            cta: 'Ver mantenimiento',
            image: 'https://dummyimage.com/721x401',
        },
        {
            title: 'Notebooks y PCs',
            description:
                'Reparamos equipos portátiles y de escritorio con repuestos y técnicas profesionales.',
            cta: 'Consultar reparación',
            image: 'https://dummyimage.com/722x402',
        },
        {
            title: 'Soporte técnico a empresas',
            description:
                'Mantenimiento continuo y soporte confiable para entornos corporativos.',
            cta: 'Hablar con un técnico',
            image: 'https://dummyimage.com/723x403',
        },
    ],
}
