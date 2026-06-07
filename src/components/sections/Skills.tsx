"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { Bot, Brain, Code2, Lightbulb, MessageCircle, PenTool, Rocket, Target, Users, Wrench, GitBranch, Sparkles } from "lucide-react";

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
    pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    canva: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
};

const stackGroups = [
    {
        title: "Languages",
        subtitle: "Core programming foundation",
        icon: Code2,
        color: "from-neon-blue to-cyan-400",
        skills: [
            { label: "Python", note: "Primary", logo: logos.python },
            { label: "C", note: "Core", logo: logos.c },
            { label: "HTML5", logo: logos.html5 },
            { label: "CSS3", logo: logos.css3 },
            { label: "JavaScript", note: "Learning", logo: logos.javascript },
        ],
    },
    {
        title: "Development Tools",
        subtitle: "Building and shipping",
        icon: Wrench,
        color: "from-neon-purple to-pink-400",
        skills: [
            { label: "Git", logo: logos.git },
            { label: "GitHub", logo: logos.github },
            { label: "VS Code", logo: logos.vscode },
            { label: "Canva", logo: logos.canva },
            { label: "Vercel", logo: logos.vercel },
        ],
    },
    {
        title: "AI & Data",
        subtitle: "Intelligence and insights",
        icon: Bot,
        color: "from-emerald-400 to-teal-400",
        skills: [
            { label: "Pandas", logo: logos.pandas },
            { label: "Google Colab", symbol: "colab" },
            { label: "LLMs", symbol: "bot" },
            { label: "Gen AI", symbol: "spark" },
        ],
    },
    {
        title: "Open Source",
        subtitle: "Contributing back",
        icon: GitBranch,
        color: "from-orange-400 to-amber-400",
        skills: [
            { label: "Waggle-MCP", note: "Contributed", symbol: "package" },
            { label: "GSSoC 2026", note: "Active", symbol: "gssoc" },
        ],
    },
    {
        title: "Startup Skills",
        subtitle: "Building ventures",
        icon: Rocket,
        color: "from-rose-400 to-red-400",
        skills: [
            { label: "Lean Canvas", symbol: "canvas" },
            { label: "MVP Dev", symbol: "tools" },
            { label: "Design Thinking", symbol: "idea" },
            { label: "Pitching", symbol: "target" },
            { label: "Community", symbol: "people" },
        ],
    },
];

const aiTools = [
    { name: "Claude", color: "hover:bg-orange-500/20 hover:border-orange-500/50" },
    { name: "ChatGPT", color: "hover:bg-emerald-500/20 hover:border-emerald-500/50" },
    { name: "Gemini", color: "hover:bg-blue-500/20 hover:border-blue-500/50" },
    { name: "Qwen", color: "hover:bg-purple-500/20 hover:border-purple-500/50" },
    { name: "DeepSeek", color: "hover:bg-cyan-500/20 hover:border-cyan-500/50" },
];

function SymbolIcon({ symbol }: { symbol?: string }) {
    if (symbol === "brain") return <Brain size={22} />;
    if (symbol === "bot") return <Bot size={22} />;
    if (symbol === "spark") return <Sparkles size={22} />;
    if (symbol === "rocket") return <Rocket size={22} />;
    if (symbol === "tools") return <Wrench size={22} />;
    if (symbol === "idea") return <Lightbulb size={22} />;
    if (symbol === "target") return <Target size={22} />;
    if (symbol === "people") return <Users size={22} />;
    if (symbol === "plane") return <span className="text-lg">✈️</span>;
    if (symbol === "sheet") return <span className="text-lg">📋</span>;
    if (symbol === "canvas") return <span className="text-lg">📐</span>;
    if (symbol === "diamond") return <span className="text-lg">🔷</span>;
    if (symbol === "colab") return <span className="text-lg font-black text-amber-400">Co</span>;
    if (symbol === "package") return <span className="text-lg">📦</span>;
    if (symbol === "gssoc") return <span className="text-lg font-black text-rose-400">Gs</span>;
    return <MessageCircle size={22} />;
}

function AnimatedSkillChip({ skill, index }: { skill: Skill; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.15);
        y.set((e.clientY - centerY) * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="skill-chip group cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="skill-icon group-hover:shadow-[0_0_15px_var(--neon-blue)] transition-shadow duration-300">
                {skill.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={skill.logo} alt={`${skill.label} logo`} loading="lazy" />
                ) : (
                    <SymbolIcon symbol={skill.symbol} />
                )}
            </div>
            <div>
                <div className="text-sm font-black text-foreground group-hover:text-neon-blue transition-colors duration-300">{skill.label}</div>
                {skill.note && <div className="mt-0.5 text-[11px] text-muted">{skill.note}</div>}
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-neon-blue/5 to-neon-purple/5" />
        </motion.div>
    );
}

function StackCategory({ group, index }: { group: typeof stackGroups[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="compact-card overflow-hidden"
        >
            {/* Header with gradient */}
            <div className={`relative p-5 border-b border-card-border bg-gradient-to-r ${group.color} bg-opacity-5`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />
                <div className="relative flex items-center gap-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${group.color} bg-opacity-20 text-white`}>
                        <group.icon size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-foreground">{group.title}</h3>
                        <p className="text-xs text-muted">{group.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Skills grid */}
            <div className="p-4">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.skills.map((skill, idx) => (
                        <AnimatedSkillChip key={`${group.title}-${skill.label}`} skill={skill} index={idx} />
                    ))}
                </div>
            </div>

            {/* Bottom glow line */}
            <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${group.color} opacity-30`} />
        </motion.div>
    );
}

function AIToolChip({ tool, index }: { tool: typeof aiTools[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.08,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
            }}
            whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
            }}
            className={`inline-flex items-center rounded-full border border-card-border bg-card-hover px-4 py-2 text-sm font-black cursor-pointer transition-all duration-300 ${tool.color}`}
        >
            {tool.name}
        </motion.div>
    );
}

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} id="skills" className="section-compact bg-section text-foreground relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-neon-blue/8 blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-neon-purple/8 blur-[150px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[180px]" />
            </motion.div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-10 text-center"
                >
                    <p className="section-kicker inline-flex items-center gap-2">
                        <Code2 size={12} />
                        02. / Tech Stack
                    </p>
                    <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">Build Stack in Motion</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-sm leading-6 text-muted">
                        A living stack map of languages, tools, AI assistants, and venture skills — organized for building, learning, and shipping.
                    </p>
                </motion.div>

                {/* Stack categories grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {stackGroups.map((group, index) => (
                        <StackCategory key={group.title} group={group} index={index} />
                    ))}
                </div>

                {/* AI Tools Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-8 compact-card p-6 relative overflow-hidden"
                >
                    {/* Animated border glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-blue/20 opacity-50 blur-xl pointer-events-none" />

                    <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Bot size={20} className="text-neon-blue" />
                                <h3 className="text-lg font-black text-foreground">AI Tools I Use Daily</h3>
                            </div>
                            <p className="text-sm text-muted max-w-md">
                                These are the AI assistants that help me ship faster as a solo founder — not just buzzwords, actual tools in my workflow.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {aiTools.map((tool, index) => (
                                <AIToolChip key={tool.name} tool={tool} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-30" />
                </motion.div>
            </div>
        </section>
    );
}
