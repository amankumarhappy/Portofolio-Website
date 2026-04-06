"use client";

import { motion } from "framer-motion";
import { ExternalLink, PenLine, BookOpen, MessageCircle } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const platforms = [
    {
        name: "Medium",
        desc: "10+ articles on technology, social issues & personal development reaching global readers.",
        label: "10+ Articles",
        icon: PenLine,
        color: "#00f3ff",
        glow: "rgba(0,243,255,0.15)",
        href: "https://medium.com/@amankumarhappy",
    },
    {
        name: "Quora",
        desc: "314+ answers, 45+ posts and 30,000+ content views on tech, startups and personal growth.",
        label: "30K+ Views",
        icon: MessageCircle,
        color: "#b92b27",
        glow: "rgba(185,43,39,0.15)",
        href: "https://www.quora.com/profile/Aman-Kumar-Happy",
    },
    {
        name: "Blogspot",
        desc: "20+ original posts on technology, self-improvement and social issues with SEO experimentation.",
        label: "20+ Posts",
        icon: BookOpen,
        color: "#a855f7",
        glow: "rgba(168,85,247,0.15)",
        href: "https://amankumarhappy.blogspot.com/",
    },
];

export default function Blogs() {
    return (
        <section id="blogs" className="py-28 bg-neutral-950 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[130px] pointer-events-none" />

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
                    06. / Writing & Blogs
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
                >
                    Ideas I Write{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                        About
                    </span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    className="text-gray-400 text-lg mb-14 max-w-2xl"
                >
                    Beyond code, I express ideas on technology, startups, and society across multiple platforms.
                </motion.p>

                {/* Platform cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {platforms.map((p, i) => (
                        <motion.a
                            key={i}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 3}
                            className="group relative rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all duration-400 overflow-hidden flex flex-col gap-5"
                            style={{ background: `linear-gradient(135deg, #0d0d0d 60%, ${p.glow})` }}
                        >
                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-300"
                                style={{ boxShadow: `0 0 20px ${p.glow}` }}
                            >
                                <p.icon size={26} color={p.color} />
                            </div>

                            {/* Label badge */}
                            <span
                                className="text-xs font-bold px-3 py-1 rounded-full w-fit border"
                                style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}15` }}
                            >
                                {p.label}
                            </span>

                            <div>
                                <h3 className="text-2xl font-black text-white mb-2">{p.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {p.desc}
                                </p>
                            </div>

                            <div
                                className="mt-auto flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                                style={{ color: p.color }}
                            >
                                Read More <ExternalLink size={14} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
