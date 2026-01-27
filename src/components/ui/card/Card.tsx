import type { CardProps } from './card.types'
import { cardBase, cardVariants } from './card.variants'

export const Card = ({
    children,
    variant = 'service',
    className,
}: CardProps) => {
    return (
        <div
            className={`
                ${cardBase}
                ${cardVariants[variant]}
                ${className ?? ''}
            `}
        >
            {children}
        </div>
    )
}
