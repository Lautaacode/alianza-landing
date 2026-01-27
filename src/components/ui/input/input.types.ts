import type { InputHTMLAttributes } from 'react'
import type { inputVariants } from './input.variants'

export type InputVariant = keyof typeof inputVariants

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    variant?: InputVariant
}
