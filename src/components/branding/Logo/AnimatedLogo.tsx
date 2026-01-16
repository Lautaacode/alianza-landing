import { motion } from "framer-motion";
import {
    logoContainer,
    logoStroke,
    logoFill,
} from "../../../animations/motion";
import { PATH_D } from "./Logo.path";
import type { AnimatedLogoProps } from "./Logo.types";

export default function AnimatedLogo({
    className,
    strokeColor = "#000000",
    strokeWidth = 2,
    gradientStart = "#ffffff",
    gradientEnd = "#000000",
    duration = 3.7,
    motionProps,
}: AnimatedLogoProps) {

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="80 95 350 350"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            className={className}
            role="img"
            aria-label="Logo Alianza"
            variants={logoContainer}
            initial="hidden"
            animate="visible"
            {...motionProps}
        >
            <defs>
                <linearGradient
                    id="gradFill"
                    x1="0%"
                    y1="100%"
                    x2="50%"
                    y2="0%"
                >
                    <stop offset="50%" stopColor={gradientStart} />
                    <stop offset="100%" stopColor={gradientEnd} />
                </linearGradient>

                <clipPath id="shape-clip">
                    <path d={PATH_D} />
                </clipPath>
            </defs>

            {/* Trazo */}
            <motion.path
                d={PATH_D}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                    ...logoStroke,
                    visible: {
                        ...logoStroke.visible,
                        transition: {
                            ...(logoStroke.visible as any).transition,
                            duration: duration * 0.68,
                        },
                    },
                }}
            />

            {/* Relleno */}
            <g clipPath="url(#shape-clip)">
                <motion.rect
                    x={0}
                    y={0}
                    width={512}
                    height={512}
                    fill="url(#gradFill)"
                    variants={{
                        ...logoFill,
                        visible: {
                            ...logoFill.visible,
                            transition: {
                                ...(logoFill.visible as any).transition,
                                delay: duration * 0.5,
                                duration: duration * 0.32,
                            },
                        },
                    }}
                />
            </g>
        </motion.svg>
    );
}
