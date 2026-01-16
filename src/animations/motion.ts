import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeSide = (direction: "left" | "right"): Variants => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? -40 : 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
});

export const stagger: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const logoContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const logoStroke: Variants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 2.5,
            ease: "easeInOut",
        },
    },
};

export const logoFill: Variants = {
    hidden: {
        y: 512,
    },
    visible: {
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut",
            delay: 2.5,
        },
    },
};