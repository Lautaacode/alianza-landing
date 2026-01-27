export interface FooterBrand {
    title: string
    description: string[]
}

export interface FooterNavSection {
    title: string
    items: string[]
}

export interface FooterContactItem {
    icon: string
    label: string
}

export interface FooterSocial {
    label: string
    short: string
}

export interface FooterContent {
    brand: FooterBrand
    services: FooterNavSection
    contact: FooterContactItem[]
    socials: FooterSocial[]
    copyright: string
}
