import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import type { FooterContent } from './footer.types'
import { FacebookAppIcon } from '../../branding/icons/facebook/FacebookAppIcon'
import { InstagramAppIcon } from '../../branding/icons/instragram/InstagramAppIcon'
import { XAppIcon } from '../../branding/icons/x/XAppIcon'

export const footerContent: FooterContent = {
    brand: {
        title: 'Alianza Ascensores',
        description: [
            'Mantenimiento integral de ascensores y sistemas de transporte vertical para consorcios, empresas e industrias.',
            'Atención profesional · Diagnóstico técnico confiable · Cumplimiento normativo · Respuesta rápida',
        ],
    },

    services: {
        title: 'Servicios',
        items: [
            {
                label: 'Mantenimiento preventivo',
                href: '#services'
            },
            {
                label: 'Mantenimiento correctivo',
                href: '#services'
            },
            {
                label: 'Adecuación a normativa',
                href: '#services'
            },
            {
                label: 'Modernización de ascensores',
                href: '#services'
            }
        ],
    },

    contact: [
        {
            icon: MapPinIcon,
            iconClass: 'text-red-500',
            label: 'Buenos Aires, Argentina',
            href: 'https://goo.gl/maps/1ZyV9hLhQyqj8XGg6'
        },
        {
            icon: EnvelopeIcon,
            iconClass: 'text-blue-500',
            label: 'info@ascalian.com.ar',
            href: 'mailto:info@ascalian.com.ar'
        },
        {
            icon: PhoneIcon,
            iconClass: 'text-green-500',
            label: '+54 11 7236 6568',
            href: 'tel:+541172366568'
        },
    ],

    socials: [
        {
            label: 'Facebook',
            icon: FacebookAppIcon,
            iconClass: 'text-blue-600',
            href: 'https://www.facebook.com/alianza.ascensores'
        },
        {
            label: 'Twitter',
            icon: XAppIcon,
            iconClass: 'text-blue-400',
            href: 'https://www.x.com/alianza.ascensores'
        },
        {
            label: 'Instagram',
            icon: InstagramAppIcon,
            iconClass: 'text-pink-500',
            href: 'https://www.instagram.com/alianza.ascensores'
        },
    ],

    copyright:
        `© ${new Date().getFullYear()} Alianza Ascensores. Todos los derechos reservados.`,
}
