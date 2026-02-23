import type { ServicesContent } from './services.types'
import {cardCorrective, cardModernization, cardNormative, cardPreventive, } from '../../branding/assets/webp'

export const servicesContent: ServicesContent = {
    heading: {
        title: 'Servicios profesionales de mantenimiento y modernización de ascensores',
        description:
            `Brindamos soluciones integrales en mantenimiento preventivo, correctivo, adecuación normativa
            y modernización de ascensores, garantizando seguridad, eficiencia y cumplimiento regulatorio para consorcios,
            empresas e industrias en CABA y Gran Buenos Aires.`,
    },
    items: [
        {
            title: 'Mantenimiento preventivo',
            description:
                `Realizamos revisiones técnicas periódicas para garantizar el correcto funcionamiento de los ascensores.
                Detectamos y corregimos fallas incipientes de forma anticipada, minimizando riesgos,
                interrupciones del servicio y costos imprevistos.`,
            image: cardPreventive,
        },
        {
            title: 'Mantenimiento correctivo',
            description:
                `Brindamos intervenciones técnicas rápidas y eficientes ante fallas o paradas del equipo.
                Nuestro servicio incluye diagnóstico preciso y reparación utilizando repuestos originales
                o equivalentes certificados, asegurando confiabilidad y durabilidad.`,
            image: cardCorrective,
        },
        {
            title: 'Adecuación a normativa',
            description:
            `Ofrecemos asesoramiento técnico especializado y ejecución de las mejoras necesarias para cumplir
            con las reglamentaciones vigentes. Incorporamos sistemas de seguridad,
            señalización reglamentaria y soluciones de accesibilidad, garantizando instalaciones conformes y seguras.`,
            image: cardNormative,
        },
        {
            title: 'Modernización de ascensores',
            description:
                `Actualizamos equipos antiguos para adaptarlos a las nuevas normas técnicas y estéticas,
                mejorando la seguridad, eficiencia energética y confort de uso. Optimizamos el rendimiento del ascensor
                y prolongamos su vida útil, revalorizando el edificio.`,
            image: cardModernization,
        },
    ],
}
