import { motion, AnimatePresence } from 'framer-motion'
import { LinkButton } from '../../../ui/button'
import { useHeroVisibility } from '../../../sections/hero/hero-visibility.context'
import { WhatsAppIcon } from './WhatsAppIcon'

export const FloatingWhatsAppButton = () => {
    const { heroVisible } = useHeroVisibility()

    return (
        <AnimatePresence>
            {!heroVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-3"
                >
                    {/* Bubble */}
                    <div
                        className="
                hidden sm:flex
                bg-white text-sm text-gray-800
                px-4 py-2
                rounded-full
                shadow-lg
                border border-gray-200
                whitespace-nowrap
                "
                    >
                        ¿Consulta rápida?
                    </div>

                    {/* Button */}
                    <LinkButton
                        href="https://api.whatsapp.com/send/?phone=%2B541172366568&text&type=phone_number&app_absent=0"
                        intent="whatsapp"
                        size="icon"
                        className="
                        w-14 h-14
                        rounded-full
                        flex items-center justify-center
                        shadow-xl
                        hover:shadow-2xl
                        transition-shadow
                    "
                    >
                        <WhatsAppIcon className="h-6 w-6" />
                    </LinkButton>
                </motion.div>
            )
            }
        </AnimatePresence >
    )
}
