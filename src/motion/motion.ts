// motion.ts

import type { Transition, Variants } from "framer-motion";

const baseTransition: Transition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
};


export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition,
    },
};

export const fadeSide = (
    direction: "left" | "right"
): Variants => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? -40 : 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: baseTransition,
    },
});


export const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};