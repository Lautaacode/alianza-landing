
import { Card } from './Card'
import type { CardProps } from './card.types'
import { Reveal } from '../reveal/Reveal'
import type { Variants } from 'framer-motion'


type MotionCardProps = CardProps & {
    animation?: Variants
    hoverLift?: boolean
}

export const MotionCard = ({
    children,
    animation,
    hoverLift = true,
    ...cardProps
}: MotionCardProps) => {
    return (
        <Reveal variants={animation}>
            <div
                className={
                    hoverLift
                        ? 'will-change-transform hover:-translate-y-1 transition-transform'
                        : ''
                }
            >
                <Card {...cardProps}>
                    {children}
                </Card>
            </div>
        </Reveal>
    )
}
