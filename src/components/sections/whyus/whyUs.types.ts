export type WhyUsItem = {
    title: string
    description: string
    highlight?: boolean
}

export type WhyUsContent = {
    heading: {
        title: string
        description: string
    }
    items: WhyUsItem[]
}
