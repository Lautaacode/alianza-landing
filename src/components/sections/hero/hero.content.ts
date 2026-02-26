import type { HeroContent } from './hero.types'

export const heroContent: HeroContent = {
    title: 'Mantenimiento profesional de ascensores',
    description:
        `Contamos con un equipo de trabajo de más de 20 años de trayectoria en el rubro,
        lo que nos permite brindar un servicio ágil,
        confiable y alineado con las exigencias actuales en materia de seguridad, normativa y funcionamiento.`,
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
