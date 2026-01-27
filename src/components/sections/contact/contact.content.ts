// contact.content.ts

import type { ContactContent } from './contact.types'

export const contactContent: ContactContent = {
    header: {
        title: 'Get in touch',
        description:
            'Contanos qué problema tiene tu equipo. Te respondemos con un diagnóstico claro, honesto y sin compromiso.',
    },
    info: [
        {
            icon: '📍',
            label: 'Buenos Aires, Argentina',
        },
        {
            icon: '📞',
            label: '+54 11 2345-6789',
        },
        {
            icon: '✉️',
            label: 'soporte@tuservicio.com',
        },
    ],
}
