// Reveal.tsx
import { motion } from "framer-motion";
import type { RevealProps } from "./reveal.types";

export const Reveal = ({ children, variants, className }: RevealProps) => (
    <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className={className}
    >
        {children}
    </motion.div>
);
