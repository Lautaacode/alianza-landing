export interface ContactInfoItem {
    icon: string
    label: string
}

export interface ContactContent {
    header: {
        title: string
        description: string
    }
    info: ContactInfoItem[]
}
