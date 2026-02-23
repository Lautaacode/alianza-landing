// Logo.tsx

import { forwardRef, useId, useMemo } from "react"
import { motion } from "framer-motion"
import type { LogoProps } from "./Logo.types"
import React from "react"

export const LogoBase = React.memo(forwardRef<SVGSVGElement, LogoProps>(
    (
        {
            className,
            stroke = "currentColor",
            strokeWidth = 0.5,
            useGradient = true,
            showFill = false,
            enableClipping = false,
            shapes = [],
            PathComponent = motion.path,
            ...rest
        },
        ref
    ) => {
        const uniqueId = useId()
        const Path = PathComponent

        const normalizedShapes = useMemo(() => {
            return shapes.map((shape) => {
                const gradientId = `${shape.id}-${uniqueId}`
                const clipId = `clip-${shape.id}-${uniqueId}`

                return {
                    ...shape,
                    gradientId,
                    clipId,
                }
            })
        }, [shapes, uniqueId])

        const gradientShapes = normalizedShapes.filter(s => s.gradient)
        const clipShapes = normalizedShapes.filter(s => s.clipReveal)
        const strokeShapes = normalizedShapes.filter(s => s.stroke !== false)
        const fillShapes = normalizedShapes.filter(s => s.fill !== false)

        return (
            <motion.svg
                ref={ref}
                viewBox="0 0 1024 1024"
                className={className}
                initial="hidden"
                animate="visible"
                {...rest}
            >
                <defs>
                    {/* GRADIENTS */}
                    {useGradient &&
                        gradientShapes.map((shape) => {
                            const g = shape.gradient!
                            return (
                                <linearGradient
                                    key={shape.gradientId}
                                    id={shape.gradientId}
                                    gradientUnits="userSpaceOnUse"
                                    x1={g.x1}
                                    y1={g.y1}
                                    x2={g.x2}
                                    y2={g.y2}
                                >
                                    <stop offset="0%" stopColor={g.start} />
                                    <stop offset="40%" stopColor={g.start} />
                                    <stop offset="60%" stopColor={g.end} />
                                    <stop offset="100%" stopColor={g.end} />
                                </linearGradient>
                            )
                        })}

                    {/* CLIPS */}
                    {enableClipping &&
                        clipShapes.map((shape) => (
                            <clipPath key={shape.clipId} id={shape.clipId}>
                                <motion.rect
                                    width="1024"
                                    height="1024"
                                    variants={shape.clipReveal!.variants}
                                    custom={{
                                        duration: shape.clipReveal!.duration,
                                        delay: shape.clipReveal!.delay,
                                    }}
                                />
                            </clipPath>
                        ))}
                </defs>

                {/* STROKE */}
                <g fill="none" stroke={stroke} strokeWidth={strokeWidth}>
                    {strokeShapes.map((shape) => (
                        <Path
                            key={shape.id}
                            d={shape.d}
                            transform={shape.transform}
                            vectorEffect="non-scaling-stroke"
                            {...shape.pathProps}
                        />
                    ))}
                </g>

                {/* FILL */}
                {showFill &&
                    fillShapes.map((shape) => {
                        const content = (
                            <motion.path
                                d={shape.d}
                                transform={shape.transform}
                                fill={
                                    useGradient && shape.gradient
                                        ? `url(#${shape.gradientId})`
                                        : "currentColor"
                                }
                            />
                        )

                        if (enableClipping && shape.clipReveal) {
                            return (
                                <g key={shape.id} clipPath={`url(#${shape.clipId})`}>
                                    {content}
                                </g>
                            )
                        }

                        return <g key={shape.id}>{content}</g>
                    })}
            </motion.svg>
        )
    }
))

LogoBase.displayName = "LogoBase"