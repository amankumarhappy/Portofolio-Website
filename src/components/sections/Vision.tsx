"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Vision() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={containerRef} id="vision" className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover" />

            <motion.div style={{ y }} className="relative z-10 px-4">
                <h2 className="text-[12vw] font-black leading-none text-white tracking-tighter mix-blend-difference">
                    VISION
                </h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center mt-12 text-2xl font-light text-gray-300">
                    {["AI", "HEALTHCARE", "INDIA", "IMPACT"].map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="border-b border-neon-blue pb-2"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
