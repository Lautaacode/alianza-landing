import type { TextProps } from './typography.types'
import { textVariants } from './typography.variants'

export const Text = ({
    tone = 'body',
    children,
    className,
}: TextProps) => {
    return (
        <p className={`${textVariants[tone]} ${className ?? ''}`}>
            {children}
        </p>
    )
}
