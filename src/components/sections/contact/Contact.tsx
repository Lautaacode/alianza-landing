import { motion } from "framer-motion";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { fadeSide, fadeUp, stagger } from "../../../motion/motion";
import { inputBase, inputVariants } from "../../ui/input/input.variants";
import { Reveal } from "../../ui/reveal/Reveal";
import { SectionHeader } from "../../ui/sectionHeader/SectionHeader";
import { Input } from "../../ui/input/Input"
import { contactContent } from './contact.content'

export const Contact = () => {
    const { header, info } = contactContent

    return (
        <Section variant="dark" className="relative">
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
                            <li
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </motion.ul>

                </Reveal>

                {/* RIGHT */}
                <Reveal
                    variants={fadeSide('left')}
                    className="
                        bg-white/5
                        backdrop-blur
                        rounded-2xl
                        p-8
                        border
                        border-white/10
                    "
                >
                    <form className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div variants={fadeUp}>
                                <Input label="Nombre" />
                            </motion.div>
                            <motion.div variants={fadeUp}>
                                <Input label="Apellido" />
                            </motion.div>
                        </div>

                        <motion.div variants={fadeUp}>
                            <Input label="Email" />
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <Input label="Teléfono" />
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <div>
                                <label className="block text-sm mb-1 text-text-muted">
                                    Mensaje
                                </label>
                                <textarea
                                    rows={4}
                                    className={`${inputBase} ${inputVariants.dark} resize-none`}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                        >
                            <Button intent="primary" size="lg" full>
                                Send message
                            </Button>
                        </motion.div>

                    </form>
                </Reveal>

            </div>
        </Section>
    )
}
