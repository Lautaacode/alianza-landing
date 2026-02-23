export type WhyUsItem = {
    title: string
    description: string
    icon: React.ElementType
    highlight?: boolean
}

export type WhyUsContent = {
    heading: {
        title: string
        description: string
    }
    items: WhyUsItem[]
}
