"use client";

import Image from "next/image";
import { MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Sparkles } from "lucide-react";
import HeroScene from "../3d/HeroScene";

const highlights = ["Student Founder", "Open Source Contributor", "Building SAHAYAK"];

export default function Hero() {
    const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

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
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-chip px-4 py-2 text-xs font-bold uppercase tracking-widest text-neon-blue">
                        <Sparkles size={14} />
                        National Winner - IDE Bootcamp 2026
                    </div>

                    <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-normal text-hero-foreground md:text-7xl">
                        Aman Kumar Happy
                    </h1>

                    <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-hero-muted md:text-lg">
                        CSE student from Bihar building simple healthtech tools for Bharat.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {highlights.map((item) => (
                            <span key={item} className="rounded-full border border-hero-border bg-hero-chip px-3 py-1.5 text-xs font-bold text-hero-foreground">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="#projects" className="btn-pill btn-primary" data-cursor="hover">
                            <Github size={17} />
                            Projects
                        </a>
                        <a href="/Resume.pdf" download="Aman_Kumar_Happy_CV.pdf" className="btn-pill btn-ghost" data-cursor="hover">
                            <Download size={17} />
                            Resume
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-image-stage"
                    onMouseMove={handleMove}
                    onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
                    style={{ transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
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

            <a
                href="#about"
                className="absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-widest text-hero-muted transition-colors hover:text-neon-blue"
                data-cursor="hover"
            >
                Scroll
                <ArrowDown size={14} />
            </a>
        </section>
    );
}
