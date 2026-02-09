// === BASE ===
export const buttonBase = `
inline-flex items-center
justify-center font-medium
transition-colors
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
    rounded-lg
    bg-primary text-white
    hover:bg-primary-hover
    active:bg-primary-active
    `,


    secondary: `
    rounded-lg
    border border-primary/30
    text-primary
    hover:bg-primary-soft
    active:bg-primary-soft/70
    `,

    ghost: `
    rounded-lg
    text-primary
    hover:bg-primary-soft
    `,

    whatsapp: `
    rounded-full
    bg-[#25D366] text-white
    hover:bg-[#1ebe5d]
    active:bg-[#169c4b]
    focus-visible:ring-[#25D366]/40
    shadow-lg
    `,

} as const ;


// === SIZES ===
export const buttonSizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    icon: 'p-0',
} as const;