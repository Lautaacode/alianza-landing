export interface HeroContent {
    title: string
    description: string
    watermark: string[]
    actions: {
        primary: {
            label: string
            href: string
        }
        secondary: {
            label: string
            href: string
        }
    }
}
