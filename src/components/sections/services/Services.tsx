import { Button } from "../../ui/button/Button";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../motion/motion";
import { MotionCard } from "../../ui/card/MotionCard";
import { Reveal } from "../../ui/reveal/Reveal";
import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/sectionHeader/SectionHeader";
import { Heading, Text } from "../../ui/typography";


import { servicesContent } from './services.content'

export const Services = () => {
    const { heading, items } = servicesContent

    return (
        <Section variant="default">
            <Reveal variants={stagger}>
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    className="max-w-3xl mx-auto mb-20 text-center"
                >
                    <SectionHeader
                        title={heading.title}
                        description={heading.description}
                    />
                </motion.div>

                {/* Cards */}
                <div
                    className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory
            md:grid md:grid-cols-2 xl:grid-cols-4
            md:overflow-visible
          "
                >
                    {items.map(service => (
                        <div
                            key={service.title}
                            className="min-w-[85%] snap-center md:min-w-0"
                        >
                            <MotionCard variant="service" animation={fadeUp}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-32 w-full object-cover rounded-lg mb-6"
                                />

                                <Heading as="h3" level="md" className="mb-2">
                                    {service.title}
                                </Heading>

                                <Text tone="muted" className="mb-6">
                                    {service.description}
                                </Text>

                                <Button intent="secondary" className="px-0">
                                    {service.cta} →
                                </Button>
                            </MotionCard>
                        </div>
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}

