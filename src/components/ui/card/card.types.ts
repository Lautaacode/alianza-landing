export type CardVariant = 'service' | 'whyus' | 'technology' | 'process'

export type CardProps = {
    children: React.ReactNode
    variant?: CardVariant
    className?: string
}
