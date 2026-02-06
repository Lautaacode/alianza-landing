import { z } from 'zod'

export const contactSchema = z.object({
    firstName: z.string().min(2, 'Nombre muy corto'),
    lastName: z.string().min(2, 'Apellido muy corto'),
    email: z.string().email('Email inválido'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Contanos un poco más'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
