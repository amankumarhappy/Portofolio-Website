"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, MessageCircle, Trophy } from "lucide-react";
import HeroScene from "../3d/HeroScene";
import BuildingTicker from "../ui/BuildingTicker";

export default function Hero() {
    return (
        <>
            <section
                id="hero"
                className="relative w-full text-white flex flex-col items-center justify-center bg-black"
                style={{ minHeight: "100vh", paddingBottom: "96px" }}
            >
                {/* 3D Scene Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <HeroScene />
                </div>

                {/* Dark gradient overlay */}
                <div
                    className="absolute inset-0 z-[1] pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(5,5,5,0.9) 100%)",
                    }}
                />

                {/* India map outline — subtle background motif */}
                <div
                    className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03] flex items-center justify-end pr-12"
                    aria-hidden="true"
                >
                    <svg viewBox="0 0 400 500" width="400" height="500" fill="none" stroke="#00f3ff" strokeWidth="1.5">
                        <path d="M200,20 C160,25 120,40 95,70 C70,100 55,130 50,165 C45,200 55,225 65,250 C75,275 70,295 75,315 C80,335 90,350 105,365 C120,380 130,400 140,420 C150,440 155,460 165,475 C175,490 185,498 200,500 C215,498 225,490 235,475 C245,460 250,440 260,420 C270,400 280,380 295,365 C310,350 320,335 325,315 C330,295 325,275 335,250 C345,225 355,200 350,165 C345,130 330,100 305,70 C280,40 240,25 200,20 Z" />
                        <circle cx="200" cy="240" r="8" fill="#00f3ff" opacity="0.5" />
                        <text x="185" y="265" fill="#00f3ff" fontSize="10" fontFamily="monospace">Buxar</text>
                    </svg>
                </div>

                {/* Main content */}
                <div className="relative z-[10] text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-24">

                    {/* ── National Winner Badge ── */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-yellow-400/50 bg-yellow-400/10 text-yellow-400 font-bold text-sm backdrop-blur-sm shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                            <Trophy size={16} className="shrink-0" />
                            🏆 National Winner — IDE Bootcamp 2026 (AICTE × MoE)
                        </span>
                    </motion.div>

                    {/* ── Profile Photo ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="relative mb-10 flex items-center justify-center"
                        style={{ width: 224, height: 224 }}
                    >
                        <div
                            className="absolute animate-spin"
                            style={{
                                inset: -8,
                                borderRadius: "50%",
                                background: "conic-gradient(from 0deg, #00f3ff, #bc13fe, #00f3ff)",
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
                                background: "radial-gradient(circle, rgba(0,243,255,0.25), transparent 70%)",
                            }}
                        />
                        <div
                            style={{
                                width: 208,
                                height: 208,
                                borderRadius: "50%",
                                overflow: "hidden",
                                position: "relative",
                                border: "3px solid rgba(0, 243, 255, 0.7)",
                                boxShadow: "0 0 30px rgba(0,243,255,0.5), 0 0 60px rgba(0,243,255,0.2)",
                                flexShrink: 0,
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/My photo.png"
                                alt="Aman Kumar Happy — Founder Mediokart, National Winner IDE Bootcamp 2026, B.Tech CSE student from Buxar Bihar"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "50% 12%",
                                    display: "block",
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* ── Text block — concise ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center gap-3"
                    >
                        <p className="text-sm md:text-base font-mono text-neon-blue tracking-widest uppercase">
                            Hello, I'm
                        </p>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-lg leading-none">
                            AMAN KUMAR <br className="md:hidden" /> HAPPY
                        </h1>
                        <p className="text-base md:text-xl text-gray-300 font-light">
                            Student Founder ·{" "}
                            <span className="text-neon-blue font-bold">Building SAHAYAK</span>
                        </p>
                        <p className="text-sm text-gray-500 font-mono max-w-xl mx-auto leading-relaxed">
                            Founder of Mediokart · Building SAHAYAK — a WhatsApp-based health assistant for elderly people
                        </p>
                        <p className="text-xs text-gray-600 font-mono">
                            B.Tech CSE · GEC Buxar, Bihar · NexaForce
                        </p>
                    </motion.div>

                    {/* ── CTA Buttons ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
                    >
                        <a
                            href="#projects"
                            className="btn-pill btn-primary"
                            data-cursor="hover"
                            aria-label="View SAHAYAK project by Aman Kumar Happy"
                            id="cta-view-sahayak"
                        >
                            <MessageCircle size={18} aria-hidden="true" />
                            VIEW SAHAYAK
                        </a>
                        <a
                            href="/Resume.pdf"
                            download="Aman_Kumar_Happy_CV.pdf"
                            className="btn-pill btn-ghost"
                            data-cursor="hover"
                            aria-label="Download Aman Kumar Happy Resume"
                            id="cta-download-resume"
                        >
                            <Download size={18} aria-hidden="true" />
                            DOWNLOAD RESUME
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

            {/* Building in Public ticker */}
            <BuildingTicker />
        </>
    );
}
