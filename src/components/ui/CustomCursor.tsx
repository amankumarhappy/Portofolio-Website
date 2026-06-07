"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isMagnetic, setIsMagnetic] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const spotlightX = useMotionValue(-100);
    const spotlightY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const spotlightXSpring = useSpring(spotlightX, { damping: 15, stiffness: 300 });
    const spotlightYSpring = useSpring(spotlightY, { damping: 15, stiffness: 300 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            cursorX.set(x - 16);
            cursorY.set(y - 16);
            spotlightX.set(x);
            spotlightY.set(y);

            // Magnetic button behavior
            const buttons = document.querySelectorAll("[data-magnetic]");
            buttons.forEach((button) => {
                const rect = button.getBoundingClientRect();
                const distance = Math.hypot(
                    x - (rect.left + rect.width / 2),
                    y - (rect.top + rect.height / 2)
                );

                if (distance < 100) {
                    setIsMagnetic(true);
                    const angle = Math.atan2(
                        y - (rect.top + rect.height / 2),
                        x - (rect.left + rect.width / 2)
                    );
                    const pull = (100 - distance) / 100;
                    const moveX = Math.cos(angle) * pull * 15;
                    const moveY = Math.sin(angle) * pull * 15;
                    (button as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    (button as HTMLElement).style.transform = "translate(0, 0)";
                    setIsMagnetic(false);
                }
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.dataset.cursor === "hover"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, spotlightX, spotlightY]);

    return (
        <>
            {/* Cursor Spotlight Effect */}
            <motion.div
                className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-40 mix-blend-screen"
                style={{
                    translateX: spotlightXSpring,
                    translateY: spotlightYSpring,
                    x: -192,
                    y: -192,
                }}
            >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-neon-blue via-transparent to-neon-purple opacity-0 group-hover:opacity-20 blur-3xl" />
            </motion.div>

            {/* Main Cursor Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-neon-blue rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.8 : 0.6,
                }}
            />

            {/* Inner Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-neon-blue rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: 12,
                    y: 12,
                    scale: isHovered ? 1.2 : 1,
                }}
            />

            {/* Glow Trail Effect */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 border border-neon-purple rounded-full pointer-events-none z-40 mix-blend-screen opacity-40"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: -8,
                    y: -8,
                    scale: isHovered ? 2 : 1,
                }}
            />
        </>
    );
}
