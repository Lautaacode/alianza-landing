import type { UseFormReturn } from 'react-hook-form'
import type { ContactFormValues } from './contact.schema'
import { Button } from '../../ui/button'
import { inputBase, inputVariants } from '../../ui/input/input.variants'
import { Input } from '../../ui/input'

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

    if (success) {
        return (
            <div className="text-center py-12">
                <p className="text-lg font-medium text-green-400">
                    ¡Mensaje enviado correctamente!
                </p>
                <p className="text-sm text-text-muted mt-2">
                    Te vamos a responder a la brevedad.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Nombre"
                    autoComplete="given-name"
                    {...register('firstName')}
                    error={errors.firstName?.message}
                />

                <Input
                    label="Apellido"
                    autoComplete="family-name"
                    {...register('lastName')}
                    error={errors.lastName?.message}
                />
            </div>

            <Input
                label="Email"
                type="email"
                autoComplete="email"
                {...register('email')}
                error={errors.email?.message}
            />

            <Input
                label="Teléfono"
                type="tel"
                autoComplete="tel"
                {...register('phone')}
            />

            <div>
                <label htmlFor='message' className="block text-sm mb-1 text-text-muted">
                    Mensaje
                </label>
                <textarea
                    id='message'
                    rows={4}
                    autoComplete="off"
                    {...register('message')}
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
            >
                {isSubmitting ? 'Enviando…' : 'Send message'}
            </Button>
        </form>
    )
}
