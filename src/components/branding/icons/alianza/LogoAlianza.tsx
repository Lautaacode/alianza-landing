// AnimatedLogo.tsx

import { useMemo } from "react"
import { LogoBase } from "./LogoBase"
import type { AnimatedLogoProps, LogoGradients } from "./Logo.types"
import { createLogoShapes } from "./logo.shapes"
import {
    createStrokeVariants,
    createFillRevealVariants,
    type RevealTiming,
} from "./logo.variants"

const defaultGradients: LogoGradients = {
    right: { start: "#000000", end: "#ffffff" },
    left: { start: "#000000", end: "#ffffff" },
    ring: { start: "#ffffff", end: "#000000" },
}

export function AnimatedLogo({
    gradients,
    strokeDuration = 0,
    fillDuration = 0,
    fillDelay = 0,
    showFill = true,
    enableClipping = true,
    ...rest
}: AnimatedLogoProps) {

    const resolvedGradients = gradients ?? defaultGradients

    const revealTiming: RevealTiming = useMemo(
        () => ({
            duration: fillDuration,
            delay: fillDelay,
        }),
        [fillDuration, fillDelay]
    )

    const strokeVariants = useMemo(
        () => createStrokeVariants(strokeDuration),
        [strokeDuration]
    )

    const fillRevealVariants = useMemo(
        () => createFillRevealVariants(revealTiming),
        [revealTiming]
    )

    const shapes = useMemo(() => {
        return createLogoShapes({
            gradients: resolvedGradients,
            strokeVariants,
            fillRevealVariants,
            revealTiming,
        })
    }, [
        resolvedGradients,
        strokeVariants,
        fillRevealVariants,
        revealTiming,
    ])

    return (
        <LogoBase
            shapes={shapes}
            showFill={showFill}
            enableClipping={enableClipping}
            {...rest}
        />
    )
}