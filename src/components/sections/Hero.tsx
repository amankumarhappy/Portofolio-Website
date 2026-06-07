"use client";

import Image from "next/image";
import { MouseEvent, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Download, Github, HeartPulse, Package, Sparkles, Zap } from "lucide-react";
import HeroScene from "../3d/HeroScene";

const highlights = ["Student Founder", "Open Source Contributor", "Building SAHAYAK"];

const dashboardItems = [
    { icon: HeartPulse, label: "Active Project", value: "SAHAYAK", color: "text-neon-blue" },
    { icon: Zap, label: "Focus", value: "Healthtech", color: "text-neon-purple" },
    { icon: Package, label: "Open Source", value: "Waggle-MCP", color: "text-emerald-400" },
];

function MagneticButton({ children, href, className, download, onClick }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    download?: string;
    onClick?: () => void;
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);

        // Set glow position
        const glowX = ((e.clientX - rect.left) / rect.width) * 100;
        const glowY = ((e.clientY - rect.top) / rect.height) * 100;
        ref.current.style.setProperty("--glow-x", `${glowX}%`);
        ref.current.style.setProperty("--glow-y", `${glowY}%`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            download={download}
            onClick={onClick}
            className={className}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="hover"
        >
            {children}
        </motion.a>
    );
}

function FounderDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="compact-card mt-8 p-4 relative overflow-hidden"
        >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none" />

            <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted">Live Dashboard</span>
                <span className="text-[10px] text-muted ml-auto">Building in public</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {dashboardItems.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="text-center p-2 rounded-lg bg-card-bg/50"
                    >
                        <item.icon size={14} className={`mx-auto mb-1 ${item.color}`} />
                        <div className="text-[10px] uppercase tracking-wider text-muted mb-0.5">{item.label}</div>
                        <div className="text-xs font-black text-foreground truncate">{item.value}</div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom status line */}
            <div className="mt-3 pt-3 border-t border-card-border flex items-center justify-between">
                <span className="text-[10px] text-muted">Status</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-neon-blue">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                    Building
                </span>
            </div>
        </motion.div>
    );
}

export default function Hero() {
    const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const handleMove = (event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        event.currentTarget.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
        event.currentTarget.style.setProperty("--my", `${(y + 0.5) * 100}%`);
        setTilt({ rx: y * -10, ry: x * 12 });
    };

    return (
        <section ref={containerRef} id="hero" className="relative min-h-[92vh] overflow-hidden bg-hero text-hero-foreground">
            {/* Animated mesh background */}
            <div className="absolute inset-0 z-0">
                {/* Gradient orbs with parallax */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-neon-blue/15 blur-[150px] pointer-events-none"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-neon-purple/15 blur-[130px] pointer-events-none"
                />
                <motion.div
                    style={{ y: y3 }}
                    className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgbnVtT2N0YXZlcz0iMyIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] pointer-events-none" />
            </div>

            {/* 3D scene */}
            <HeroScene />

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-[1] bg-hero-overlay" />

            {/* Animated spotlight that follows cursor */}
            <motion.div
                style={{ opacity }}
                className="absolute inset-0 z-[2] pointer-events-none"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 229, 255, 0.06), transparent 40%)",
                    }}
                />
            </motion.div>

            <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-chip px-4 py-2 text-xs font-bold uppercase tracking-widest text-neon-blue relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-transparent to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Sparkles size={14} className="animate-pulse relative z-10" />
                        <span className="relative z-10">National Winner - IDE Bootcamp 2026</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-balance text-5xl font-black leading-[0.95] tracking-normal text-hero-foreground md:text-7xl"
                    >
                        Aman Kumar Happy
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-5 max-w-xl text-base font-medium leading-relaxed text-hero-muted md:text-lg"
                    >
                        CSE student from Bihar building simple healthtech tools for Bharat.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-6 flex flex-wrap gap-2"
                    >
                        {highlights.map((item, index) => (
                            <motion.span
                                key={item}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.55 + index * 0.1 }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 229, 255, 0.1)" }}
                                className="rounded-full border border-hero-border bg-hero-chip px-3 py-1.5 text-xs font-bold text-hero-foreground cursor-default transition-colors duration-300"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <MagneticButton
                            href="#projects"
                            className="btn-pill btn-primary relative overflow-hidden"
                        >
                            <div className="btn-magnetic-glow" />
                            <Github size={17} className="relative z-10" />
                            <span className="relative z-10">Projects</span>
                        </MagneticButton>
                        <MagneticButton
                            href="/Resume.pdf"
                            download="Aman_Kumar_Happy_CV.pdf"
                            className="btn-pill btn-ghost relative overflow-hidden"
                        >
                            <div className="btn-magnetic-glow" />
                            <Download size={17} className="relative z-10" />
                            <span className="relative z-10">Resume</span>
                        </MagneticButton>
                    </motion.div>

                    {/* Founder Dashboard */}
                    <FounderDashboard />
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

                    {/* Floating gradient orbs on the image */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-neon-blue/20 blur-2xl pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-neon-purple/20 blur-2xl pointer-events-none"
                    />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-widest text-hero-muted transition-colors hover:text-neon-blue"
                data-cursor="hover"
            >
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex items-center gap-2"
                >
                    Scroll
                    <ArrowDown size={14} />
                </motion.div>
            </motion.a>
        </section>
    );
}
