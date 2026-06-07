import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="relative w-14 h-7 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center px-1 overflow-hidden hover:border-neon-blue/50 transition-colors duration-300"
            whileTap={{ scale: 0.9 }}
        >
            {/* Track fill */}
            <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                    background: theme === "dark"
                        ? "linear-gradient(135deg, #0d0d2e 0%, #1a0a2e 100%)"
                        : "linear-gradient(135deg, #ffe066 0%, #ffb830 100%)",
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Thumb */}
            <motion.div
                className="relative z-10 w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                    x: theme === "dark" ? 0 : 28,
                    background: theme === "dark" ? "#bc13fe" : "#fff",
                    boxShadow: theme === "dark"
                        ? "0 0 8px #bc13fe, 0 0 16px rgba(188,19,254,0.4)"
                        : "0 0 8px #ffb830, 0 0 16px rgba(255,184,48,0.4)",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                <AnimatePresence mode="wait">
                    {theme === "dark" ? (
                        <motion.span
                            key="moon"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Moon size={11} className="text-white" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="sun"
                            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Sun size={11} className="text-yellow-800" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.button>
    );
}
