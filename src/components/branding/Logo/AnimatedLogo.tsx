import { motion } from "framer-motion";
import { logoContainer, logoStroke, logoFill, } from "../../../motion/motion";
import { PATH_D } from "./Logo.path";
import type { AnimatedLogoProps } from "./Logo.types";
import React from "react";

export default function AnimatedLogo({
    className,
    strokeColor = "#000000",
    strokeWidth = 2,
    gradientStart = "#000000",
    gradientEnd = "#ffffff",
    motionProps,
}: AnimatedLogoProps) {
    const gradientId = React.useId();
    const clipId = React.useId();

    return (
        <motion.svg
            viewBox="80 95 350 350"
            className={className}
            variants={logoContainer}
            initial="hidden"
            animate="visible"
            {...motionProps}
        >
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="30%" x2="50%" y2="0%">
                    <stop offset="50%" stopColor={gradientStart} />
                    <stop offset="100%" stopColor={gradientEnd} />
                </linearGradient>

                <clipPath id={clipId}>
                    <path d={PATH_D} />
                </clipPath>
            </defs>

            <motion.path
                d={PATH_D}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                vectorEffect="non-scaling-stroke"
                variants={logoStroke}
            />

            <g clipPath={`url(#${clipId})`}>
                <motion.rect
                    x={80}
                    y={95}
                    width={350}
                    height={350}
                    fill={`url(#${gradientId})`}
                    variants={logoFill}
                />
            </g>
        </motion.svg>
    );
}
