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
            {/* Background blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl w-full px-6 relative z-10">
                {/* Label */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4"
                >
                    01. / Who Am I?
                </motion.p>

                {/* Headline */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="text-4xl md:text-6xl font-black leading-tight text-foreground mb-10"
                >
                    Aman Kumar Happy —{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-x-0 bottom-2 h-3 bg-neon-blue/30 -skew-x-12 -z-10" />
                        From Buxar, Bihar
                    </span>{" "}
                    to Building for Bharat.
                </motion.h2>

                {/* Body text — 3 paragraphs */}
                <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed font-light">
                    {[
                        <>
                            I'm <span className="text-foreground font-semibold">Aman Kumar Happy</span> — a first-year B.Tech CSE student at Government Engineering College, Buxar (Bihar Engineering University, batch 2025–2029) and Founder of{" "}
                            <span className="text-neon-blue font-bold">Mediokart</span>. I'm from Buxar, Bihar — a small city most people haven't heard of, which is exactly why I'm building from here, not from a metro.
                        </>,
                        <>
                            My flagship product is <span className="text-neon-blue font-bold">SAHAYAK</span> — a WhatsApp-based digital health assistant for elderly and rural users across India. No app download. No account creation. Just WhatsApp — the one platform every Indian already knows — delivering MBBS-reviewed first-aid guidance in{" "}
                            <span className="text-foreground font-semibold">Hindi and Bhojpuri</span>. In April 2026, my team <span className="text-neon-blue font-bold">NexaForce</span> won Phase II of the national <span className="text-foreground font-semibold">AICTE-MoE IDE Bootcamp 2026</span> at NIT Patna — competing against 40+ teams from colleges across India.
                        </>,
                        <>
                            Beyond building, I run <span className="text-foreground font-semibold">Pahal</span> — every Monday I teach free Computer Science to Class 8–9 Hindi-medium school students at GEC Buxar, because if tech is going to matter in Bihar, it has to start in classrooms. I'm also a <span className="text-foreground font-semibold">Salesforce Community Bihar Core Team Member</span>, helping build Bihar's tech ecosystem, and a <span className="text-neon-purple">Google Student Ambassador</span> alumni. Since 2020, I've created <span className="text-neon-purple">82+ YouTube videos</span>, written <span className="text-neon-purple">314+ Quora answers</span> (30K+ views), and published across Medium, Substack, and Dev.to. My goal is singular: build Mediokart into a healthcare platform that actually matters for the people in Bharat — not just metro India.
                        </>,
                    ].map((para, i) => (
                        <motion.p
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 2}
                        >
                            {para}
                        </motion.p>
                    ))}
                </div>

                {/* Stats grid */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={6}
                    className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="p-5 bg-card rounded-2xl border border-card-border hover:border-neon-blue/30 transition-all duration-300 hover:bg-card-hover text-center"
                        >
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
