"use client";

import { motion, useInView } from "framer-motion";
import { Code2, GraduationCap, HeartPulse, Trophy, Users } from "lucide-react";
import { useRef } from "react";

const journey = [
    {
        icon: GraduationCap,
        year: "2025–2029",
        title: "B.Tech CSE",
        text: "Government Engineering College, Buxar.",
        color: "#00e5ff",
    },
    {
        icon: HeartPulse,
        year: "2025",
        title: "Mediokart",
        text: "Started building SAHAYAK for practical healthcare workflows.",
        color: "#a855f7",
    },
    {
        icon: Trophy,
        year: "2026",
        title: "National Winner",
        text: "IDE Bootcamp 2026, AICTE x Ministry of Education.",
        color: "#22c55e",
    },
    {
        icon: Code2,
        year: "Open Source",
        title: "Waggle-MCP",
        text: "Contributor to an MCP project on GitHub and PyPI.",
        color: "#00e5ff",
    },
    {
        icon: Users,
        year: "Remote · 2026",
        title: "GSSoC 2026",
        text: "GirlScript Summer of Code. Actively contributing to open source.",
        color: "#a855f7",
    },
];

function JourneyCard({ item, index }: { item: typeof journey[number]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                delay: index * 0.12,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="compact-card relative p-5 group overflow-hidden cursor-default"
            style={{ borderColor: "transparent" }}
        >
            {/* Glow on hover */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[inherit]"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${item.color}18, transparent 70%)`,
                    border: `1px solid ${item.color}44`,
                }}
            />

            {/* Animated top bar */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: index * 0.12 + 0.3, duration: 0.5 }}
                className="absolute top-0 left-0 h-[2px] w-full origin-left"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
            />

            <div className="mb-5 flex items-center justify-between relative z-10">
                <motion.div
                    animate={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                    style={{ color: item.color }}
                >
                    <item.icon size={24} />
                </motion.div>
                <span className="rounded-full bg-card-hover px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted">
                    {item.year}
                </span>
            </div>

            <h3 className="text-lg font-black text-foreground relative z-10">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted relative z-10">{item.text}</p>

            {/* Bottom pulse dot */}
            <motion.div
                className="absolute bottom-3 right-3 w-2 h-2 rounded-full"
                style={{ background: item.color }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            />
        </motion.div>
    );
}

export default function Experience() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true });

    return (
        <section id="experience" className="section-compact bg-section text-foreground relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
                    style={{ background: "radial-gradient(circle, #00e5ff, #a855f7, transparent)" }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </div>

            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12 text-center"
                >
                    <p className="section-kicker">04. / Journey</p>
                    <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">My Journey</h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={headerInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mx-auto mt-4 h-[2px] w-24 origin-center"
                        style={{ background: "linear-gradient(90deg, #00e5ff, #a855f7)" }}
                    />
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {journey.map((item, index) => (
                        <JourneyCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
