// Section.tsx

import type { SectionProps } from './section.types'
import { sectionBase, sectionVariants } from './section.variants'

import { forwardRef } from 'react'

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ children, variant = 'default', className, id }, ref) => {
        return (
            <section
                ref={ref}
                id={id}
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
)

Section.displayName = 'Section'



