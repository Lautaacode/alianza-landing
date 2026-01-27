export type ServiceItem = {
    title: string
    description: string
    cta: string
    image: string
}

export type ServicesContent = {
    heading: {
        title: string
        description: string
    }
    items: ServiceItem[]
}
