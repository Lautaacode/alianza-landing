// === BASE ===
export const buttonBase = `
inline-flex items-center
justify-center font-medium
rounded-lg transition-colors
transition-shadow duration-300
focus:outline-none focus-visible:ring-2
focus-visible:ring-primary/40
disabled:opacity-50 
hover:scale-[1.02] active:scale-[0.98]
disabled:pointer-events-none
`;


// === VARIANTS (semantic, not visual) ===
export const buttonVariants = {
    primary: `
    bg-primary text-white
    hover:bg-primary-hover
    active:bg-primary-active
    `,


    secondary: `
    border border-primary/30
    text-primary
    hover:bg-primary-soft
    active:bg-primary-soft/70
    `,

    ghost: `
    text-primary
    hover:bg-primary-soft
    `,
} as const;


// === SIZES ===
export const buttonSizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
} as const;