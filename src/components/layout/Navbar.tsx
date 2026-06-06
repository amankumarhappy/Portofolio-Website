"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Journey", id: "experience" },
    { label: "Beyond", id: "beyond" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            let current = "";

            navLinks.forEach((link) => {
                const section = document.getElementById(link.id);
                if (section && window.scrollY >= section.offsetTop - 140) {
                    current = section.id;
                }
            });

            setActive(current);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
                scrolled ? "border-card-border bg-nav-scrolled shadow-lg backdrop-blur-xl" : "border-transparent bg-nav-top backdrop-blur-md"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-1 font-black tracking-normal text-foreground" data-cursor="hover">
                    <span>Aman Kumar</span>
                    <span className="text-neon-blue">Happy</span>
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            className={`relative rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                                active === item.id ? "text-neon-blue" : "text-nav-link hover:text-foreground"
                            }`}
                            data-cursor="hover"
                        >
                            {active === item.id && (
                                <motion.span layoutId="nav-indicator" className="absolute inset-0 rounded-lg border border-neon-blue/20 bg-neon-blue/10" />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </Link>
                    ))}

                    <div className="ml-2">
                        <ThemeToggle />
                    </div>

                    <a href="/Resume.pdf" download="Aman_Kumar_Happy_CV.pdf" className="ml-2 btn-mini" data-cursor="hover">
                        <Download size={14} />
                        Resume
                    </a>
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        className="rounded-lg p-2 text-nav-link transition-colors hover:bg-card-hover hover:text-foreground"
                        onClick={() => setMobileOpen((value) => !value)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-t border-card-border bg-mobile-menu md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-4 py-4">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setMobileOpen(false)}
                                    className={`rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-widest ${
                                        active === item.id ? "bg-neon-blue/10 text-neon-blue" : "text-nav-link hover:bg-card-hover hover:text-foreground"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href="/Resume.pdf"
                                download="Aman_Kumar_Happy_CV.pdf"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-neon-blue px-5 py-3 text-sm font-black text-black"
                            >
                                <Download size={14} />
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
