// Navbar.tsx

import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { NavbarLink } from "./NavbarLink";
import { AnimatedLogo } from "../../branding/icons/alianza/LogoAlianza";
import type { NavbarProps } from "./navbar.types";





export const Navbar = ({ links }: NavbarProps) => {
    return (
        <Disclosure>
            {({ open, close }) => {
                useEffect(() => {
                    document.body.style.overflow = open ? 'hidden' : ''
                }, [open])

                return (
                    <>
                        {/* HEADER */}
                        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border-light">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="flex h-16 items-center justify-between">

                                    {/* LOGO */}
                                    <a className="flex items-center gap-2" href="#hero">
                                        <AnimatedLogo
                                        className="w-8 h-8"
                                            gradients={{
                                                right: { start: "#aeaeae", end: "#ffffff" },
                                                left: { start: "#00274e", end: "#ffffff" },
                                                ring: { start: "#cecece", end: "#003366" },
                                            }}
                                        />



                                        <span className="text-lg font-semibold text-gray-900">
                                            Alianza Ascensores
                                        </span>
                                    </a>

                                    {/* DESKTOP */}
                                    <nav className="hidden lg:flex gap-6">
                                        {links.map(link => (
                                            <NavbarLink key={link.href} link={link} />
                                        ))}
                                    </nav>

                                    {/* CTA / HAMBURGER */}
                                    <div className="flex items-center gap-4">
                                        <DisclosureButton className="lg:hidden p-2">
                                            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                                        </DisclosureButton>
                                    </div>

                                </div>
                            </div>
                        </header>

                        {/* MOBILE */}
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ y: '-100%' }}
                                    animate={{ y: 0 }}
                                    exit={{ y: '-100%' }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className="fixed inset-0 top-16 z-40 bg-white lg:hidden"
                                >
                                    <nav className="flex flex-col gap-6 p-8 text-lg">
                                        {links.map(link => (
                                            <NavbarLink
                                                key={link.href}
                                                link={link}
                                                onClick={close}
                                            />
                                        ))}
                                    </nav>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )
            }}
        </Disclosure>
    )
}
