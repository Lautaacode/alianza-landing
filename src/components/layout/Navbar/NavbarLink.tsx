import type { NavLink } from "./navbar.types"



type NavbarLinkProps = {
    link: NavLink
    onClick?: () => void
}

export const NavbarLink = ({ link, onClick }: NavbarLinkProps) => (
    <a
        href={link.href}
        onClick={onClick}
        className="text-gray-800 hover:text-accent transition"
    >
        {link.label}
    </a>
)
