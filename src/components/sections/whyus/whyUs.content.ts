import { BriefcaseIcon, ClipboardDocumentCheckIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import type { WhyUsContent } from './whyUs.types'

export const whyUsContent: WhyUsContent = {
    heading: {
        title: '¿Por qué confiar en Alianza Ascensores?',
        description:
            `Somos una empresa especializada en el mantenimiento profesional de ascensores
        y sistemas de transporte vertical, con más de 20 años de experiencia brindando
        soluciones seguras, confiables y alineadas a la normativa vigente.`,
    },
    items: [
        {
            title: 'Servicio técnico confiable',
            description:
                'Intervenciones precisas y soluciones duraderas que garantizan el correcto funcionamiento del ascensor.',
                icon: WrenchScrewdriverIcon,
            highlight: true,
        },
        {
            title: 'Servicio de guardia permanente',
            description:
                'Disponibilidad de guardia técnica activa las 24 horas, los 7 días de la semana, para la atención de emergencias y fallas operativas.',
                icon: ClockIcon,
        },

        {
            title: 'Transparencia y claridad',
            description:
                'Presupuestos claros, sin costos ocultos, con información detallada de cada intervención.',
                icon: ClipboardDocumentCheckIcon,
        },
        {
            title: 'Experiencia y profesionalismo',
            description:
                'Equipo técnico capacitado, con amplio conocimiento en consorcios, empresas e industrias.',
                icon: BriefcaseIcon,
        },
    ],
}
