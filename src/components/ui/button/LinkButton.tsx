
import type { LinkButtonProps } from './button.types'
import { buttonBase, buttonSizes, buttonVariants } from './button.variant'

export const LinkButton = ({
    href,
    children,
    intent = 'primary',
    size = 'md',
    full,
    className,
    external,
}: LinkButtonProps) => {
    const isExternal = external ?? href.startsWith('http')

    return (
        <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={`
        ${buttonBase}
        ${buttonVariants[intent]}
        ${buttonSizes[size]}
        ${full ? 'w-full' : ''}
        ${className ?? ''}
        `}
        >
            {children}
        </a>
    )
}
