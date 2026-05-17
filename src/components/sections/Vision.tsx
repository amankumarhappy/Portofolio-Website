"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const keywords = ["AI", "HEALTHCARE", "INDIA", "IMPACT", "RURAL"];

export default function Vision() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

    return (
        <section ref={containerRef} id="vision" className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center py-24">
            {/* Noise texture overlay */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover" />

            {/* Gradient blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[160px] pointer-events-none" />

            <motion.div style={{ y, opacity }} className="relative z-10 px-4 max-w-5xl mx-auto">
                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-8"
                >
                    07. / What I'm Building Toward
                </motion.p>

                <h2 className="text-[12vw] md:text-[10vw] font-black leading-none text-white tracking-tighter mix-blend-difference mb-12">
                    VISION
                </h2>

                {/* Mission statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-12 max-w-3xl mx-auto"
                >
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6">
                        I'm building{" "}
                        <span className="text-neon-blue font-bold">Mediokart</span>{" "}
                        and{" "}
                        <span className="text-neon-blue font-bold">SAHAYAK</span>{" "}
                        with one goal in mind:
                    </p>
                    <p className="text-2xl md:text-3xl text-white font-black leading-tight">
                        Make quality healthcare accessible to{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                            rural and elderly India
                        </span>{" "}
                        — the India that the internet forgot.
                    </p>
                </motion.div>

                {/* Mission description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
                >
                    SAHAYAK works on WhatsApp because that's where people already are. No app download. No login. Just a message — and MBBS-reviewed health guidance in Hindi and Bhojpuri, instantly. That's what accessible technology looks like.
                </motion.p>

                {/* Keywords */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center flex-wrap">
                    {keywords.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-black text-gray-300 border-b-2 border-neon-blue pb-2 hover:text-neon-blue transition-colors duration-300 cursor-default"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
