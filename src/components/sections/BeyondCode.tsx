"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Youtube, PenLine } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const beyondItems = [
    {
        icon: BookOpen,
        color: "#10b981",
        glow: "rgba(16,185,129,0.15)",
        emoji: "📚",
        title: "Pahal — Free Teaching",
        subtitle: "Every Monday · GEC Buxar",
        desc: "Every Monday I walk into a classroom at GEC Buxar and teach Computer Science to Class 8–9 Hindi-medium school students — for free. Topics: computing basics, internet literacy, digital tools. All in Hindi. Because if tech is going to matter in Bihar, it has to start in classrooms. (An Initiative by GEC Buxar)",
        tag: "Social Impact",
        tagColor: "#10b981",
        stat: "20+ students reached",
    },
    {
        icon: Users,
        color: "#4285f4",
        glow: "rgba(66,133,244,0.15)",
        emoji: "🤝",
        title: "Community Building",
        subtitle: "Salesforce Bihar · Bihar Entrepreneur Summit",
        desc: "Core Team Member of Salesforce Community Bihar (Jan 2026–Present) — organizing developer events, learning sessions, and connecting students with opportunities. Also participated in the Bihar Entrepreneurship Summit and wrote about Bihar's startup ecosystem.",
        tag: "Community",
        tagColor: "#4285f4",
        stat: "Google Student Ambassador alumni",
    },
    {
        icon: Youtube,
        color: "#ff0000",
        glow: "rgba(255,0,0,0.1)",
        emoji: "🎥",
        title: "Content Creation",
        subtitle: "YouTube · Quora · Medium · Substack",
        desc: "82+ YouTube videos (30K+ views) on vlogs, book reviews, and social issues. 314+ Quora answers (30K+ content views). 10+ Medium articles. Writing about Bihar's startup ecosystem, health-tech, and what it means to build as a first-generation founder from a small city.",
        tag: "Content",
        tagColor: "#ff0000",
        stat: "30K+ lifetime content views",
    },
    {
        icon: PenLine,
        color: "#a855f7",
        glow: "rgba(168,85,247,0.12)",
        emoji: "✍️",
        title: "Writing & Thought Leadership",
        subtitle: "Substack · Dev.to · Blogspot",
        desc: "Newsletter on building from Bihar, developer learnings from shipping SAHAYAK, and tech essays. Writing is how I process what I'm building and share it with people who might find it useful — especially other first-gen founders from small towns.",
        tag: "Writing",
        tagColor: "#a855f7",
        stat: "5 active platforms",
    },
];

export default function BeyondCode() {
    return (
        <section id="beyond" className="py-24 bg-section-alt text-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4"
                >
                    06. / More Than Code
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="text-4xl md:text-6xl font-black text-foreground mb-4 leading-tight"
                >
                    Beyond{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                        Building
                    </span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    className="text-muted text-lg mb-14 max-w-2xl"
                >
                    What makes Aman Kumar Happy different from any other CSE student — teaching, community, content, and caring about Bihar's future.
                </motion.p>

                {/* Items grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {beyondItems.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 3}
                            className="group relative rounded-3xl border border-card-border overflow-hidden hover:border-white/20 transition-all duration-500"
                            style={{ background: `linear-gradient(135deg, #0d0d0d 60%, ${item.glow})` }}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 30% 20%, ${item.glow}, transparent 70%)` }}
                            />

                            <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
                                {/* Icon row */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center border bg-black/30 group-hover:scale-110 transition-transform duration-300 text-2xl"
                                        style={{ borderColor: `${item.color}30`, boxShadow: `0 0 20px ${item.glow}` }}
                                    >
                                        {item.emoji}
                                    </div>
                                    <div>
                                        <span
                                            className="text-xs font-bold px-3 py-1 rounded-full border"
                                            style={{ color: item.tagColor, borderColor: `${item.tagColor}40`, background: `${item.tagColor}10` }}
                                        >
                                            {item.tag}
                                        </span>
                                        <p className="text-xs font-mono text-gray-500 mt-1">{item.subtitle}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-black text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted text-sm leading-relaxed mb-5 flex-1 group-hover:text-gray-300 transition-colors">
                                    {item.desc}
                                </p>

                                {/* Stat */}
                                <div
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-mono w-fit"
                                    style={{ color: item.color, borderColor: `${item.color}30`, background: `${item.color}08` }}
                                >
                                    ✓ {item.stat}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note — for grant evaluators */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={8}
                    className="mt-12 text-center"
                >
                    <p className="text-muted text-sm font-mono max-w-2xl mx-auto">
                        This is what separates a builder from a founder — caring about people, not just products.
                        <br />
                        <span className="text-neon-blue">Aman Kumar Happy</span> · Buxar, Bihar · Building for Bharat 🇮🇳
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
