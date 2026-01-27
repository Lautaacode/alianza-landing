import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../motion/motion";
import { MotionCard } from "../../ui/card/MotionCard";
import { Reveal } from "../../ui/reveal/Reveal";
import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/sectionHeader/SectionHeader";
import { Heading, Text } from "../../ui/typography";


import { processContent } from './process.content'

export const Process = () => {
    const { title, steps } = processContent

    return (
        <Section variant="light">
            <Reveal variants={stagger} className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div variants={fadeUp} className="mb-16 text-center">
                    <SectionHeader title={title} />
                </motion.div>

                {/* Steps */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <MotionCard
                            key={step.title}
                            variant="process"
                            animation={fadeUp}
                            hoverLift={false}
                        >
                            <div className="flex gap-6 items-start">
                                {/* Número */}
                                <div
                                    className="
                    shrink-0
                    w-10 h-10
                    rounded-full
                    bg-primary/10
                    text-primary
                    flex items-center justify-center
                    font-semibold
                    "
                                >
                                    {index + 1}
                                </div>

                                {/* Contenido */}
                                <div>
                                    <Heading as="h3" level="md">
                                        {step.title}
                                    </Heading>

                                    <Text className="mt-2 leading-relaxed">
                                        {step.description}
                                    </Text>
                                </div>
                            </div>
                        </MotionCard>
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}
