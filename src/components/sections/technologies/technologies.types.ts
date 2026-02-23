export type TechnologyItem = {
    title: string
    description: string
    icon: React.ElementType
}

export type TechnologiesContent = {
    heading: {
        title: string
        description: string
    }
    items: TechnologyItem[]
}
