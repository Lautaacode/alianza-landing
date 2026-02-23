import type { ReactNode } from "react";
import { Navbar } from "./navbar/Navbar";
import { navbarLinks } from "./navbar/navbar.content";
import { Footer } from "./footer/Footer";

interface Props {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar links={navbarLinks} />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};
