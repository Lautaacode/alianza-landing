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
        <Section id="contact" variant="dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT */}
                <Reveal
                    variants={stagger}
                    className="space-y-8 order-2 lg:order-1 "
                >
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
                        {info.map((item, index) => {
                            const Icon = item.icon
                            const Content = (
                                <>
                                    <Icon
                                        className={`w-5 h-5 shrink-0 ${item.iconClass}`}
                                    />
                                    <span>{item.label}</span>
                                </>
                            )

                            return (
                                <li key={index} className="flex items-center gap-3">
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 hover:text-white transition"
                                        >
                                            {Content}
                                        </a>
                                    ) : (
                                        Content
                                    )}
                                </li>
                            )
                        })}
                    </motion.ul>


                    {/* MAP */}
                    <motion.div
                        variants={fadeUp}
                        className="w-full h-65 rounded-2xl overflow-hidden border border-white/10"
                    >
                        <iframe title="Ubicación"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.985116766182!2d-58.4055749235308!3d-34.6045378575428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaece9ec6895%3A0x84747b9ca69c6ef5!2sAv.%20Corrientes%202565%2C%20C1046AAD%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1770682451221!5m2!1ses!2sus"
                            className="w-full h-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />
                    </motion.div>
                </Reveal>

                {/* RIGHT */}
                <Reveal
                    className="
                    bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10
                    order-1 lg:order-2
                "
                >
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
