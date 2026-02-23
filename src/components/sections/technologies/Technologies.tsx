import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../motion/motion";
import { MotionCard } from "../../ui/card/MotionCard";
import { Reveal } from "../../ui/reveal/Reveal";
import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/sectionHeader/SectionHeader";
import { Heading, Text } from "../../ui/typography";
import { technologiesContent } from "../technologies";

export const Technologies = () => {
    const { heading, items } = technologiesContent

    return (
        <Section id="technologies" variant="default">
            <Reveal variants={stagger} className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    className="max-w-3xl mx-auto text-center"
                >
                    <SectionHeader
                        title={heading.title}
                        description={heading.description}
                    />
                </motion.div>

                {/* Cards */}
                <div className="mt-16 grid md:grid-cols-3 gap-10">
                    {items.map(tech => {
                        const Icon = tech.icon

                        return (
                            <MotionCard
                                key={tech.title}
                                variant="technology"
                                animation={fadeUp}
                                hoverLift
                            >
                                <div
                                    className="
                                flex items-center justify-center
                                w-10 h-10 mb-6
                                rounded-md bg-primary/10
                                "
                                >
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>

                                <Heading as="h3" level="md">
                                    {tech.title}
                                </Heading>

                                <Text tone="muted" className="mt-4">
                                    {tech.description}
                                </Text>
                            </MotionCard>
                        )
                    })}
                </div>
            </Reveal>
        </Section>
    )
}
