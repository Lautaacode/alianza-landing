export interface ContactInfoItem {
    icon: React.ElementType
    iconClass?: string
    label: string
    href?: string
}

export interface ContactContent {
    header: {
        title: string
        description: string
    }
    info: ContactInfoItem[]
}
