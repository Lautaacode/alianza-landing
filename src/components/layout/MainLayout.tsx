import type { ReactNode } from "react";
import { Navbar, navbarLinks } from "./navbar";
import { Footer } from "./footer";

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
