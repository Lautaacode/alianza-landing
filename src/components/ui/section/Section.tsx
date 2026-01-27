import type { SectionProps } from './section.types'
import { sectionBase, sectionVariants } from './section.variants'

export const Section = ({
    children,
    variant = 'default',
    className,
}: SectionProps) => {
    return (
        <section
            className={`
        ${sectionBase}
        ${sectionVariants[variant]}
        ${className ?? ''}
        `}
        >
            <div className="max-w-7xl mx-auto px-6">
                {children}
            </div>
        </section>
    )
}


// export const Section = ({
//     children,
//     variant = 'light',
// }: {
//     children: React.ReactNode
//     variant?: 'light' | 'soft' | 'dark'
// }) => {
//     const styles = {
//         light: 'bg-white',
//         soft: 'bg-slate-50',
//         dark: 'bg-dark text-white',
//     }

//     return (
//         <section className={`${styles[variant]} py-24`}>
//             <div className="max-w-7xl mx-auto px-6">{children}</div>
//         </section>
//     )
// }
