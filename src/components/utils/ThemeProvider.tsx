"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Trigger transition effect
        setIsTransitioning(true);

        // Apply theme class to document root for CSS variable switching
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.classList.remove("theme-dark", "theme-light");
        document.documentElement.classList.add(`theme-${theme}`);

        // End transition after animation completes
        const timer = setTimeout(() => setIsTransitioning(false), 600);
        return () => clearTimeout(timer);
    }, [theme]);

    return (
        <>
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        key="theme-transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] pointer-events-none bg-gradient-to-br from-transparent via-background to-transparent"
                    />
                )}
            </AnimatePresence>
            {children}
        </>
    );
}
