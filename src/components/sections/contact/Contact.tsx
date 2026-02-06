import { motion } from "framer-motion";
import { Section } from "../../ui/section";
import { fadeSide, fadeUp, stagger } from "../../../motion/motion";
import { Reveal } from "../../ui/reveal/Reveal";
import { SectionHeader } from "../../ui/sectionHeader/SectionHeader";

import { contactContent } from './contact.content'
import { ContactForm } from "./ContactForm";
import { useContactForm } from "./useContactForm";


export const Contact = () => {
    const { header, info } = contactContent
    const { form, onSubmit, success, error } = useContactForm()

    return (
        <Section variant="dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT */}
                <Reveal variants={stagger} className="space-y-8">
                    <motion.div variants={fadeSide('left')}>
                        <SectionHeader
                            title={header.title}
                            description={header.description}
                            className="text-left mx-0"
                        />
                    </motion.div>

                    <motion.ul
                        variants={fadeUp}
                        className="space-y-4 text-sm text-text-muted"
                    >
                        {info.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </motion.ul>
                </Reveal>

                {/* RIGHT */}
                <Reveal className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                    <ContactForm
                        form={form}
                        onSubmit={form.handleSubmit(onSubmit)}
                        success={success}
                        error={error}
                    />

                </Reveal>

            </div>
        </Section>
    )
}
