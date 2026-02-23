import emailjs from '@emailjs/browser';
import type { ContactFormValues } from './contact.schema'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const sendContact = async (data: ContactFormValues) => {
    return emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            message: data.message,
        },
        PUBLIC_KEY
    )
}
