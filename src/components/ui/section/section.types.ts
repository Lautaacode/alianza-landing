export type SectionVariant = 'default' | 'light' | 'soft' | 'dark'

export type SectionProps = {
    children: React.ReactNode
    variant: SectionVariant
    className?: string
    id?: string
}
