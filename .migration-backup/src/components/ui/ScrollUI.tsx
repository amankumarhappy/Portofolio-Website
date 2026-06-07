"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollUI() {
    const [showTop, setShowTop] = useState(false);
    const rawProgress = useMotionValue(0);
    const progress = useSpring(rawProgress, { stiffness: 400, damping: 40 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? scrollTop / docHeight : 0;
            rawProgress.set(pct);
            setShowTop(scrollTop > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [rawProgress]);

    const scrollToTop = () => {
        // Use Lenis if available, else fallback
        const lenis = (window as any).__lenis;
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.4, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            {/* ── Scroll Progress Bar (top of page) ── */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-[999] h-[3px] origin-left"
                style={{
                    scaleX: progress,
                    background: "linear-gradient(to right, #00f3ff, #bc13fe, #00f3ff)",
                    boxShadow: "0 0 10px #00f3ff, 0 0 20px #bc13fe",
                }}
            />

            {/* ── Scroll to Top Button ── */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        key="scroll-top"
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="fixed bottom-8 right-6 z-[998] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer group"
                        style={{
                            background: "rgba(0, 0, 0, 0.85)",
                            border: "1px solid rgba(0, 243, 255, 0.4)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 0 20px rgba(0,243,255,0.15), 0 4px 24px rgba(0,0,0,0.6)",
                        }}
                        whileHover={{
                            scale: 1.12,
                            boxShadow: "0 0 30px rgba(0,243,255,0.5), 0 4px 24px rgba(0,0,0,0.7)",
                            borderColor: "rgba(0, 243, 255, 0.9)",
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronUp
                            size={20}
                            className="text-neon-blue group-hover:text-white transition-colors duration-200"
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
