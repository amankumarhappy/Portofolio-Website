"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── SVG tech logos ─────────────────────────────────────────────────────────
const logos: Record<string, string> = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    canva: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
};

const skillCategories = [
    {
        id: "core",
        category: "Core Languages",
        color: "#00f3ff",
        skills: [
            { label: "Python", logo: logos.python, note: "Primary · OOP" },
            { label: "C", logo: logos.c, note: "Core" },
            { label: "HTML5", logo: logos.html5, note: "" },
            { label: "CSS3", logo: logos.css3, note: "" },
            { label: "JavaScript", logo: logos.javascript, note: "Learning" },
            { label: "DSA", logo: "", emoji: "🧠", note: "Will start soon" },
            { label: "OOP", logo: "", emoji: "🔷", note: "Python" },
        ],
    },
    {
        id: "data-ai",
        category: "Data & AI",
        color: "#bc13fe",
        skills: [
            { label: "Pandas", logo: logos.pandas, note: "AICTE internship" },
            { label: "Jupyter", logo: logos.jupyter, note: "AICTE internship" },
            { label: "Gen AI", logo: "", emoji: "✨", note: "" },
            { label: "LLMs", logo: "", emoji: "🤖", note: "" },
            { label: "Kaggle", logo: "", emoji: "🏅", note: "" },
        ],
    },
    {
        id: "apis",
        category: "APIs & Tools",
        color: "#00f3ff",
        skills: [
            { label: "WhatsApp API", logo: "", emoji: "💬", note: "Core — SAHAYAK" },
            { label: "Telegram API", logo: "", emoji: "✈️", note: "" },
            { label: "Sheets API", logo: "", emoji: "📋", note: "" },
            { label: "Git", logo: logos.git, note: "" },
            { label: "GitHub", logo: logos.github, note: "" },
            { label: "VS Code", logo: logos.vscode, note: "" },
            { label: "Canva", logo: logos.canva, note: "" },
            { label: "Vercel", logo: logos.vercel, note: "" },
        ],
    },
    {
        id: "startup",
        category: "Startup Skills",
        color: "#f97316",
        skills: [
            { label: "Lean Canvas", logo: "", emoji: "📐", note: "" },
            { label: "Entrepreneurship", logo: "", emoji: "🚀", note: "Learning daily" },
            { label: "MVP Dev", logo: "", emoji: "🛠️", note: "" },
            { label: "Design Thinking", logo: "", emoji: "💡", note: "" },
            { label: "Pitching", logo: "", emoji: "🎯", note: "" },
            { label: "Community", logo: "", emoji: "🤝", note: "" },
        ],
    },
];

const aiTools = [
    { label: "Claude", color: "#cc785c" },
    { label: "ChatGPT", color: "#10a37f" },
    { label: "Gemini", color: "#4285f4" },
    { label: "Qwen", color: "#7c3aed" },
    { label: "DeepSeek", color: "#00d4ff" },
];

const learningNext = [
    { emoji: "🐍", label: "Python & C (daily practice — Year 1 strong foundation)" },
    { emoji: "💡", label: "Entrepreneurship & Healthcare for startups (daily)" },
    { emoji: "🌐", label: "Web Development fundamentals" },
    { emoji: "🔒", label: "Cybersecurity fundamentals (started)" },
    { emoji: "🧠", label: "DSA — will start soon" },
];

interface Skill {
    label: string;
    logo?: string;
    emoji?: string;
    note?: string;
}

function SkillChip({ skill }: { skill: Skill }) {
    return (
        <div className="group flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300 overflow-hidden">
                {skill.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={skill.logo}
                        alt={`${skill.label} logo`}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                            const parent = e.currentTarget.parentElement;
                            if (parent) parent.innerHTML = `<span class="text-xl">${skill.emoji || "⚙️"}</span>`;
                        }}
                    />
                ) : (
                    <span className="text-2xl">{skill.emoji || "⚙️"}</span>
                )}
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
    );
}

export default function Skills() {
    const [activeTab, setActiveTab] = useState<string>("core");

    return (
        <section id="skills" className="py-24 bg-section-alt relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 z-10 relative">
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4"
                >
                    02. / What I Know
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
                        HONEST STACK
                    </h2>
                    <p className="text-muted text-xl max-w-2xl mx-auto md:mx-0">
                        Not aspirational. Not inflated. Just what I actually ship with.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
                                activeTab === cat.id
                                    ? "bg-white/10 text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                    : "bg-transparent text-gray-500 border-white/5 hover:text-gray-300 hover:bg-white/5"
                            }`}
                        >
                            {cat.category}
                        </button>
                    ))}
                    <button
                        onClick={() => setActiveTab("ai-tools")}
                        className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
                            activeTab === "ai-tools"
                                ? "bg-white/10 text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                : "bg-transparent text-gray-500 border-white/5 hover:text-gray-300 hover:bg-white/5"
                        }`}
                    >
                        AI Tools & Learning
                    </button>
                </div>

                {/* Content */}
                <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {skillCategories.map((cat) => (
                            activeTab === cat.id && (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-card border border-card-border rounded-3xl p-8 shadow-xl"
                                >
                                    <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 flex items-center gap-3" style={{ color: cat.color }}>
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                                        {cat.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                                        {cat.skills.map((skill, sIdx) => (
                                            <SkillChip key={sIdx} skill={skill} />
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        ))}

                        {activeTab === "ai-tools" && (
                            <motion.div
                                key="ai-tools"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div className="bg-card border border-card-border rounded-3xl p-8">
                                    <h3 className="text-xl font-bold text-neon-blue mb-2 border-b border-white/10 pb-4">
                                        AI Tools I Use Daily
                                    </h3>
                                    <p className="text-muted text-xs font-mono mb-6 mt-4">An actual differentiator — I use AI to ship faster as a solo founder.</p>
                                    <div className="flex flex-wrap gap-3">
                                        {aiTools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 hover:scale-105 cursor-default"
                                                style={{ color: tool.color, borderColor: `${tool.color}40`, background: `${tool.color}10` }}
                                            >
                                                {tool.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-card border border-neon-blue/10 rounded-3xl p-8">
                                    <h3 className="text-xl font-bold text-neon-blue mb-2 flex items-center gap-3 border-b border-white/10 pb-4">
                                        <span className="inline-block w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
                                        What I'm Learning Next
                                    </h3>
                                    <p className="text-muted text-xs font-mono mb-6 mt-4">
                                        Year 1 student — learning with a clear roadmap. Honesty is a strength.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        {learningNext.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-neon-blue/20 text-sm font-mono text-muted bg-neon-blue/5 hover:border-neon-blue/50 hover:text-white transition-all duration-300"
                                            >
                                                <span className="text-xl">{item.emoji}</span>
                                                {item.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
