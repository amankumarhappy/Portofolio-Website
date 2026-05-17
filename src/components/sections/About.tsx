"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const stats = [
    { value: "🏆 1", label: "National Win", sub: "IDE Bootcamp 2026" },
    { value: "82+", label: "YouTube Videos", sub: "30K+ lifetime views" },
    { value: "314+", label: "Quora Answers", sub: "30K+ content views" },
    { value: "701+", label: "LinkedIn Followers", sub: "Growing community" },
];

export default function About() {
    return (
        <section id="about" className="py-32 bg-section-alt min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl w-full px-6 relative z-10">
                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
                    className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4">
                    01. / Who Am I?
                </motion.p>

                <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                    className="text-4xl md:text-6xl font-black leading-tight text-foreground mb-10">
                    Aman Kumar Happy —{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-x-0 bottom-2 h-3 bg-neon-blue/30 -skew-x-12 -z-10" />
                        From Buxar, Bihar
                    </span>{" "}
                    to Building for Bharat.
                </motion.h2>

                {/* Concise Intro */}
                <motion.ul variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
                    className="mb-8 space-y-6 text-lg md:text-xl text-muted font-light">
                    <li className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-colors">
                        <span className="text-neon-blue text-2xl mt-0.5">✦</span>
                        <p>
                            <strong className="text-white">Founder & Student:</strong> B.Tech CSE at GEC Buxar. Building <strong className="text-neon-blue">Mediokart</strong> to solve real healthcare problems in India.
                        </p>
                    </li>
                    <li className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-colors">
                        <span className="text-neon-blue text-2xl mt-0.5">✦</span>
                        <p>
                            <strong className="text-white">Current Focus:</strong> Building <strong className="text-neon-blue">SAHAYAK</strong> — a WhatsApp-based health assistant for the elderly. (National Winner, IDE Bootcamp 2026).
                        </p>
                    </li>
                    <li className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-colors">
                        <span className="text-neon-blue text-2xl mt-0.5">✦</span>
                        <p>
                            <strong className="text-white">Beyond Code:</strong> Creating content (YouTube/Quora), and writing about my journey.
                        </p>
                    </li>
                </motion.ul>

                {/* Stats grid */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
                    className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-5 bg-card rounded-2xl border border-card-border hover:border-neon-blue/30 transition-all duration-300 hover:bg-card-hover text-center">
                            <div className="text-neon-blue font-black text-xl md:text-2xl mb-1 leading-tight">{stat.value}</div>
                            <div className="text-foreground text-sm font-semibold mb-0.5">{stat.label}</div>
                            <div className="text-muted text-xs font-mono">{stat.sub}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
