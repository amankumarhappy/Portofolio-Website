"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, HeartPulse, Trophy, Users } from "lucide-react";

const journey = [
    {
        icon: GraduationCap,
        year: "2025-2029",
        title: "B.Tech CSE",
        text: "Government Engineering College, Buxar.",
    },
    {
        icon: HeartPulse,
        year: "2025",
        title: "Mediokart",
        text: "Started building SAHAYAK for practical healthcare workflows.",
    },
    {
        icon: Trophy,
        year: "2026",
        title: "National Winner",
        text: "IDE Bootcamp 2026, AICTE x Ministry of Education.",
    },
    {
        icon: Code2,
        year: "Open Source",
        title: "Waggle-MCP",
        text: "Contributor to an MCP project on GitHub and PyPI.",
    },
    {
        icon: Users,
        year: "Remote · 2026",
        title: "GSSoC 2026",
        text: "GirlScript Summer of Code. Actively contributing to open source.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-compact bg-section text-foreground">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-8 text-center"
                >
                    <p className="section-kicker">04. / Journey</p>
                    <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">My Journey</h2>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {journey.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.45 }}
                            className="compact-card relative p-5"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <item.icon size={24} className="text-neon-blue" />
                                <span className="rounded-full bg-card-hover px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted">
                                    {item.year}
                                </span>
                            </div>
                            <h3 className="text-lg font-black text-foreground">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
