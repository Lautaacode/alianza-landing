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




// type ButtonVariant = 'primary' | 'secondary'

// export const Button = ({
//   children,
//   variant = 'primary',
// }: {
//   children: React.ReactNode
//   variant?: ButtonVariant
// }) => {
//   const base =
//     `rounded-lg px-6 py-3 font-medium transition focus:outline-none`

//   const variants = {
//     primary:
//       `
//         bg-primary
//         text-white
//         hover:bg-primary-hover
//         rounded-lg
//         cursor-pointer
//         px-6
//         py-3
//         font-medium
//         transition
//         focus:outline-none
//         px-8
//         py-3
//         rounded-lg
//         bg-indigo-600
//         text-white
//         text-lg
//         font-medium
//         shadow-lg
//         hover:bg-indigo-700
//         transition
//         `,
//     secondary:
//       'border border-primary/30 text-primary hover:bg-primary-soft',
//   }

//   return <button className={`${base} ${variants[variant]}`}>{children}</button>
// }
