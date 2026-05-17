"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = ["About", "Skills", "Projects", "Experience", "Blogs", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            // Highlight active section
            const sections = navLinks.map((l) => document.getElementById(l.toLowerCase()));
            let current = "";
            sections.forEach((sec) => {
                if (sec && window.scrollY >= sec.offsetTop - 120) {
                    current = sec.id;
                }
            });
            setActive(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-nav-scrolled backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-nav-top backdrop-blur-md border-b border-white/5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo — Full name for SEO & personal branding */}
                        <Link
                            href="/"
                            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                        >
                            <span className="text-base md:text-lg font-black tracking-tight text-foreground leading-none">
                                Aman Kumar
                            </span>
                            <span className="text-base md:text-lg font-black tracking-tight text-neon-blue leading-none ml-1">
                                Happy
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-widest transition-all duration-200 ${active === item.toLowerCase()
                                        ? "text-neon-blue"
                                        : "text-nav-link hover:text-foreground"
                                        }`}
                                    data-cursor="hover"
                                >
                                    {active === item.toLowerCase() && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="absolute inset-0 rounded-lg bg-neon-blue/10 border border-neon-blue/20"
                                        />
                                    )}
                                    <span className="relative z-10">{item}</span>
                                </Link>
                            ))}

                            {/* Theme Toggle */}
                            <div className="ml-2">
                                <ThemeToggle />
                            </div>

                            {/* Resume button */}
                            <a
                                href="/Resume.pdf"
                                download="Aman_Kumar_Happy_CV.pdf"
                                className="ml-3 flex items-center gap-2 bg-neon-blue text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                                data-cursor="hover"
                            >
                                <Download size={14} />
                                RESUME
                            </a>
                        </div>

                        {/* Mobile: theme + hamburger */}
                        <div className="md:hidden flex items-center gap-3">
                            <ThemeToggle />
                            <button
                                className="p-2 rounded-lg text-nav-link hover:text-foreground hover:bg-white/10 transition-colors"
                                onClick={() => setMobileOpen((v) => !v)}
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-mobile-menu border-t border-white/10"
                        >
                            <div className="px-4 py-4 flex flex-col gap-1">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setMobileOpen(false)}
                                        className={`px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-widest transition-colors ${active === item.toLowerCase()
                                            ? "text-neon-blue bg-neon-blue/10"
                                            : "text-nav-link hover:text-foreground hover:bg-white/5"
                                            }`}
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <a
                                    href="/Resume.pdf"
                                    download="Aman_Kumar_Happy_CV.pdf"
                                    onClick={() => setMobileOpen(false)}
                                    className="mt-2 flex items-center justify-center gap-2 bg-neon-blue text-black px-5 py-3 rounded-xl text-sm font-bold hover:bg-white transition-all duration-300"
                                >
                                    <Download size={14} />
                                    DOWNLOAD RESUME
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
