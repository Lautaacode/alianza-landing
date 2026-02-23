import type { HeroContent } from './hero.types'

export const heroContent: HeroContent = {
    title: 'Mantenimiento profesional de ascensores',
    description:
        `Más de 20 años de experiencia brindando un servicio seguro, confiable y
        alineado con la normativa vigente para consorcios, empresas e industrias.`,
    watermark: ['ALIANZA', 'ASCENSORES', 'DE ASCALIAN SAS'],
    actions: {
        primary: {
            label: 'Solicitar presupuesto',
            href: '#contact',
        },
        secondary: {
            label: 'Contactanos ',
            href: 'https://api.whatsapp.com/send/?phone=%2B541172366568&text&type=phone_number&app_absent=0',
        },
    },
}
