export const inputBase = `
    w-full
    px-4 py-3
    rounded-lg
    transition
    focus:outline-none
    `

export const inputVariants = {
    dark: `
        bg-white/5
        border
        border-white/10
        text-white
        placeholder:text-gray-400
        focus:ring-2
        focus:ring-primary/40
    `,
} as const
