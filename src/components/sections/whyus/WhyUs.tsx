import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../motion/motion";
import { MotionCard } from "../../ui/card/MotionCard";
import { Reveal } from "../../ui/reveal/Reveal";
import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/sectionHeader/SectionHeader";
import { Heading, Text } from "../../ui/typography";
import { whyUsContent } from '../whyus'

export const WhyUs = () => {
    const { heading, items } = whyUsContent

    return (
        <Section id="whyus" variant="default">
            <Reveal variants={stagger} className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    className="max-w-2xl mx-auto mb-20 text-center"
                >
                    <SectionHeader
                        title={heading.title}
                        description={heading.description}
                    />
                </motion.div>

                {/* Reasons */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map(item => {
                        const Icon = item.icon

                        return (
                            <MotionCard
                                key={item.title}
                                variant="whyus"
                                animation={fadeUp}
                                hoverLift
                                className={
                                    item.highlight
                                        ? 'ring-1 ring-primary/20 shadow-lg'
                                        : ''
                                }
                            >
                                <div
                                    className="
                    w-12 h-12 mx-auto mb-6
                    rounded-full
                    bg-primary/10
                    text-primary
                    flex items-center justify-center
                    font-semibold
                    "
                                >
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>

                                <Heading as="h3" level="md">
                                    {item.title}
                                </Heading>

                                <Text tone="muted" className="mt-3">
                                    {item.description}
                                </Text>
                            </MotionCard>
                        )
                    })}
                </div>
            </Reveal>
        </Section>
    )
}
