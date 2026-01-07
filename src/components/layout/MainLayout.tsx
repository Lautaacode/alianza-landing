import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="p-4 shadow">Header</header>
            <main className="flex-1">{children}</main>
            <footer className="p-4 bg-gray-100">Footer</footer>
        </div>
    );
};
