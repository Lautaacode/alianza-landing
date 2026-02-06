import { Button } from "../../ui/button"
import { Input } from "../../ui/input"

type ContactViewProps = {
    form: any
    onSubmit: () => void
}

export const ContactView = ({ form, onSubmit }: ContactViewProps) => {
    const { register, formState } = form
    const { errors } = formState

    return (
        <form onSubmit={onSubmit} className="space-y-6">

            <Input
                label="Nombre"
                {...register('firstName')}
                error={errors.firstName?.message}
            />

            <Input
                label="Apellido"
                {...register('lastName')}
                error={errors.lastName?.message}
            />

            <Input
                label="Email"
                {...register('email')}
                error={errors.email?.message}
            />

            <Input
                label="Teléfono"
                {...register('phone')}
            />

            <textarea {...register('message')} />

            <Button intent="primary" size="lg" full>
                Send message
            </Button>

        </form>
    )
}
