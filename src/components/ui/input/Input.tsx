import type { InputProps } from './input.types'
import { inputBase, inputVariants } from './input.variants'

export const Input = ({
    label,
    variant = 'dark',
    id,
    className,
    error,
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
                className={`
            ${inputBase}
            ${inputVariants[variant]}
            ${error ? 'border-red-400 focus:ring-red-400/40' : ''}
            ${className ?? ''}
        `}
            />

            {error && (
                <p className="text-sm text-red-400 mt-1">
                    {error}
                </p>
            )}
        </div>
    )
}
