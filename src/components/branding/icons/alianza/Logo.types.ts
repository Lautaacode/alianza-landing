// logo.types.ts

import type { ComponentType, ComponentProps } from "react"
import type { SVGMotionProps, Variants } from "framer-motion"
import { motion } from "framer-motion"

export type MotionPathProps = ComponentProps<typeof motion.path>

export interface LogoGradients {
    right: { start: string; end: string }
    left: { start: string; end: string }
    ring: { start: string; end: string }
}

export interface LogoShapeConfig {
    id: string
    d: string
    transform?: string

    gradient?: {
        x1: string
        y1: string
        x2: string
        y2: string
        start: string
        end: string
    }

    stroke?: boolean
    fill?: boolean

    pathProps?: MotionPathProps

    clipReveal?: {
        duration: number
        delay: number
        variants: Variants
    }
}

export interface LogoProps extends SVGMotionProps<SVGSVGElement> {
    className?: string
    stroke?: string
    strokeWidth?: number
    useGradient?: boolean
    showFill?: boolean
    enableClipping?: boolean

    shapes: LogoShapeConfig[]
    gradients?: LogoGradients

    PathComponent?: ComponentType<any>
}

export interface AnimatedLogoProps
    extends Omit<LogoProps, "shapes"> {
    gradients?: LogoGradients

    strokeDuration?: number
    fillDuration?: number
    fillDelay?: number

}