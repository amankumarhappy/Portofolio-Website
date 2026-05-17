"use client";

import { motion } from "framer-motion";

// ─── Honest skill categories — only what Aman actually uses ─────────────────
const skillCategories = [
    {
        category: "Core Languages",
        color: "#00f3ff",
        skills: [
            { label: "Python", icon: "🐍", note: "Primary language" },
            { label: "C", icon: "⚙️", note: "Core" },
            { label: "HTML5", icon: "🌐", note: "" },
            { label: "CSS3", icon: "🎨", note: "" },
            { label: "JavaScript", icon: "🟨", note: "Learning actively" },
        ],
    },
    {
        category: "Data & AI",
        color: "#bc13fe",
        skills: [
            { label: "Pandas", icon: "🐼", note: "AICTE internship" },
            { label: "Jupyter Notebook", icon: "📓", note: "AICTE internship" },
            { label: "Generative AI", icon: "✨", note: "" },
            { label: "LLMs", icon: "🤖", note: "" },
            { label: "Kaggle", icon: "🏅", note: "" },
        ],
    },
    {
        category: "Cloud & Deployment",
        color: "#0aff0a",
        skills: [
            { label: "Google Cloud (GCP)", icon: "☁️", note: "Arcade Cohort 1" },
            { label: "Vertex AI", icon: "🔷", note: "GCP hands-on" },
            { label: "BigQuery", icon: "📊", note: "GCP hands-on" },
            { label: "Vercel", icon: "▲", note: "" },
            { label: "Render.com", icon: "🚀", note: "" },
        ],
    },
    {
        category: "APIs & Tools",
        color: "#00f3ff",
        skills: [
            { label: "WhatsApp Business API", icon: "💬", note: "Core — SAHAYAK" },
            { label: "Telegram Bot API", icon: "✈️", note: "" },
            { label: "Google Sheets API", icon: "📋", note: "" },
            { label: "Git & GitHub", icon: "🔧", note: "" },
            { label: "VS Code", icon: "🖥️", note: "" },
            { label: "Canva", icon: "🎭", note: "" },
        ],
    },
    {
        category: "Startup Skills",
        color: "#f97316",
        skills: [
            { label: "Lean Canvas", icon: "📐", note: "" },
            { label: "MVP Development", icon: "🛠️", note: "" },
            { label: "Design Thinking", icon: "💡", note: "" },
            { label: "Community Building", icon: "🤝", note: "" },
            { label: "Startup Pitching", icon: "🎯", note: "" },
        ],
    },
    {
        category: "Languages",
        color: "#a855f7",
        skills: [
            { label: "Hindi", icon: "🇮🇳", note: "Native" },
            { label: "Bhojpuri", icon: "🌾", note: "Native" },
            { label: "English", icon: "🌍", note: "Professional" },
        ],
    },
];

// ─── AI Tools I use daily ─────────────────────────────────────────────────
const aiTools = [
    { label: "Claude", color: "#cc785c" },
    { label: "ChatGPT", color: "#10a37f" },
    { label: "Gemini", color: "#4285f4" },
    { label: "Qwen", color: "#7c3aed" },
    { label: "DeepSeek", color: "#00d4ff" },
];

// ─── What I'm learning NEXT — honest roadmap ────────────────────────────────
const learningNext = [
    { label: "JavaScript (actively)", icon: "🟨" },
    { label: "DSA — LeetCode", icon: "🧠" },
    { label: "Open Source contribution (GSoC 2027 prep)", icon: "🌍" },
    { label: "Cybersecurity fundamentals", icon: "🔒" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-section-alt relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <p className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4">
                        02. / What I Know
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mb-6 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
                        HONEST STACK
                    </h2>
                    <p className="text-muted text-xl max-w-2xl mx-auto md:mx-0">
                        Not aspirational. Not inflated. Just what I actually ship with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07 }}
                            className="bg-card border border-card-border rounded-3xl p-8 hover:border-neon-blue/20 transition-all duration-300"
                        >
                            <h3
                                className="text-lg font-bold mb-6 border-b border-white/10 pb-3"
                                style={{ color: category.color }}
                            >
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="group flex flex-col items-center gap-2">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300 text-2xl">
                                            {skill.icon}
                                        </div>
                                        <div className="text-center">
                                            <span className="text-xs font-mono text-muted group-hover:text-foreground transition-colors block">
                                                {skill.label}
                                            </span>
                                            {skill.note && (
                                                <span className="text-[10px] text-gray-600">{skill.note}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* AI Tools I Use Daily */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-card border border-card-border rounded-3xl p-8 hover:border-neon-blue/20 transition-all duration-300"
                    >
                        <h3 className="text-lg font-bold text-neon-blue mb-6 border-b border-white/10 pb-3">
                            AI Tools I Use Daily
                        </h3>
                        <p className="text-muted text-xs font-mono mb-4">This is an actual differentiator — I use AI tools to ship faster as a solo founder.</p>
                        <div className="flex flex-wrap gap-3">
                            {aiTools.map((tool, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full text-sm font-bold border transition-all duration-300 hover:scale-105 cursor-default"
                                    style={{
                                        color: tool.color,
                                        borderColor: `${tool.color}40`,
                                        background: `${tool.color}10`,
                                    }}
                                >
                                    {tool.label}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* What I'm Learning Next — separate honest subsection */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 bg-card border border-neon-blue/10 rounded-3xl p-8"
                >
                    <h3 className="text-lg font-bold text-neon-blue mb-2 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
                        What I'm Learning Next
                    </h3>
                    <p className="text-muted text-xs font-mono mb-5">
                        Honesty is a strength, not a weakness — especially from a Year 1 student. This shows self-awareness and a learning roadmap.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {learningNext.map((item, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/20 text-xs font-mono text-muted bg-neon-blue/5 hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
                            >
                                <span>{item.icon}</span>
                                {item.label}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
