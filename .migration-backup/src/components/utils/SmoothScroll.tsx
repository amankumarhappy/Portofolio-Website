"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.0,          // Faster feel (was 1.5 in old config)
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease-out
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.2,   // Slightly faster mouse wheel response
            touchMultiplier: 2.0,   // Fast responsive touch on mobile
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Expose lenis globally so ScrollToTop and progress bar can use it
        (window as any).__lenis = lenis;

        return () => {
            lenis.destroy();
            (window as any).__lenis = null;
        };
    }, []);

    return <>{children}</>;
}
