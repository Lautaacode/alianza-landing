import type { ReactNode } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";

interface Props {
    children: ReactNode;
}

const NAV_LINKS = [
    { label: "Inicio", href: "#home" },
    { label: "Servicios", href: "#services" },
    { label: "Proceso", href: "#process" },
    { label: "Contacto", href: "#contact" },
];

export const MainLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar links={NAV_LINKS} />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};
