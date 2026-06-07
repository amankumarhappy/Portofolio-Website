"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, HeartPulse, Trophy, Users, Youtube } from "lucide-react";

const cards = [
    {
        icon: GraduationCap,
        title: "CSE Student",
        text: "Government Engineering College, Buxar",
    },
    {
        icon: HeartPulse,
        title: "Healthtech Builder",
        text: "SAHAYAK",
    },
    {
        icon: Trophy,
        title: "National Winner",
        text: "AICTE x MoE IDE Bootcamp 2026",
    },
];

const stats = [
    { icon: Trophy, value: 1, suffix: "", label: "National Win", sub: "IDE Bootcamp 2026" },
    { icon: Youtube, value: 82, suffix: "+", label: "YouTube Videos", sub: "30K+ lifetime views" },
    { icon: Users, value: 314, suffix: "+", label: "Quora Answers", sub: "30K+ content views" },
    { icon: Users, value: 750, suffix: "+", label: "LinkedIn Followers", sub: "Growing community" },
];

let audioUnlocked = false;
let audioContext: AudioContext | null = null;

if (typeof window !== "undefined") {
    window.addEventListener(
        "pointerdown",
        () => {
            audioUnlocked = true;
        },
        { once: true }
    );
}

function playCountTick() {
    if (!audioUnlocked) return;

    const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    audioContext = audioContext || new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 620;
    gain.gain.value = 0.018;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.035);
}

function CountStat({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        const duration = 1150;
        const started = performance.now();
        let lastTick = 0;
        let frame = 0;

        const animate = (now: number) => {
            const progress = Math.min((now - started) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(stat.value * eased));

            if (now - lastTick > 145 && progress < 0.96) {
                lastTick = now;
                playCountTick();
            }

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [inView, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            className="compact-card stat-card p-5"
        >
            <stat.icon className="mb-4 text-neon-blue" size={22} />
            <div className="text-3xl font-black text-foreground">
                {count}
                {stat.suffix}
            </div>
            <div className="mt-1 text-sm font-black text-foreground">{stat.label}</div>
            <div className="mt-1 text-xs font-mono text-muted">{stat.sub}</div>
        </motion.div>
    );
}

export default function About() {
    const [photoFlipped, setPhotoFlipped] = useState(false);

    return (
        <section id="about" className="section-compact bg-section-alt text-foreground">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                    >
                        <p className="section-kicker">01. / Who Am I?</p>
                        <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal text-foreground md:text-6xl">
                            Aman Kumar Happy
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted md:text-base">
                            I build practical tools, contribute to open source, and keep my work focused on people who need simple technology.
                        </p>

                        {/* Flippable profile photo */}
                        <motion.div
                            className="mt-6 photo-flip-root"
                            onClick={() => setPhotoFlipped(f => !f)}
                            title="Click to flip"
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="photo-flip-inner"
                                animate={{ rotateY: photoFlipped ? 180 : 0 }}
                                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="photo-flip-face">
                                    <img src="/My photo.png" alt="Aman Kumar Happy" />
                                </div>
                                <div className="photo-flip-face photo-flip-back-face">
                                    <img src="/aman-formal.jpg" alt="Aman Kumar Happy — formal" style={{ objectPosition: "50% 10%" }} />
                                </div>
                            </motion.div>
                        </motion.div>
                        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted opacity-60">Tap photo to flip</p>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.45 }}
                                className="compact-card p-5"
                            >
                                <card.icon className="mb-5 text-neon-blue" size={26} />
                                <h3 className="text-base font-black text-foreground">{card.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <CountStat key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
