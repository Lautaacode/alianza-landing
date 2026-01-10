interface Props {
    link: {
        href: string;
        label: string;
    };
    mobile?: boolean;
}

export const NavbarLink = ({ link, mobile = false }: Props) => {
    return (
        <a
            href={link.href}
            className={
                mobile
                    ? "block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
                    : "text-gray-700 hover:text-gray-900 font-medium"
            }
        >
            {link.label}
        </a>
    );
};
