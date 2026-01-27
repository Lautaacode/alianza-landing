import type { InputProps } from './input.types'
import { inputBase, inputVariants } from './input.variants'

export const Input = ({
    label,
    variant = 'dark',
    id,
    className,
    ...props
}: InputProps) => {
    const inputId = id ?? props.name

    return (
        <div>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm mb-1 text-text-muted"
                >
                    {label}
                </label>
            )}

            <input
                id={inputId}
                {...props}
                className={`${inputBase} ${inputVariants[variant]} ${className ?? ''}`}
            />
        </div>
    )
}