"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

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
                        ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                        : "bg-black/70 backdrop-blur-md border-b border-white/5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-2xl font-black font-mono tracking-tighter text-white hover:text-neon-blue transition-colors"
                        >
                            AKH<span className="text-neon-blue">.</span>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-widest transition-all duration-200 ${active === item.toLowerCase()
                                            ? "text-neon-blue"
                                            : "text-gray-300 hover:text-white"
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

                            {/* Resume button */}
                            <a
                                href="/Resume.pdf"
                                download="Aman_Kumar_Happy_CV.pdf"
                                className="ml-4 flex items-center gap-2 bg-neon-blue text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                                data-cursor="hover"
                            >
                                <Download size={14} />
                                RESUME
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-black/95 border-t border-white/10"
                        >
                            <div className="px-4 py-4 flex flex-col gap-1">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setMobileOpen(false)}
                                        className={`px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-widest transition-colors ${active === item.toLowerCase()
                                                ? "text-neon-blue bg-neon-blue/10"
                                                : "text-gray-300 hover:text-white hover:bg-white/5"
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
