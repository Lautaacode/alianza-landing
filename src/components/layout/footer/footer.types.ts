export interface FooterBrand {
    title: string
    description: string[]
}

export interface FooterNavSection {
    title: string
    items: FooterNavItem[]
}

export interface FooterNavItem {
    label: string
    href?: string
}

export interface FooterContactItem {
    icon: React.ElementType
    iconClass?: string
    label: string
    href?: string
}

export interface FooterSocial {
    icon: React.ElementType
    iconClass?: string
    label: string
    href: string
}

export interface FooterContent {
    brand: FooterBrand
    services: FooterNavSection
    contact: FooterContactItem[]
    socials: FooterSocial[]
    copyright: string
}
