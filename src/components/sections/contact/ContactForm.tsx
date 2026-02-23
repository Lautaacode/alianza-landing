import { motion, AnimatePresence } from "framer-motion"
import type { UseFormReturn } from "react-hook-form"
import type { ContactFormValues } from "./contact.schema"
import { inputBase, inputVariants } from "../../ui/input/input.variants"
import { Input } from "../../ui/input/Input"
import { Button } from "../../ui/button/Button"


interface ContactFormProps {
    form: UseFormReturn<ContactFormValues>
    onSubmit: () => void
    success: boolean
    error: string | null
}

export const ContactForm = ({
    form,
    onSubmit,
    success,
    error,
}: ContactFormProps) => {
    const {
        register,
        formState: { errors, isSubmitting },
    } = form

    return (
        <AnimatePresence mode="wait">
            {success ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-16 space-y-4"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                            delay: 0.2,
                        }}
                        className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center"
                    >
                        ✓
                    </motion.div>

                    <p className="text-lg font-medium text-green-400">
                        ¡Mensaje enviado correctamente!
                    </p>
                    <p className="text-sm text-text-muted">
                        Te vamos a responder a la brevedad.
                    </p>
                </motion.div>
            ) : (
                <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={onSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Nombre"
                            autoComplete="given-name"
                            {...register("firstName")}
                            error={errors.firstName?.message}
                        />

                        <Input
                            label="Apellido"
                            autoComplete="family-name"
                            {...register("lastName")}
                            error={errors.lastName?.message}
                        />
                    </div>

                    <Input
                        label="Email"
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        error={errors.email?.message}
                    />

                    <Input
                        label="Teléfono"
                        type="tel"
                        autoComplete="tel"
                        {...register("phone")}
                    />

                    <div>
                        <label className="block text-sm mb-1 text-text-muted">
                            Mensaje
                        </label>
                        <textarea
                            rows={4}
                            {...register("message")}
                            className={`${inputBase} ${inputVariants.dark} resize-none`}
                        />
                        {errors.message && (
                            <p className="text-sm text-red-400 mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    {error && (
                        <p className="text-sm text-red-400">{error}</p>
                    )}

                    <Button
                        type="submit"
                        intent="primary"
                        size="lg"
                        full
                        disabled={isSubmitting}
                        className="relative"
                    >
                        {isSubmitting ? (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center justify-center gap-2"
                            >
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1,
                                        ease: "linear",
                                    }}
                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                />
                                Enviando...
                            </motion.span>
                        ) : (
                            "Enviar mensaje"
                        )}
                    </Button>
                </motion.form>
            )}
        </AnimatePresence>
    )
}