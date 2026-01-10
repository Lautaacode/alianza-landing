import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavbarLink } from "./NavbarLink";
import type { NavbarProps } from "./Navbar.types";
import Logo from "../../branding/Logo/Logo";

export const Navbar = ({ links }: NavbarProps) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    {/* HEADER */}
                    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex h-16 items-center justify-between">

                                {/* LOGO */}
                                <div className="flex items-center gap-2">
                                    <Logo className="w-8 h-8" />
                                    <span className="text-lg font-semibold text-gray-900">
                                        TuMarca
                                    </span>
                                </div>

                                {/* NAV LINKS — DESKTOP */}
                                <nav className="hidden lg:flex gap-6">
                                    {links.map((link) => (
                                        <NavbarLink key={link.href} link={link} />
                                    ))}
                                </nav>

                                {/* CTA / HAMBURGER */}
                                <div className="flex items-center gap-4">

                                    {/* CTA DESKTOP */}
                                    <button className="hidden lg:inline-flex rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition">
                                        Contactar
                                    </button>

                                    {/* HAMBURGER MOBILE + TABLET */}
                                    <DisclosureButton className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900 transition">
                                        {open ? (
                                            <XMarkIcon className="h-6 w-6" />
                                        ) : (
                                            <Bars3Icon className="h-6 w-6" />
                                        )}
                                    </DisclosureButton>
                                </div>

                            </div>
                        </div>
                    </header>

                    {/* MOBILE / TABLET FULLSCREEN MENU */}
                    <DisclosurePanel className="lg:hidden">
                        <div className="fixed inset-0 top-16 z-40 bg-white overflow-y-auto">

                            <nav className="flex flex-col gap-6 p-8 text-lg">
                                {links.map((link) => (
                                    <NavbarLink key={link.href} link={link} />
                                ))}

                                <button className="mt-8 w-full rounded-md bg-accent py-3 text-white font-semibold text-lg">
                                    Contactar
                                </button>
                            </nav>

                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
};
