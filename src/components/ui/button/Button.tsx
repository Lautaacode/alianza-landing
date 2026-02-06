import type { ButtonProps } from "./button.types"
import { buttonBase, buttonSizes, buttonVariants } from "./button.variant"


export const Button = ({
  children,
  intent = 'primary',
  size = 'md',
  full,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        ${buttonBase}
        ${buttonVariants[intent]}
        ${buttonSizes[size]}
        ${full ? 'w-full' : ''}
        ${className ?? ''}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
