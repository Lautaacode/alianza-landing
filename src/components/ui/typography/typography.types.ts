/* Heading Props and Types */
export type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 

export type HeadingLevel =  'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs'

export type HeadingProps = {
    as?: HeadingAs
    level?: HeadingLevel
    children: React.ReactNode
    className?: string
}

/* Text Props and Types */

export type TextVariant = 'body' | 'muted' | 'small'

export type TextProps = {
    tone?: TextVariant
    children: React.ReactNode
    className?: string
}