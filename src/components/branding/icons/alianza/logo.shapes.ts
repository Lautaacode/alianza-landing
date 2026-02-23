// logo.shapes.ts

import type { Variants } from "framer-motion"
import { PATH_D_A, PATH_D_RING } from "./logo.path"
import type { LogoGradients, LogoShapeConfig } from "./logo.types"
import {
    createHorizontalRevealVariants,
    type RevealTiming,
} from "./logo.variants"

/**
 * Shape base del logo
 */

export function createLogoShapes({
    gradients,
    strokeVariants,
    fillRevealVariants,
    revealTiming,
}: {
    gradients: LogoGradients
    strokeVariants?: Variants
    fillRevealVariants?: Variants
    revealTiming?: RevealTiming
}): LogoShapeConfig[] {

    const baseClip =
        fillRevealVariants && revealTiming
            ? {
                variants: fillRevealVariants,
                duration: revealTiming.duration,
                delay: revealTiming.delay,
            }
            : undefined

    return [
        {
            id: "right",
            d: PATH_D_A,
            transform: "translate(291 128) scale(0.7)",
            gradient: {
                x1: "52%",
                y1: "48%",
                x2: "85%",
                y2: "28%",
                start: gradients.right.start,
                end: gradients.right.end,
            },
            pathProps: {
                variants: strokeVariants,
            },
            clipReveal: baseClip,
        },
        {
            id: "left",
            d: PATH_D_A,
            transform: "translate(736 128) scale(-0.7 0.7)",
            gradient: {
                x1: "48%",
                y1: "48%",
                x2: "15%",
                y2: "28%",
                start: gradients.left.start,
                end: gradients.left.end,
            },
            pathProps: {
                variants: strokeVariants,
            },
            clipReveal: baseClip,
        },
        {
            id: "ring",
            d: PATH_D_RING,
            transform: "translate(360 390) scale(0.3)",
            gradient: {
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%",
                start: gradients.ring.start,
                end: gradients.ring.end,
            },
            pathProps: {
                variants: strokeVariants,
            },
            clipReveal:
                revealTiming
                    ? {
                        variants: createHorizontalRevealVariants(revealTiming),
                        duration: revealTiming.duration,
                        delay: revealTiming.delay,
                    }
                    : undefined,
        },
    ]
}