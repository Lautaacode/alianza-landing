export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

export type ButtonProps = {
    children: React.ReactNode
    intent?: ButtonVariant
    size?: ButtonSize
    full?: boolean
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type LinkButtonProps = {
    href: string
    children: React.ReactNode
    intent?: ButtonVariant
    size?: ButtonSize
    full?: boolean
    className?: string
    external?: boolean
}