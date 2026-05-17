"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bot, Box, HeartPulse, Zap, Shield, MessageCircle, Trophy, Map } from "lucide-react";

// ─── SAHAYAK — Hero Project ─────────────────────────────────────────────────
const sahayak = {
    title: "SAHAYAK",
    tagline: "WhatsApp Health Assistant for Rural India",
    desc: "WhatsApp-based digital health assistant for rural and elderly India. MBBS-reviewed first-aid guidance in Hindi & Bhojpuri. Zero app download. Zero account creation. Just WhatsApp — the one app every Indian already knows. Built to serve the 70%+ people in rural Bihar who lack easy access to basic health guidance.",
    problem: "In rural Bihar, 70%+ people lack easy access to basic health guidance. Hospitals are far, doctors are expensive, and internet apps require literacy barriers most don't have.",
    howItWorks: [
        "User sends a WhatsApp message describing their symptom",
        "SAHAYAK processes via Python + WhatsApp Business API",
        "MBBS-reviewed guidance sent back in Hindi or Bhojpuri",
    ],
    tags: ["Python", "WhatsApp Business API", "Google Sheets API", "Telegram Bot API"],
    icon: MessageCircle,
    color: "#25D366",
    glow: "rgba(37,211,102,0.25)",
    link: "https://www.mediokart.in",
    badge: "🏆 National Winner — AICTE-MoE IDE Bootcamp 2026",
    event: "NIT Patna · April 2026 · Team NexaForce · 40+ teams",
    github: "https://github.com/amankumarhappy/sahayakbot",
};

// ─── Hackathon Builds ────────────────────────────────────────────────────────
const hackathonProjects = [
    {
        title: "SkillChain",
        role: "Built in 24-48 hours at HackIndia Spark 6",
        desc: "Blockchain credential verification on Polygon using Soulbound Tokens (SBTs). Tamper-proof academic certificates — verify any credential instantly with full transparency. Team NexaForce.",
        tags: ["Blockchain", "Web3", "Polygon", "SBT"],
        icon: Shield,
        color: "#8b5cf6",
        glow: "rgba(139,92,246,0.30)",
        link: "https://newdelhihackathon.vercel.app/",
        status: "live",
        event: "HackIndia Spark 6 · New Delhi · Team NexaForce",
        note: "Note: Solidity/IPFS parts were handled by teammates. My contributions: frontend, pitch, project planning.",
    },
    {
        title: "NexFlow",
        role: "Built in 24-48 hours at Hackatron 3.0",
        desc: "AI workflow orchestration OS — intelligent multi-step process automation. Turns rough ideas into structured, automated pipelines.",
        tags: ["AI", "Automation", "LLMs", "Workflow"],
        icon: Zap,
        color: "#a855f7",
        glow: "rgba(168,85,247,0.25)",
        link: "https://nexfellow.vercel.app/",
        status: "live",
        event: "Hackatron 3.0, BIT Sindri, Jharkhand",
        note: null,
    },
];

// ─── Mediokart Ecosystem ─────────────────────────────────────────────────────
const mediokartEcosystem = {
    desc: "Mediokart is my bootstrapped healthtech startup — building accessible healthcare tools for rural India, starting with SAHAYAK. Founded in January 2025 before I even entered college.",
    tags: ["Python", "WhatsApp API", "Google Sheets", "Vercel", "Render.com"],
    link: "https://www.mediokart.in",
    roadmap: [
        {
            title: "AuraBox",
            desc: "Smart first-aid box with IoT sensors for real-time monitoring and guided emergency responses — bridging physical and digital health.",
            icon: Box,
            color: "#00f3ff",
            status: "In Roadmap",
        },
        {
            title: "Mediobot",
            desc: "AI-based medical chatbot for symptom analysis and health guidance — powering the Mediokart support ecosystem.",
            icon: Bot,
            color: "#0aff0a",
            status: "In Roadmap",
        },
    ],
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-section text-foreground relative overflow-hidden">
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
                    <h2 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
                        Featured{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                            Works
                        </span>
                    </h2>
                    <p className="text-muted text-lg mt-4 max-w-xl">
                        Honest about what's built, what's live, and what's on the roadmap.
                    </p>
                </motion.div>

                {/* ─── SAHAYAK Full Hero Section ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />
                        <span className="text-emerald-400 font-black text-xl tracking-wider px-4 py-2 border border-emerald-400/20 rounded-full bg-emerald-400/5">
                            🏆 Flagship Project
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-l from-emerald-400/50 to-transparent" />
                    </div>
                </motion.div>

                {/* SAHAYAK deep-dive card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="group relative rounded-3xl border border-emerald-400/20 overflow-hidden mb-16 hover:border-emerald-400/40 transition-all duration-500"
                    style={{ background: `linear-gradient(135deg, #050f0a 0%, #0a1f15 40%, ${sahayak.glow})` }}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 30% 50%, ${sahayak.glow}, transparent 70%)` }}
                    />

                    <div className="relative z-10 p-8 md:p-12">
                        {/* Top row */}
                        <div className="flex flex-col md:flex-row gap-8 mb-8">
                            {/* Left: Icon + Winner badge */}
                            <div className="flex flex-col items-start gap-5 md:min-w-[180px]">
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center border border-emerald-400/20 bg-emerald-400/10 group-hover:scale-110 transition-transform duration-300"
                                    style={{ boxShadow: `0 0 40px ${sahayak.glow}` }}
                                >
                                    <sahayak.icon size={40} color={sahayak.color} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-400 whitespace-nowrap">
                                        <Trophy size={13} />
                                        National Winner
                                    </span>
                                    <span className="text-xs font-mono text-gray-500 px-2">AICTE-MoE IDE Bootcamp 2026</span>
                                    <span className="text-xs font-mono text-gray-600 px-2">NIT Patna · 40+ teams</span>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <h3 className="text-4xl md:text-5xl font-black text-white">{sahayak.title}</h3>
                                    <span className="text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400">
                                        {sahayak.tagline}
                                    </span>
                                </div>
                                <p className="text-xs font-mono text-gray-500 mb-4">📍 {sahayak.event}</p>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4 max-w-2xl group-hover:text-white transition-colors">
                                    {sahayak.desc}
                                </p>
                                <p className="text-sm font-mono text-yellow-400/90 mb-6 border border-yellow-400/20 bg-yellow-400/5 rounded-xl px-4 py-3 w-fit">
                                    {sahayak.badge}
                                </p>
                            </div>
                        </div>

                        {/* Problem + How it works */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-black/30 rounded-2xl p-6 border border-emerald-400/10">
                                <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Map size={14} />
                                    The Problem
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{sahayak.problem}</p>
                            </div>
                            <div className="bg-black/30 rounded-2xl p-6 border border-emerald-400/10">
                                <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3">How It Works</h4>
                                <ol className="space-y-2">
                                    {sahayak.howItWorks.map((step, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                            <span className="text-emerald-400 font-bold shrink-0">{i + 1}.</span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {sahayak.tags.map((tag, t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 group-hover:border-emerald-400/20 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={sahayak.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105"
                                style={{ color: sahayak.color, borderColor: `${sahayak.color}40`, background: `${sahayak.color}10` }}
                            >
                                <ExternalLink size={16} />
                                View on Mediokart
                            </a>
                            <a
                                href={sahayak.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 font-bold text-sm tracking-wider text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300 hover:scale-105"
                            >
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* ─── Hackathon Builds ─── */}
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
                            ⚡ Hackathon Builds
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-l from-neon-purple/50 to-transparent" />
                    </div>
                </motion.div>

                <div className="space-y-6 mb-16">
                    {hackathonProjects.map((project, i) => (
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
                                        {project.status === "live" && (
                                            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                Live Demo
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs font-mono text-gray-500 mb-2">📍 {project.event}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-3 max-w-2xl group-hover:text-gray-300 transition-colors">
                                        {project.desc}
                                    </p>
                                    {project.note && (
                                        <p className="text-xs font-mono text-amber-400/70 mb-4 border border-amber-400/20 bg-amber-400/5 rounded-lg px-3 py-2 w-fit">
                                            ⚠️ {project.note}
                                        </p>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Live Demo CTA */}
                                {project.status === "live" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105"
                                        style={{
                                            color: project.color,
                                            borderColor: `${project.color}40`,
                                            background: `${project.color}10`,
                                        }}
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-neon-blue/20 p-8 md:p-10 bg-gradient-to-br from-[#050a0f] to-[#0a1520]"
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Mediokart main */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <HeartPulse size={28} color="#ff0055" />
                                <h3 className="text-2xl font-black text-white">Mediokart</h3>
                                <span className="text-xs font-mono px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue">Founder</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{mediokartEcosystem.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {mediokartEcosystem.tags.map((tag, t) => (
                                    <span key={t} className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={mediokartEcosystem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-neon-blue hover:text-white transition-colors"
                            >
                                <ExternalLink size={14} /> Visit mediokart.in
                            </a>
                        </div>

                        {/* Roadmap items */}
                        <div className="md:w-72 space-y-4">
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">📋 On Roadmap</p>
                            {mediokartEcosystem.roadmap.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-4 rounded-2xl border border-white/5 bg-white/3 hover:border-white/10 transition-all"
                                >
                                    <item.icon size={20} color={item.color} className="mt-0.5 shrink-0" />
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-white font-bold text-sm">{item.title}</span>
                                            <span className="text-xs px-2 py-0.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400">
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
