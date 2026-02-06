import emailjs from 'emailjs-com'
import type { ContactFormValues } from './contact.schema'

const SERVICE_ID = 'service_bjmgm2f'
const TEMPLATE_ID = 'template_635bozt'
const PUBLIC_KEY = 'D_V8uqEP4YEElomkM'

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
