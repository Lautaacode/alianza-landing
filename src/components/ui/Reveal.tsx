import { motion, type Variants } from "framer-motion";

type RevealProps = {
    children: React.ReactNode;
    variants: Variants;
    className?: string;
};

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
