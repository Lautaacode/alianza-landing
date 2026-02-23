// contact.content.ts

import { ClockIcon, ExclamationTriangleIcon, MapPinIcon } from '@heroicons/react/24/outline'
import type { ContactContent } from './contact.types'

export const contactContent: ContactContent = {
    header: {
        title: 'Contanos qué inconveniente presenta tu ascensor o instalación.',
        description:
            `Nuestro equipo técnico te responderá con un diagnóstico claro, profesional y sin compromiso,
            orientado a garantizar la seguridad y el correcto funcionamiento del equipo.`,
    },
    info: [
        {
            icon: MapPinIcon,
            iconClass: 'text-red-500',
            label: 'Buenos Aires, Argentina',
            href: 'https://maps.app.goo.gl/jJwbYJKR3Hz7xff88',
        },
        {
            icon: ExclamationTriangleIcon,
            iconClass: 'text-yellow-500',
            label: 'Emergencias 24 hs · 11 7236 6568',
            href: 'tel:+541172366568',
        },
        {
            icon: ClockIcon,
            iconClass: 'text-blue-500',
            label: 'Atención general · Lunes a Viernes de 8 a 17 hs',
        },

    ],
}

