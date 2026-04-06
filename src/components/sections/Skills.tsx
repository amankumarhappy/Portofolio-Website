"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

const skillCategories = [
    {
        category: "Frontend — Core Languages",
        items: [
            { name: "html5", label: "HTML5" },
            { name: "css3", label: "CSS3" },
            { name: "typescript", label: "TypeScript" },
        ]
    },
    {
        category: "Frontend — Frameworks & Libraries",
        items: [
            { name: "react", label: "React" },
            { name: "nextjs", label: "Next.js" },
        ]
    },
    {
        category: "CSS Tools",
        items: [
            { name: "tailwindcss", label: "Tailwind CSS" },
            { name: "bootstrap5", label: "Bootstrap" },
        ]
    },
    {
        category: "Version Control & IDE",
        items: [
            { name: "git", label: "Git" },
            { name: "github", label: "GitHub" },
            { name: "vscode", label: "VS Code" },
        ]
    },
    {
        category: "Backend — Languages & Frameworks",
        items: [
            { name: "nodejs", label: "Node.js" },
            { name: "expressjs", label: "Express.js" },
            { name: "django", label: "Django" },
            { name: "fastapi", label: "FastAPI" },
            { name: "flask", label: "Flask" },
            { name: "spring", label: "Spring Boot" },
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "postgresql", label: "PostgreSQL" },
            { name: "mysql", label: "MySQL" },
            { name: "mongodb", label: "MongoDB" },
        ]
    },
    {
        category: "API & Platform Tools",
        items: [
            { name: "firebase", label: "Firebase" },
            { name: "supabase", label: "Supabase" },
            { name: "postman", label: "Postman" },
        ]
    },
    {
        category: "AI Tools I Use",
        items: [
            { name: "claude", label: "Claude" },
            { name: "openai", label: "ChatGPT" },
            { name: "gemini", label: "Gemini" },
        ]
    },
    {
        category: "Design Tools",
        items: [
            { name: "figma", label: "Figma" },
            { name: "canva", label: "Canva" },
        ]
    },
    {
        category: "Core Skills",
        items: [
            { name: "python", label: "Python" },
            { name: "c", label: "C Programming" },
        ]
    },
];

// Text-only badges for tools that don't have icons
const textBadgeCategories: Record<string, string[]> = {
    "AI Tools I Use": ["Qwen", "DeepSeek"],
};

// Tools still learning
const learningTools = [
    "Spring Boot", "FastAPI", "Docker", "Kubernetes", "AWS", "DevOps"
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-neutral-900 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
                        TECH ARSENAL
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto md:mx-0">
                        The tools I use to turn ideas into reality.
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
                            className="bg-black/40 border border-white/5 rounded-3xl p-8 hover:border-neon-blue/20 transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-3">
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-6">
                                {category.items.map((skill: any, sIdx) => (
                                    <div key={sIdx} className="group flex flex-col items-center gap-3">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300 p-3">
                                            <StackIcon name={skill.name} className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300" />
                                        </div>
                                        <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors text-center">
                                            {skill.label}
                                        </span>
                                    </div>
                                ))}
                                {/* Extra text badges for certain categories */}
                                {textBadgeCategories[category.category]?.map((label, tIdx) => (
                                    <div key={`text-${tIdx}`} className="group flex flex-col items-center gap-3">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300 px-2">
                                            <span className="text-xs font-bold text-gray-300 group-hover:text-neon-blue transition-colors text-center leading-tight">{label}</span>
                                        </div>
                                        <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors text-center">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Still Learning section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 bg-black/40 border border-neon-blue/10 rounded-3xl p-8"
                >
                    <h3 className="text-lg font-bold text-neon-blue mb-5 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
                        Still Learning &amp; Exploring
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {learningTools.map((tool, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 rounded-full border border-neon-blue/20 text-xs font-mono text-gray-400 bg-neon-blue/5 hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
