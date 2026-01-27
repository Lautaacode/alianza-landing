// card.variants.ts
export const cardBase = `
    bg-white
    transition-all
    duration-300
`

export const cardVariants = {
    service: `
        p-6
        rounded-lg
        shadow-sm
        hover:shadow-xl
    `,
    whyus: `
        p-8
        rounded-md
        text-center
        shadow-sm
    `,
    technology: `
        p-8
        rounded-md
        border
        border-border-light
        shadow-sm
        hover:shadow-lg
        focus-within:ring-2
        focus-within:ring-primary/40
        `,
    process: `
        p-6
        rounded-md
        bg-slate-50
        border
        border-border-light
        transition-all
        hover:shadow-lg
        `
} as const
