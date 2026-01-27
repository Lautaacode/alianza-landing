import { Heading, Text } from "../../ui/typography"
import { footerContent } from "./footer.content"

export const Footer = () => {
    const { brand, services, contact, socials, copyright } = footerContent

    return (
        <footer className="bg-slate-900 text-text-muted">
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <Heading as="h3" level="md" className="text-text-inverse">
                        {brand.title}
                    </Heading>

                    {brand.description.map(line => (
                        <Text
                            key={line}
                            tone="muted"
                            className="mt-3 text-sm"
                        >
                            {line}
                        </Text>
                    ))}
                </div>

                {/* Services */}
                <nav aria-label={services.title}>
                    <Heading
                        as="h4"
                        level="md"
                        className="text-text-inverse uppercase tracking-wide text-sm"
                    >
                        {services.title}
                    </Heading>

                    <ul className="mt-4 space-y-2 text-sm">
                        {services.items.map(item => (
                            <li
                                key={item}
                                className="cursor-pointer hover:text-text-inverse transition"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact */}
                <div>
                    <Heading
                        as="h4"
                        level="md"
                        className="text-text-inverse uppercase tracking-wide text-sm"
                    >
                        Contacto
                    </Heading>

                    <div className="mt-4 space-y-1 text-sm">
                        {contact.map(item => (
                            <Text key={item.label} tone="muted">
                                {item.icon} {item.label}
                            </Text>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex gap-4 mt-4">
                        {socials.map(social => (
                            <button
                                key={social.label}
                                aria-label={social.label}
                                className="
                                    w-10 h-10
                                    rounded-full
                                    border border-border-soft
                                    flex items-center justify-center
                                    text-text-muted
                                    hover:bg-primary hover:text-text-inverse
                                    transition
                                "
                            >
                                {social.short}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Legal */}
            <div className="border-t border-border-soft text-center py-6 text-xs text-text-muted">
                {copyright}
            </div>
        </footer>
    )
}
