"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Lightbulb, MessageCircle, PenTool, Rocket, Target, Users, Wrench } from "lucide-react";

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

const groups = [
    {
        title: "Core Languages",
        className: "md:col-span-7",
        skills: [
            { label: "Python", note: "Primary · OOP", logo: logos.python },
            { label: "C", note: "Core", logo: logos.c },
            { label: "HTML5", logo: logos.html5 },
            { label: "CSS3", logo: logos.css3 },
            { label: "JavaScript", note: "Learning", logo: logos.javascript },
            { label: "DSA", note: "Will start soon", symbol: "brain" },
            { label: "OOP", note: "Python", symbol: "diamond" },
        ],
    },
    {
        title: "Data and AI",
        className: "md:col-span-5",
        skills: [
            { label: "Pandas", logo: logos.pandas },
            { label: "Google Colab", symbol: "colab" },
            { label: "LLMs", symbol: "bot" },
            { label: "Gen AI", symbol: "spark" },
        ],
    },
    {
        title: "API and Tool",
        className: "md:col-span-6",
        skills: [
            { label: "Telegram API", symbol: "plane" },
            { label: "Sheets API", symbol: "sheet" },
            { label: "Git", logo: logos.git },
            { label: "GitHub", logo: logos.github },
            { label: "VS Code", logo: logos.vscode },
            { label: "Canva", logo: logos.canva },
            { label: "Vercel", logo: logos.vercel },
        ],
    },
    {
        title: "Startup Skills",
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
];

const aiTools = ["Claude", "ChatGPT", "Gemini", "Qwen", "DeepSeek"];

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
    return <MessageCircle size={24} />;
}

function SkillChip({ skill }: { skill: Skill }) {
    return (
        <div className="tech-chip">
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
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="section-compact bg-section text-foreground">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
                >
                    <div>
                        <p className="section-kicker">02. / Tech Stack</p>
                        <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">Skills</h2>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-muted">
                        Icon-first stack map for building, learning, shipping, and contributing.
                    </p>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-12">
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

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.18, duration: 0.45 }}
                        className="compact-card bento-panel p-5 md:col-span-12"
                    >
                        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                            <div>
                                <h3 className="text-lg font-black text-foreground">AI Tools I Use Daily</h3>
                                <p className="mt-1 text-sm text-muted">
                                    An actual differentiator — I use AI to ship faster as a solo founder.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {aiTools.map((tool) => (
                                    <span key={tool} className="ai-pill">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
