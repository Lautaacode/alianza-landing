import type { HeadingProps } from './typography.types'
import { headingVariants } from './typography.variants'



export const Heading = ({
    as = 'h2',
    level = 'lg',
    children,
    className,
}: HeadingProps) => {
    const Component = as

    return (
        <Component
            className={`${headingVariants[level]} ${className ?? ''}`}>
            {children}
        </Component>
    )
}
