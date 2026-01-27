export interface HeroContent {
    title: string
    description: string
    watermark: string[]
    actions: {
        primary: {
            label: string
        }
        secondary: {
            label: string
        }
    }
}
