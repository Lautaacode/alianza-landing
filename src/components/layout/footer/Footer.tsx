import { Heading } from "../../ui/typography/Heading"
import { footerContent } from "./footer.content"
import { Text } from "../../ui/typography/Text"

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
                                key={item.label}
                                className="cursor-pointer hover:text-text-inverse transition"
                            >
                                <a href={item.href}>
                                    {item.label}
                                </a>
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

                    <div className="mt-4 space-y-2 text-sm">
                        {contact.map(item => {
                            const Icon = item.icon

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-text-muted hover:text-text-inverse transition"
                                >
                                    <Icon className={`w-5 h-5 ${item.iconClass}`} />
                                    <span>{item.label}</span>
                                </a>
                            )
                        })}
                    </div>


                    {/* Social */}
                    <div className="flex gap-4 mt-4">
                        {socials.map(social => {
                            const Icon = social.icon

                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                    <Icon className={`w-5 h-5 ${social.iconClass}`} />
                                </a>
                            )
                        })}
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
