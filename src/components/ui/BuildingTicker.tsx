"use client";

import { motion } from "framer-motion";

const updates = [
    "🔨 Currently: Improving SAHAYAK response accuracy",
    "📚 Preparing for GSoC 2027 — LibreHealth",
    "🏥 Building Mediokart for rural India",
    "📖 Learning JavaScript (advancing daily)",
    "⚡ Exploring Open Source contribution workflows",
    "🌾 Running Pahal — free CS teaching every Monday",
    "🏆 National Winner — IDE Bootcamp 2026 · NIT Patna",
    "🚀 SAHAYAK: WhatsApp health assistant for Bharat",
];

// Duplicate for seamless loop
const all = [...updates, ...updates];

export default function BuildingTicker() {
    return (
        <div
            id="building-ticker"
            className="w-full overflow-hidden border-y border-neon-blue/20 bg-neon-blue/5 backdrop-blur-sm py-2.5 relative z-30"
        >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-0 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {all.map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-6 text-xs font-mono text-neon-blue/80 px-8"
                    >
                        {item}
                        <span className="text-neon-blue/30 text-lg">·</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
