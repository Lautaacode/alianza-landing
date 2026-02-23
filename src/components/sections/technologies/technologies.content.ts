import type { TechnologiesContent } from './technologies.types'
import { CheckBadgeIcon, ShieldCheckIcon, WrenchIcon } from '@heroicons/react/24/outline'

export const technologiesContent: TechnologiesContent = {
    heading: {
        title: 'Soluciones técnicas con estándares profesionales',
        description:
            'Aplicamos procedimientos y tecnologías confiables para garantizar seguridad, eficiencia operativa y durabilidad en cada ascensor.',
    },
    items: [
        {
            title: 'Sistemas de control y seguridad',
            description:
                'Verificamos, ajustamos y optimizamos los sistemas de control, maniobra y seguridad para asegurar un funcionamiento estable y conforme a normativa.',
            icon: ShieldCheckIcon,
        
            },
        {
            title: 'Componentes certificados y actualizaciones',
            description:
                'Utilizamos repuestos originales o equivalentes certificados, realizando actualizaciones técnicas que prolongan la vida útil del equipo.',
            icon: CheckBadgeIcon,
        
            },
        {
            title: 'Mantenimiento integral y soporte técnico',
            description:
                'Brindamos mantenimiento preventivo, correctivo y soporte técnico especializado para consorcios, empresas e industrias.',
            icon: WrenchIcon,
        
            },
    ],

}
