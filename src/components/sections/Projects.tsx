"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bot, Box, HeartPulse, ArrowRight, Zap } from "lucide-react";

// ─── Mediokart Ecosystem ────────────────────────────────────────────────────
const mediokartProjects = [
    {
        title: "Mediokart",
        role: "Founder & Lead Dev",
        desc: "A comprehensive healthcare platform bridging the gap between pharmacies and patients. Features include online pharmacy, emergency locator, doctor connect, and lab tests — all powered by Firebase and Supabase.",
        tags: ["Next.js", "Firebase", "Supabase", "Tailwind"],
        icon: HeartPulse,
        color: "#ff0055",
        glow: "rgba(255,0,85,0.25)",
        link: "#",
        status: "building"
    },
    {
        title: "AuraBox",
        role: "Hardware + Software Integration",
        desc: "A smart first-aid box powered by real tech. Integrates IoT sensors for real-time monitoring, smart alerts and guided emergency responses. Bridging the physical and digital health gap.",
        tags: ["IoT", "React", "Cloud", "Hardware"],
        icon: Box,
        color: "#00f3ff",
        glow: "rgba(0,243,255,0.25)",
        link: "#",
        status: "building"
    },
    {
        title: "Mediobot",
        role: "AI Engineer",
        desc: "An AI-based chatbot for immediate health guidance and support. Provides symptom analysis, connects users to the right medical resources, and powers the Mediokart support system.",
        tags: ["Python", "LLMs", "AI/ML", "Chatbot"],
        icon: Bot,
        color: "#0aff0a",
        glow: "rgba(10,255,10,0.2)",
        link: "#",
        status: "building"
    },
];

// ─── Other Projects ─────────────────────────────────────────────────────────
const otherProjects = [
    {
        title: "NexFlow",
        role: "Hackathon Build",
        desc: "AI workflow orchestration tool built at Hackatron 3.0, BIT Sindri. A concept I'm planning to build — not completed yet, but the idea is solid.",
        tags: ["AI", "Automation", "LLMs", "Workflow"],
        icon: Zap,
        color: "#a855f7",
        glow: "rgba(168,85,247,0.25)",
        link: "#",
        status: "planned",
        event: "Built at Hackatron 3.0, BIT Sindri"
    },
];

function StatusBadge({ status }: { status: string }) {
    if (status === "planned") {
        return (
            <span className="text-xs font-mono px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
                🔧 Planning
            </span>
        );
    }
    return (
        <span className="text-xs font-mono px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-400">
            🚀 Building
        </span>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-3">
                        03. / WHAT I'M BUILDING
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">Works</span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-4 max-w-xl">
                        Flagship projects aimed at revolutionizing healthcare in India.
                    </p>
                </motion.div>

                {/* ─── Mediokart Ecosystem ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/50 to-transparent" />
                        <span className="text-neon-blue font-black text-xl tracking-wider px-4 py-2 border border-neon-blue/20 rounded-full bg-neon-blue/5">
                            🏥 Mediokart Ecosystem
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-l from-neon-blue/50 to-transparent" />
                    </div>
                </motion.div>

                {/* Mediokart cards — horizontal layout to show all 3 as one ecosystem */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {mediokartProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            viewport={{ once: true, margin: "-80px" }}
                            className="group relative rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
                            style={{ background: `linear-gradient(135deg, #0d0d0d 60%, ${project.glow})` }}
                        >
                            {/* Glow overlay on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 50% 20%, ${project.glow}, transparent 70%)` }}
                            />

                            <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                                {/* Icon + Status */}
                                <div className="flex items-start justify-between mb-5">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-300"
                                        style={{ boxShadow: `0 0 30px ${project.glow}` }}
                                    >
                                        <project.icon size={30} color={project.color} />
                                    </div>
                                    <StatusBadge status={project.status} />
                                </div>

                                {/* Title + Role */}
                                <h3 className="text-2xl font-black text-white mb-1">{project.title}</h3>
                                <span
                                    className="text-xs font-mono px-3 py-1 rounded-full border inline-block mb-4 w-fit"
                                    style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}
                                >
                                    {project.role}
                                </span>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1 group-hover:text-gray-300 transition-colors">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag, t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 group-hover:border-white/20 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-sm font-bold tracking-wider transition-all duration-300 hover:gap-4"
                                    style={{ color: project.color }}
                                >
                                    View Project <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ─── Other Projects ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-neon-purple/50 to-transparent" />
                        <span className="text-neon-purple font-black text-xl tracking-wider px-4 py-2 border border-neon-purple/20 rounded-full bg-neon-purple/5">
                            ⚡ Other Projects
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-l from-neon-purple/50 to-transparent" />
                    </div>
                </motion.div>

                <div className="space-y-6">
                    {otherProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            className="group relative rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                            style={{ background: `linear-gradient(135deg, #0d0d0d 60%, ${project.glow})` }}
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 20% 50%, ${project.glow}, transparent 70%)` }}
                            />

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 p-8 md:p-10">
                                {/* Icon */}
                                <div
                                    className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-300"
                                    style={{ boxShadow: `0 0 30px ${project.glow}` }}
                                >
                                    <project.icon size={28} color={project.color} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h3 className="text-2xl md:text-3xl font-black text-white">{project.title}</h3>
                                        <span
                                            className="text-xs font-mono px-3 py-1 rounded-full border"
                                            style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}
                                        >
                                            {project.role}
                                        </span>
                                        <StatusBadge status={project.status} />
                                    </div>
                                    {project.event && (
                                        <p className="text-xs font-mono text-gray-500 mb-2">📍 {project.event}</p>
                                    )}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-2xl group-hover:text-gray-300 transition-colors">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 group-hover:border-white/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
