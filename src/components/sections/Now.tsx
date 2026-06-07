"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Rocket, ExternalLink } from "lucide-react";

const nowItems = [
    {
        icon: Zap,
        title: "Building This Month",
        items: [
            "SAHAYAK MVP v2 — Enhanced WhatsApp health flows",
            "Mediokart — Scaling healthtech for rural India",
            "Portfolio enhancements — Real-time project updates",
        ],
    },
    {
        icon: Brain,
        title: "Learning Now",
        items: [
            "Python Web Development — Django & FastAPI",
            "HTML & CSS — Advanced responsive design",
            "JavaScript — Frontend interactivity & frameworks",
            "Open Source Contribution — Best practices & workflows",
        ],
    },
    {
        icon: Rocket,
        title: "Shipping Next",
        items: [
            "SAHAYAK public beta — Healthtech for elderly care",
            "Waggle-MCP v2 — Enhanced MCP protocol features",
            "Content series — 'Building in Public' on YouTube",
        ],
    },
];

export default function Now() {
    return (
        <section id="now" className="section-compact bg-section text-foreground">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
                >
                    <div>
                        <p className="section-kicker">01.5 / Now</p>
                        <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">What's Next</h2>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-muted">
                        A living snapshot of what I'm focused on right now — building, learning, and shipping.
                    </p>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-3">
                    {nowItems.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.45 }}
                            className="now-card compact-card p-6 group"
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-lg border border-card-border bg-card-hover text-neon-blue group-hover:border-neon-blue group-hover:bg-neon-blue group-hover:text-background transition-all duration-300">
                                    <section.icon size={22} />
                                </div>
                                <h3 className="text-lg font-black text-foreground">{section.title}</h3>
                            </div>

                            <ul className="space-y-3">
                                {section.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -8 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 + i * 0.04, duration: 0.35 }}
                                        className="flex items-start gap-2 text-sm leading-6 text-muted group-hover:text-foreground transition-colors"
                                    >
                                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neon-blue" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Waggle MCP LinkedIn Embed */}
                            {section.title === "Shipping Next" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.24, duration: 0.45 }}
                                    className="mt-6 pt-6 border-t border-card-border"
                                >
                                    <p className="text-xs font-bold uppercase tracking-widest text-neon-blue mb-3">Waggle MCP</p>
                                    <div className="waggle-embed-container rounded-lg overflow-hidden border border-card-border bg-card-bg-hover">
                                        <iframe
                                            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7467221111680954369"
                                            height="300"
                                            width="100%"
                                            frameBorder="0"
                                            allowFullScreen
                                            title="Waggle MCP - Open Source Project"
                                            className="waggle-iframe"
                                        />
                                    </div>
                                    <a
                                        href="https://github.com/Abhigyan-Shekhar/Waggle-mcp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-neon-blue hover:text-neon-purple transition-colors"
                                    >
                                        Know more <ExternalLink size={12} />
                                    </a>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
