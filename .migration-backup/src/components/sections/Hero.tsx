"use client";

import Image from "next/image";
import { MouseEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Sparkles } from "lucide-react";
import HeroScene from "../3d/HeroScene";

const highlights = ["Student Founder", "Open Source Contributor", "Building SAHAYAK"];

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.6,
        },
    }),
};

export default function Hero() {
    const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMove = (event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        event.currentTarget.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
        event.currentTarget.style.setProperty("--my", `${(y + 0.5) * 100}%`);
        setTilt({ rx: y * -10, ry: x * 12 });
    };

    return (
        <section id="hero" className="relative min-h-[92vh] overflow-hidden bg-hero text-hero-foreground">
            <HeroScene />
            <div className="absolute inset-0 z-[1] bg-hero-overlay" />

            <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <motion.div
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-chip px-4 py-2 text-xs font-bold uppercase tracking-widest text-neon-blue"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles size={14} />
                        National Winner - IDE Bootcamp 2026
                    </motion.div>

                    <motion.h1
                        className="text-balance text-5xl font-black leading-[0.95] tracking-normal text-hero-foreground md:text-7xl"
                        style={{ y: scrollY * 0.3 } as any}
                    >
                        <motion.span
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants as any}
                            className="block"
                        >
                            Aman Kumar
                        </motion.span>
                        <motion.span
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants as any}
                            className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent"
                        >
                            Happy
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="mt-5 max-w-xl text-base font-medium leading-relaxed text-hero-muted md:text-lg"
                        style={{ y: scrollY * 0.2 } as any}
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants as any}
                    >
                        CSE student from Bihar building simple healthtech tools for Bharat.
                    </motion.p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {highlights.map((item, i) => (
                            <motion.span
                                key={item}
                                custom={3 + i}
                                initial="hidden"
                                animate="visible"
                                variants={textVariants}
                                className="rounded-full border border-hero-border bg-hero-chip px-3 py-1.5 text-xs font-bold text-hero-foreground hover:border-neon-blue transition-colors"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>

                    <motion.div
                        className="mt-8 flex flex-wrap gap-3"
                        custom={6}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <motion.a
                            href="#projects"
                            className="btn-pill btn-primary"
                            data-cursor="hover"
                            data-magnetic
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={17} />
                            Projects
                        </motion.a>
                        <motion.a
                            href="/Resume.pdf"
                            download="Aman_Kumar_Happy_CV.pdf"
                            className="btn-pill btn-ghost"
                            data-cursor="hover"
                            data-magnetic
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={17} />
                            Resume
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-image-stage"
                    onMouseMove={handleMove}
                    onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
                    style={{
                        transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${scrollY * 0.1}px)`,
                    }}
                >
                    <div className="hero-image-card liquid-hover">
                        <Image
                            src="/aman-healthtech-hero.png"
                            alt="Aman Kumar Happy building healthtech and coding"
                            fill
                            priority
                            sizes="(max-width: 768px) 92vw, 560px"
                            className="object-cover"
                        />
                        <div className="hero-image-shine" />
                    </div>
                    <div className="hero-floating-badge top-6 left-5">Code</div>
                    <div className="hero-floating-badge bottom-7 right-5">Care</div>
                    <div className="hero-depth-line" />
                </motion.div>
            </div>

            <motion.a
                href="#about"
                className="absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-widest text-hero-muted transition-colors hover:text-neon-blue"
                data-cursor="hover"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Scroll
                <ArrowDown size={14} />
            </motion.a>
        </section>
    );
}
