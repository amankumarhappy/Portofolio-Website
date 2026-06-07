"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Briefcase, Code, Rocket, Sparkles, Target } from "lucide-react";

const items = [
    {
        icon: Rocket,
        label: "Building",
        text: "SAHAYAK — WhatsApp health assistant for elderly users",
        highlight: "Active Development",
    },
    {
        icon: BookOpen,
        label: "Learning",
        text: "Python, Web (HTML/CSS/JS), Open Source Contributions",
        highlight: "In Progress",
    },
    {
        icon: Target,
        label: "Shipping Next",
        text: "SAHAYAK beta release, more open source contributions",
        highlight: "Q2 2026",
    },
];

export default function Now() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} id="now" className="section-compact bg-section text-foreground relative overflow-hidden">
            {/* Floating gradient orbs */}
            <motion.div
                style={{ y, opacity }}
                className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-neon-blue/10 blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]), opacity }}
                className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none"
            />

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-neon-blue mb-4">
                        <Sparkles size={14} className="animate-pulse" />
                        Updated June 2026
                    </div>
                    <p className="section-kicker">07. / Right Now</p>
                    <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">What I&apos;m Focused On</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-sm leading-6 text-muted">
                        A live snapshot of my current priorities — what I&apos;m building, learning, and planning to ship.
                    </p>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30, rotateX: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="compact-card group relative overflow-hidden p-6"
                            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-transparent to-neon-purple/0 group-hover:from-neon-blue/5 group-hover:to-neon-purple/5 transition-all duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-card-border bg-card-hover text-neon-blue group-hover:scale-110 group-hover:border-neon-blue/50 transition-all duration-300">
                                        <item.icon size={22} />
                                    </div>
                                    <span className="rounded-full bg-neon-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-neon-blue">
                                        {item.highlight}
                                    </span>
                                </div>

                                <h3 className="text-xl font-black text-foreground mb-2">{item.label}</h3>
                                <p className="text-sm leading-6 text-muted">{item.text}</p>
                            </div>

                            {/* Bottom glow line */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
