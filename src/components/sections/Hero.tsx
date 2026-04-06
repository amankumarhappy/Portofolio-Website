"use client";

import { motion } from "framer-motion";
import HeroScene from "../3d/HeroScene";
import { ChevronDown, Download, FolderOpen } from "lucide-react";

export default function Hero() {
    return (
        /*
          KEY FIX: min-h-screen (not h-screen) + pb-24
          → Avoids hard cutoff that caused "page jump" on scroll
          → Sections connect naturally
        */
        <section
            className="relative w-full text-white flex flex-col items-center justify-center bg-black"
            style={{ minHeight: "100vh", paddingBottom: "96px" }}
        >
            {/* 3D Scene Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <HeroScene />
            </div>

            {/* Dark gradient overlay — smooth bottom fade into next section */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(5,5,5,0.9) 100%)",
                }}
            />

            {/* Main content */}
            <div className="relative z-[10] text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-24">

                {/* ── Profile Photo (PROPERLY CIRCULAR) ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-10 flex items-center justify-center"
                    style={{ width: 224, height: 224 }}
                >
                    {/*
                      Glow rings — absolutely positioned OUTSIDE the circle,
                      so they don't interfere with overflow:hidden
                    */}
                    <div
                        className="absolute animate-spin"
                        style={{
                            inset: -8,
                            borderRadius: "50%",
                            background:
                                "conic-gradient(from 0deg, #00f3ff, #bc13fe, #00f3ff)",
                            opacity: 0.5,
                            filter: "blur(4px)",
                            animationDuration: "6s",
                        }}
                    />
                    <div
                        className="absolute animate-pulse"
                        style={{
                            inset: -4,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(0,243,255,0.25), transparent 70%)",
                        }}
                    />

                    {/*
                      Circular container — CRITICAL:
                      - width === height (224px)
                      - border-radius: 50%
                      - overflow: hidden
                      - position: relative (so image fills it)
                    */}
                    <div
                        style={{
                            width: 208,
                            height: 208,
                            borderRadius: "50%",
                            overflow: "hidden",
                            position: "relative",
                            border: "3px solid rgba(0, 243, 255, 0.7)",
                            boxShadow:
                                "0 0 30px rgba(0,243,255,0.5), 0 0 60px rgba(0,243,255,0.2)",
                            flexShrink: 0,
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/My photo.png"
                            alt="Aman Kumar Happy — AI Developer & Mediokart Founder"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",      /* CRITICAL: not contain */
                                objectPosition: "50% 12%", /* Show face properly */
                                display: "block",
                            }}
                        />
                    </div>
                </motion.div>

                {/* ── Text block ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-sm md:text-base font-mono text-neon-blue mb-3 tracking-widest uppercase">
                        Hello, I'm
                    </p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-5 text-white drop-shadow-lg leading-none">
                        AMAN KUMAR <br className="md:hidden" /> HAPPY
                    </h1>
                    {/*
                      REPOSITIONED: "Builder solving real problems" — not "aspiring"
                    */}
                    <p className="text-base md:text-xl text-gray-300 font-light mb-2">
                        HealthTech Founder · Building{" "}
                        <span className="text-neon-blue font-bold">Mediokart</span>{" "}
                        with AI + IoT for India
                    </p>
                    <p className="text-sm md:text-base text-gray-400 font-mono mb-10 max-w-2xl mx-auto leading-relaxed">
                        B.Tech CSE · Core Team — Salesforce Community Bihar ·
                        Google Student Ambassador
                    </p>
                </motion.div>

                {/* ── CTA Buttons (PROPER PILL SHAPE) ── */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    {/*
                      btn-pill + btn-primary — from globals.css
                      border-radius: 999px guaranteed perfect pill
                    */}
                    <a
                        href="#projects"
                        className="btn-pill btn-primary"
                        data-cursor="hover"
                        aria-label="Explore Aman's projects"
                    >
                        <FolderOpen size={18} aria-hidden="true" />
                        EXPLORE WORK
                    </a>
                    <a
                        href="/Resume.pdf"
                        download="Aman_Kumar_Happy_CV.pdf"
                        className="btn-pill btn-ghost"
                        data-cursor="hover"
                        aria-label="Download Aman Kumar Happy CV"
                    >
                        <Download size={18} aria-hidden="true" />
                        DOWNLOAD CV
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 z-[10]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                aria-hidden="true"
            >
                <ChevronDown size={32} className="text-neon-blue" />
            </motion.div>
        </section>
    );
}
