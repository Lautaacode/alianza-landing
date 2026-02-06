import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormValues } from './contact.schema'
import { sendContact } from './contact.service'

export const useContactForm = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormValues) => {
        try {
            setError(null)
            await sendContact(data)
            setSuccess(true)
            form.reset()
        } catch {
            setError('No se pudo enviar el mensaje. Intentá nuevamente.')
        }
    }

    return {
        form,
        onSubmit,
        success,
        error,
    }
}
