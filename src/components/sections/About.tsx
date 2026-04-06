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

export default function About() {
    return (
        <section id="about" className="py-32 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
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
                    className="text-4xl md:text-6xl font-black leading-tight text-white mb-10"
                >
                    From{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-x-0 bottom-2 h-3 bg-neon-blue/30 -skew-x-12 -z-10" />
                        Buxar, Bihar
                    </span>{" "}
                    to Building the Future.
                </motion.h2>

                {/* Body text */}
                <div className="space-y-5 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                    {[
                        <>
                            I'm <span className="text-white font-semibold">Aman Kumar Happy</span> — a B.Tech CSE student, solo founder, and someone who's still learning, growing, and figuring things out every day. I'm not an expert — I'm a{" "}
                            <span className="italic text-gray-300">curious beginner who loves to build</span>, and I believe that's a superpower in itself.
                        </>,
                        <>
                            I'm the Founder of <span className="text-neon-blue font-bold">Mediokart</span>, building India's smart healthcare ecosystem. My days are spent prototyping{" "}
                            <span className="text-white">AuraBox</span> (our flagship IoT smart first-aid kit), experimenting with{" "}
                            <span className="text-white">Mediobot</span> (AI health chatbot), and slowly learning full-stack dev alongside product strategy.
                        </>,
                        <>
                            I'm currently a <span className="text-neon-blue font-bold">Core Team Member of Salesforce Community Bihar</span> — connecting with builders and contributing to the tech ecosystem in my state.
                        </>,
                        <>
                            I sometimes write on <span className="text-neon-purple">Quora, Medium, and Blogspot</span> — mostly when I feel like it; it depends on my mood. I wrote more actively during my intermediate years, and it's not very consistent now. I also share my journey on{" "}
                            <span className="text-white">YouTube</span> in an inconsistent way — no fixed schedule, just whenever I feel like documenting something. I've gathered 30,000+ views and 314+ answers across platforms, but I'm still very much a work in progress.
                        </>,
                        <>
                            I'm a <span className="text-white">Google Student Ambassador</span> alumni and have been recognized by Techfest IIT Bombay and Edunet Foundation. Every experience has been a lesson, and I'm grateful for each one — even the ones I fumbled through.
                        </>,
                        <>
                            I believe in <span className="text-neon-purple">real tech, real usability, and real impact</span>. Whether it's coding, designing UI/UX, or just learning something new — I approach every challenge with a founder's mindset and a beginner's humility.
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
                    custom={8}
                    className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: "Founded", value: "Mediokart" },
                        { label: "Quora Views", value: "30K+" },
                        { label: "YT Videos", value: "82+" },
                        { label: "Certifications", value: "10+" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:bg-white/10 text-center"
                        >
                            <div className="text-neon-blue font-black text-2xl mb-1">{stat.value}</div>
                            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
