"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Sparkle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
}

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const sparkleId = useRef(0);
    const isMobile = useRef(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const trailX = useMotionValue(-100);
    const trailY = useMotionValue(-100);

    const springFast = { damping: 28, stiffness: 900 };
    const springSlow = { damping: 22, stiffness: 220 };

    const cursorXSpring = useSpring(cursorX, springFast);
    const cursorYSpring = useSpring(cursorY, springFast);
    const trailXSpring = useSpring(trailX, springSlow);
    const trailYSpring = useSpring(trailY, springSlow);

    useEffect(() => {
        isMobile.current = window.matchMedia("(hover: none)").matches;
        if (isMobile.current) return;

        const moveCursor = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            cursorX.set(x - 12);
            cursorY.set(y - 12);
            trailX.set(x - 20);
            trailY.set(y - 20);

            // Magnetic effect
            const magnetics = document.querySelectorAll("[data-magnetic]");
            magnetics.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dist = Math.hypot(x - cx, y - cy);
                if (dist < 100) {
                    const angle = Math.atan2(y - cy, x - cx);
                    const pull = (100 - dist) / 100;
                    (el as HTMLElement).style.transform = `translate(${Math.cos(angle) * pull * 14}px, ${Math.sin(angle) * pull * 14}px)`;
                } else {
                    (el as HTMLElement).style.transform = "";
                }
            });

            // Hover detection
            const target = e.target as HTMLElement;
            const isLink = target.closest("a, button, [data-cursor='hover']");
            setIsHovered(!!isLink);
        };

        const handleClick = (e: MouseEvent) => {
            setIsClicking(true);
            setTimeout(() => setIsClicking(false), 200);

            const colors = ["#00e5ff", "#a855f7", "#22c55e", "#fff"];
            const newSparkles: Sparkle[] = Array.from({ length: 7 }, (_, i) => ({
                id: ++sparkleId.current,
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 5 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
            }));
            setSparkles(prev => [...prev, ...newSparkles]);
            setTimeout(() => {
                setSparkles(prev => prev.filter(s => !newSparkles.find(n => n.id === s.id)));
            }, 600);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("click", handleClick);
        };
    }, [cursorX, cursorY, trailX, trailY]);

    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null;

    return (
        <>
            {/* Trail ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-neon-purple"
                style={{
                    width: 40,
                    height: 40,
                    translateX: trailXSpring,
                    translateY: trailYSpring,
                    opacity: isHovered ? 0.6 : 0.3,
                    scale: isHovered ? 1.6 : 1,
                    mixBlendMode: "screen",
                }}
            />

            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
                style={{
                    width: 24,
                    height: 24,
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    mixBlendMode: "difference",
                }}
                animate={{
                    scale: isClicking ? 0.6 : isHovered ? 1.8 : 1,
                    background: isHovered
                        ? "rgba(0,229,255,1)"
                        : "rgba(0,229,255,0.85)",
                }}
                transition={{ duration: 0.15 }}
            />

            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
                style={{
                    width: 4,
                    height: 4,
                    translateX: cursorX,
                    translateY: cursorY,
                    x: 10,
                    y: 10,
                    mixBlendMode: "difference",
                }}
                animate={{ scale: isClicking ? 3 : 1 }}
                transition={{ duration: 0.1 }}
            />

            {/* Click sparkles */}
            {sparkles.map((s) => (
                <motion.div
                    key={s.id}
                    className="fixed pointer-events-none z-[9997] rounded-full"
                    style={{
                        left: s.x,
                        top: s.y,
                        width: s.size,
                        height: s.size,
                        background: s.color,
                        boxShadow: `0 0 6px ${s.color}`,
                    }}
                    initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    animate={{
                        scale: 0,
                        opacity: 0,
                        x: (Math.random() - 0.5) * 60,
                        y: (Math.random() - 0.5) * 60,
                    }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                />
            ))}
        </>
    );
}
