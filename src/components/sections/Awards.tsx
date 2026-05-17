"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Trophy, Star, Users, Cpu } from "lucide-react";

const awardCategories = [
    {
        id: "national",
        label: "National Wins",
        awards: [
            {
                icon: Trophy,
                color: "#facc15",
                glow: "rgba(250,204,21,0.2)",
                badge: "🏆 National Winner",
                title: "IDE Bootcamp 2026",
                org: "AICTE × Ministry of Education",
                where: "NIT Patna · April 2026",
                detail: "Phase II winner with Team NexaForce. Competed against 40+ teams from engineering colleges across India, pitching SAHAYAK — a WhatsApp health assistant for rural Bihar.",
                highlight: true,
            }
        ]
    },
    {
        id: "college",
        label: "College & Fests",
        awards: [
            {
                icon: Star,
                color: "#a855f7",
                glow: "rgba(168,85,247,0.15)",
                badge: "🏆 Winner",
                title: "Poster Making Competition",
                org: "UMANG'26 Annual Fest",
                where: "GEC Buxar · 2026",
                detail: "Won the poster making competition at UMANG'26, the annual cultural-technical festival of Government Engineering College, Buxar.",
                highlight: false,
            },
            {
                icon: Trophy,
                color: "#f97316",
                glow: "rgba(249,115,22,0.15)",
                badge: "🏆 Winner",
                title: "Thrust Competition",
                org: "Techmiti Techfest",
                where: "GEC Buxar · 2025",
                detail: "Won the Thrust competition at Techmiti Techfest — GEC Buxar's flagship technical festival.",
                highlight: false,
            }
        ]
    },
    {
        id: "programs",
        label: "Programs & Events",
        awards: [
            {
                icon: Cpu,
                color: "#00f3ff",
                glow: "rgba(0,243,255,0.12)",
                badge: "✅ Participant",
                title: "GSSoC 2026",
                org: "GirlScript Summer of Code",
                where: "Remote · 2026",
                detail: "Actively contributing to open source as part of GirlScript Summer of Code 2026.",
                highlight: false,
            },
            {
                icon: Users,
                color: "#10a37f",
                glow: "rgba(16,163,127,0.12)",
                badge: "🎪 Attendee",
                title: "Startup Mahakumbh 2025",
                org: "Government of India Initiative",
                where: "New Delhi · April 2025",
                detail: "Attended as a Business Visitor — interacted with startup founders, observed pitches, and engaged with India's innovation ecosystem.",
                highlight: false,
            }
        ]
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function Awards() {
    const [activeTab, setActiveTab] = useState<string>("national");

    return (
        <section id="awards" className="py-24 bg-section text-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4"
                >
                    05. / Recognition
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="text-4xl md:text-6xl font-black text-foreground mb-4 leading-tight"
                >
                    Awards &{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
                        Recognition
                    </span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    className="text-muted text-lg mb-10 max-w-2xl"
                >
                    Building in public means showing wins and losses. Here are the wins.
                </motion.p>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
                    {awardCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                                activeTab === cat.id
                                    ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30"
                                    : "bg-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {awardCategories.map((cat) => (
                            activeTab === cat.id && (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-6"
                                >
                                    {cat.awards.map((award, i) => (
                                        <div
                                            key={i}
                                            className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 ${award.highlight
                                                ? "border-yellow-400/40 hover:border-yellow-400/60"
                                                : "border-white/10 hover:border-white/20"
                                                }`}
                                            style={{ background: `linear-gradient(135deg, #0d0d0d 60%, ${award.glow})` }}
                                        >
                                            {/* Hover glow */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                                style={{ background: `radial-gradient(circle at 30% 50%, ${award.glow}, transparent 70%)` }}
                                            />

                                            <div className="relative z-10 flex flex-col md:flex-row gap-6 p-7 md:p-8">
                                                {/* Icon */}
                                                <div
                                                    className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border bg-black/30 group-hover:scale-110 transition-transform duration-300"
                                                    style={{
                                                        borderColor: `${award.color}30`,
                                                        boxShadow: `0 0 25px ${award.glow}`,
                                                    }}
                                                >
                                                    <award.icon size={28} color={award.color} />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                                        <span
                                                            className="text-xs font-bold px-3 py-1 rounded-full border"
                                                            style={{ color: award.color, borderColor: `${award.color}40`, background: `${award.color}10` }}
                                                        >
                                                            {award.badge}
                                                        </span>
                                                        <span className="text-xs font-mono text-gray-500">{award.where}</span>
                                                    </div>
                                                    <h3 className={`font-black text-foreground mb-1 ${award.highlight ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                                                        {award.title}
                                                    </h3>
                                                    <p className="text-neon-blue text-sm font-medium mb-3">{award.org}</p>
                                                    <p className="text-muted text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                                        {award.detail}
                                                    </p>

                                                    {/* Certificate placeholder for IDE Bootcamp */}
                                                    {award.highlight && (
                                                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-yellow-400/30 bg-yellow-400/5 text-yellow-400 text-xs font-mono">
                                                            📜 Certificate available on request · amankumarhappy1@gmail.com
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
