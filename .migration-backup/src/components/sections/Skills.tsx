"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Lightbulb, MessageCircle, PenTool, Rocket, Target, Users, Wrench, Code2, Zap, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

type Skill = {
    label: string;
    note?: string;
    logo?: string;
    symbol?: string;
};

const logos = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    canva: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
};

const groups = [
    {
        title: "Languages",
        className: "md:col-span-7",
        skills: [
            { label: "Python", note: "Primary · OOP", logo: logos.python },
            { label: "C", note: "Core", logo: logos.c },
            { label: "HTML5", logo: logos.html5 },
            { label: "CSS3", logo: logos.css3 },
            { label: "JavaScript", note: "Learning", logo: logos.javascript },
            { label: "Java", note: "Exploring", logo: logos.java },
            { label: "DSA", note: "Foundation", symbol: "brain" },
        ],
    },
    {
        title: "Tools & DevOps",
        className: "md:col-span-5",
        skills: [
            { label: "Git", logo: logos.git },
            { label: "GitHub", logo: logos.github },
            { label: "VS Code", logo: logos.vscode },
            { label: "Vercel", logo: logos.vercel },
        ],
    },
    {
        title: "AI Tools",
        className: "md:col-span-6",
        skills: [
            { label: "Claude", symbol: "claude" },
            { label: "ChatGPT", symbol: "gpt" },
            { label: "Gemini", symbol: "gemini" },
            { label: "Qwen", symbol: "qwen" },
            { label: "DeepSeek", symbol: "deepseek" },
            { label: "LLMs", symbol: "bot" },
        ],
    },
    {
        title: "Startup Tools",
        className: "md:col-span-6",
        skills: [
            { label: "Lean Canvas", symbol: "canvas" },
            { label: "Entrepreneurship", note: "Learning daily", symbol: "rocket" },
            { label: "MVP Dev", symbol: "tools" },
            { label: "Design Thinking", symbol: "idea" },
            { label: "Pitching", symbol: "target" },
            { label: "Community", symbol: "people" },
        ],
    },
    {
        title: "Open Source",
        className: "md:col-span-6",
        skills: [
            { label: "Waggle-MCP", note: "Contributor", symbol: "github" },
            { label: "GSSoC 2026", note: "Participant", symbol: "rocket" },
            { label: "GitHub Workflows", symbol: "git" },
            { label: "Code Review", symbol: "code" },
            { label: "Documentation", symbol: "doc" },
            { label: "Community Driven", symbol: "people" },
        ],
    },
    {
        title: "Web Stack",
        className: "md:col-span-6",
        skills: [
            { label: "Next.js", logo: logos.nextjs },
            { label: "React", logo: logos.react },
            { label: "Tailwind CSS", logo: logos.tailwind },
            { label: "Framer Motion", symbol: "motion" },
            { label: "FastAPI", symbol: "api" },
            { label: "PostgreSQL", symbol: "db" },
        ],
    },
];

const aiTools = [
    { name: "Claude", color: "#9F7AEA" },
    { name: "ChatGPT", color: "#10A37F" },
    { name: "Gemini", color: "#4285F4" },
    { name: "Qwen", color: "#FF6B35" },
    { name: "DeepSeek", color: "#1E90FF" },
];

const founderDashboard = {
    activeProject: "SAHAYAK",
    currentFocus: "Healthtech for rural India",
    openSource: "Waggle-MCP",
    status: "Building in public",
};

function SymbolIcon({ symbol }: { symbol?: string }) {
    if (symbol === "brain") return <Brain size={24} />;
    if (symbol === "bot") return <Bot size={24} />;
    if (symbol === "spark") return <PenTool size={24} />;
    if (symbol === "rocket") return <Rocket size={24} />;
    if (symbol === "tools") return <Wrench size={24} />;
    if (symbol === "idea") return <Lightbulb size={24} />;
    if (symbol === "target") return <Target size={24} />;
    if (symbol === "people") return <Users size={24} />;
    if (symbol === "plane") return <span className="text-xl">✈️</span>;
    if (symbol === "sheet") return <span className="text-xl">📋</span>;
    if (symbol === "canvas") return <span className="text-xl">📐</span>;
    if (symbol === "diamond") return <span className="text-xl">🔷</span>;
    if (symbol === "colab") return <span className="text-xl font-black text-amber-400">Co</span>;
    if (symbol === "claude") return <span className="text-xl font-black">C</span>;
    if (symbol === "gpt") return <span className="text-xl font-black">GPT</span>;
    if (symbol === "gemini") return <span className="text-xl font-black">G</span>;
    if (symbol === "qwen") return <span className="text-xl font-black">Q</span>;
    if (symbol === "deepseek") return <span className="text-xl font-black">D</span>;
    if (symbol === "motion") return <Zap size={24} />;
    if (symbol === "api") return <Code2 size={24} />;
    if (symbol === "db") return <span className="text-xl">🗄️</span>;
    if (symbol === "git") return <GitBranch size={24} />;
    if (symbol === "code") return <Code2 size={24} />;
    if (symbol === "doc") return <span className="text-xl">📄</span>;
    if (symbol === "github") return <span className="text-xl">🐙</span>;
    return <MessageCircle size={24} />;
}

function SkillChip({ skill }: { skill: Skill }) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="tech-chip cursor-pointer"
        >
            <div className="tech-icon">
                {skill.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={skill.logo} alt={`${skill.label} logo`} loading="lazy" />
                ) : (
                    <SymbolIcon symbol={skill.symbol} />
                )}
            </div>
            <div>
                <div className="text-sm font-black text-foreground">{skill.label}</div>
                {skill.note && <div className="mt-0.5 text-[11px] text-muted">{skill.note}</div>}
            </div>
        </motion.div>
    );
}

function AIToolChip({ tool }: { tool: { name: string; color: string } }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="ai-tool-chip relative"
            style={{
                background: isHovered ? tool.color : "var(--card-bg-hover)",
                color: isHovered ? "#fff" : "var(--foreground)",
            }}
        >
            {isHovered && (
                <motion.div
                    layoutId={`glow-${tool.name}`}
                    className="absolute inset-0 rounded-full blur-xl opacity-30"
                    style={{ background: tool.color }}
                />
            )}
            <span className="relative z-10 font-bold text-sm">{tool.name}</span>
        </motion.div>
    );
}

export default function Skills() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="skills" className="section-compact bg-section text-foreground relative overflow-hidden">
            {/* Animated background mesh */}
            <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-neon-green rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                {/* Founder Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-12 founder-dashboard compact-card p-6 border-2 border-neon-blue border-opacity-30"
                >
                    <div className="grid gap-6 md:grid-cols-4">
                        <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-neon-blue">Active Project</p>
                            <p className="text-lg font-black text-foreground">{founderDashboard.activeProject}</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-neon-purple">Current Focus</p>
                            <p className="text-lg font-black text-foreground">{founderDashboard.currentFocus}</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-neon-green">Open Source</p>
                            <p className="text-lg font-black text-foreground">{founderDashboard.openSource}</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-neon-blue">Status</p>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                                <p className="text-lg font-black text-foreground">{founderDashboard.status}</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
                >
                    <div>
                        <p className="section-kicker">02. / Tech Stack</p>
                        <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">Build Stack in Motion</h2>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-muted">
                        Icon-first stack map for building, learning, shipping, and contributing.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid gap-4 md:grid-cols-12 mb-8">
                    {groups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06, duration: 0.45 }}
                            className={`compact-card bento-panel p-5 ${group.className}`}
                        >
                            <h3 className="mb-4 text-lg font-black text-foreground">{group.title}</h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {group.skills.map((skill) => (
                                    <SkillChip key={`${group.title}-${skill.label}`} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* AI Tools Section */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18, duration: 0.45 }}
                    className="compact-card bento-panel p-6 md:col-span-12"
                >
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                        <div>
                            <h3 className="text-lg font-black text-foreground">AI Tools I Use Daily</h3>
                            <p className="mt-1 text-sm text-muted">
                                Interactive chips showing the AI tools I use to ship faster as a solo founder.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {aiTools.map((tool) => (
                                <AIToolChip key={tool.name} tool={tool} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Impact Counters */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.24, duration: 0.45 }}
                    className="mt-8 grid gap-4 md:grid-cols-5"
                >
                    {[
                        { label: "National Win", value: "1", icon: "🏆" },
                        { label: "Open Source", value: "5+", icon: "🐙" },
                        { label: "Content Views", value: "30K+", icon: "👁️" },
                        { label: "Followers", value: "750+", icon: "👥" },
                        { label: "Shipped", value: "3+", icon: "🚀" },
                    ].map((counter, index) => (
                        <motion.div
                            key={counter.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.24 + index * 0.04, duration: 0.35 }}
                            className="compact-card p-4 text-center group hover:border-neon-blue"
                        >
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{counter.icon}</div>
                            <div className="text-2xl font-black text-foreground">{counter.value}</div>
                            <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted">{counter.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
