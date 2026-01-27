import type { HeadingLevel } from "./typography.types"

export const headingVariants: Record<HeadingLevel, string> = {
    xl: 'text-4xl sm:text-5xl font-bold',
    lg: 'text-3xl sm:text-4xl font-bold',
    md: 'text-lg font-semibold',
    sm: 'text-base font-semibold',
    xs: 'text-sm font-medium',
    xxs: 'text-xs font-medium',
}


export const textVariants = {
    body: 'text-base text-text-primary',
    muted: 'text-sm text-text-muted',
    small: 'text-xs text-text-muted',
} as const
