import { motion } from "framer-motion";
import { fadeSide, fadeUp, stagger } from "../../../motion"
import AnimatedLogo from "../../branding/logo/AnimatedLogo";
import { Reveal } from "../../ui/reveal";
import { WatermarkText } from "../../branding/WatermarkText";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { Heading, Text } from "../../ui/typography";
import { heroContent } from "../../sections/hero";



export const Hero = () => {
    const { title, description, watermark, actions } = heroContent

    return (
        <Section variant="default" className="relative min-h-screen overflow-hidden">
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-linear-to-b from-hero-backdrop-from via-hero-backdrop-via to-hero-backdrop-to" />

            {/* WATERMARK */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-center items-center gap-20">
                {watermark.map((text) => (
                    <WatermarkText key={text}>{text}</WatermarkText>
                ))}
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* LOGO */}
                <Reveal variants={fadeSide('left')}>
                    <div className="mx-auto w-56 sm:w-64 lg:w-80 aspect-square">
                        <AnimatedLogo
                            duration={6}
                            strokeColor="var(--color-text-primary)"
                            gradientStart="var(--color-primary)"
                            gradientEnd="var(--color-text-inverse)"
                        />
                    </div>
                </Reveal>

                {/* COPY */}
                <Reveal variants={fadeSide('right')}>
                    <motion.div variants={stagger} className="max-w-xl text-center md:text-left">
                        <motion.div variants={fadeUp}>
                            <Heading as="h1" level="xl">
                                {title}
                            </Heading>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <Text tone="body" className="mt-4 text-lg">
                                {description}
                            </Text>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-8 flex gap-4 flex-col sm:flex-row">
                            <Button intent="primary">{actions.primary.label}</Button>
                            <Button intent="secondary">{actions.secondary.label}</Button>
                        </motion.div>
                    </motion.div>
                </Reveal>
            </div>
        </Section>
    )
}
