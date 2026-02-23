import { motion } from "framer-motion";
import { fadeSide, fadeUp, stagger } from "../../../motion"
import { Reveal } from "../../ui/reveal";
import { WatermarkText } from "../../branding/WatermarkText";
import { LinkButton } from "../../ui/button";
import { Section } from "../../ui/section";
import { Heading, Text } from "../../ui/typography";
import { heroContent } from "../../sections/hero";
import { WhatsAppIcon } from "../../branding/icons/whatsapp/WhatsAppIcon";
import { useEffect, useRef } from "react";
import { useHeroVisibility } from "./hero-visibility.context";
import { AnimatedLogo } from "../../branding/icons/alianza/LogoAlianza";





export const Hero = () => {
    const { title, description, watermark, actions } = heroContent
    const heroRef = useRef<HTMLDivElement>(null)
    const { setHeroVisible } = useHeroVisibility()

    useEffect(() => {
        if (!heroRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setHeroVisible(entry.isIntersecting)
            },
            {
                threshold: 0.3, // cuando ~30% del hero está visible
            }
        )

        observer.observe(heroRef.current)

        return () => observer.disconnect()
    }, [setHeroVisible])
    return (
        <Section id="hero" ref={heroRef} variant="default" className="relative min-h-screen overflow-hidden">
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-linear-to-b from-hero-backdrop-from via-hero-backdrop-via to-hero-backdrop-to" />

            {/* WATERMARK */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-center items-center pb-30 gap-30">
                {watermark.map((text) => (
                    <WatermarkText key={text}>{text}</WatermarkText>
                ))}
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* LOGO */}
                <Reveal variants={fadeSide('left')}>
                    <div className="mx-auto w-56 sm:w-64 lg:w-90 aspect-square">
                        <AnimatedLogo
                            gradients={{
                                right: { start: "#aeaeae", end: "#ffffff" },
                                left: { start: "#00274e", end: "#ffffff" },
                                ring: { start: "#cecece", end: "#003366" },
                            }}
                            strokeDuration={6}
                            fillDuration={4}
                            fillDelay={0.35}
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
                            <LinkButton intent="primary" href={actions.primary.href}>{actions.primary.label}</LinkButton>
                            <LinkButton intent="secondary" href={actions.secondary.href}>{actions.secondary.label}
                                <span className="ml-2">
                                    <WhatsAppIcon className=" h-5 w-5" />
                                </span>
                            </LinkButton>
                        </motion.div>
                    </motion.div>
                </Reveal>
            </div>
        </Section>
    )
}
