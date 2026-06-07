import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    pulse: number;
    pulseSpeed: number;
}

export default function HeroScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;

        const COLORS = {
            node: "rgba(0, 229, 255,",
            line: "rgba(0, 229, 255,",
            purple: "rgba(168, 85, 247,",
            green: "rgba(34, 197, 94,",
        };

        const nodes: Node[] = [];
        const count = Math.min(60, Math.floor((width * height) / 18000));

        for (let i = 0; i < count; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 2.5 + 1,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.02,
            });
        }

        let mouse = { x: -9999, y: -9999 };
        let animId: number;
        let t = 0;

        const handleMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        const handleMouseLeave = () => { mouse = { x: -9999, y: -9999 }; };
        canvas.addEventListener("mousemove", handleMouse);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            t += 0.008;

            // Update nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += n.pulseSpeed;
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;

                // Mouse repulsion
                const dx = n.x - mouse.x;
                const dy = n.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    n.x += (dx / dist) * 0.8;
                    n.y += (dy / dist) * 0.8;
                }
            }

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 140;
                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.35;
                        // Alternate between blue and purple lines
                        const colorStr = (i + j) % 3 === 0 ? COLORS.purple : COLORS.line;
                        ctx.beginPath();
                        ctx.strokeStyle = `${colorStr}${alpha})`;
                        ctx.lineWidth = alpha * 1.5;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            for (const n of nodes) {
                const pulse = 0.7 + 0.3 * Math.sin(n.pulse);
                const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4 * pulse);
                glow.addColorStop(0, `${COLORS.node}0.9)`);
                glow.addColorStop(1, `${COLORS.node}0)`);
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * 4 * pulse, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
                ctx.fillStyle = `${COLORS.node}${0.8 * pulse})`;
                ctx.fill();
            }

            // Floating data packets along lines
            const packetCount = 5;
            for (let p = 0; p < packetCount; p++) {
                const progress = ((t * 0.6 + p / packetCount) % 1);
                const srcIdx = (p * 7) % nodes.length;
                const dstIdx = (p * 13 + 3) % nodes.length;
                const src = nodes[srcIdx];
                const dst = nodes[dstIdx];
                const px = src.x + (dst.x - src.x) * progress;
                const py = src.y + (dst.y - src.y) * progress;
                ctx.beginPath();
                ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `${COLORS.green}0.9)`;
                ctx.fill();
            }

            // Scanning line effect
            const scanY = (Math.sin(t * 0.4) * 0.5 + 0.5) * height;
            const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
            scanGrad.addColorStop(0, "rgba(0,229,255,0)");
            scanGrad.addColorStop(0.5, "rgba(0,229,255,0.04)");
            scanGrad.addColorStop(1, "rgba(0,229,255,0)");
            ctx.fillStyle = scanGrad;
            ctx.fillRect(0, scanY - 30, width, 60);

            animId = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            canvas.removeEventListener("mousemove", handleMouse);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-auto">
            <canvas ref={canvasRef} className="w-full h-full" style={{ opacity: 0.65 }} />
        </div>
    );
}
