export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = {
    children: React.ReactNode
    intent?: ButtonVariant
    size?: ButtonSize
    full?: boolean
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>
