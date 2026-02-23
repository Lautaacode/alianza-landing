// logo.variants.ts


import type { Variants } from "framer-motion"

const premiumEase: [number, number, number, number] = [0.65, 0, 0.35, 1]

/* ------------------------------------------------ */
/* TIMING TYPE */
/* ------------------------------------------------ */

export type RevealTiming = {
    duration: number
    delay: number
}

/* ------------------------------------------------ */
/* STROKE */
/* ------------------------------------------------ */

export const createStrokeVariants = (
    duration: number = 2.5
): Variants => ({
    hidden: { pathLength: 0 },
    visible: {
        pathLength: 1,
        transition: {
            duration,
            ease: premiumEase,
        },
    },
})

/* ------------------------------------------------ */
/* VERTICAL FILL REVEAL */
/* ------------------------------------------------ */

export const createFillRevealVariants = (
    timing: RevealTiming = { duration: 1.4, delay: 2.4 }
): Variants => ({
    hidden: {
        y: 1024,
        height: 0,
    },
    visible: {
        y: 0,
        height: 1024,
        transition: {
            duration: timing.duration,
            delay: timing.delay,
            ease: premiumEase,
        },
    },
})

/* ------------------------------------------------ */
/* HORIZONTAL REVEAL (DEPENDIENTE DEL FILL) */
/* ------------------------------------------------ */

export const createHorizontalRevealVariants = (
    timing: RevealTiming
): Variants => ({
    hidden: {
        width: 0,
        x: 0,
    },
    visible: {
        width: 1024,
        x: 0,
        transition: {
            duration: timing.duration,
            delay: timing.delay,
            ease: premiumEase,
        },
    },
})

/* ------------------------------------------------ */
/* FACTORY PARA CREAR AMBOS SIN DUPLICAR TIMING */
/* ------------------------------------------------ */

export const createRevealVariants = (
    timing: RevealTiming = { duration: 1.4, delay: 2.4 }
) => ({
    vertical: createFillRevealVariants(timing),
    horizontal: createHorizontalRevealVariants(timing),
})