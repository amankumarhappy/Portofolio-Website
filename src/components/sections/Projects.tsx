"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, HeartPulse, Package, Stethoscope, ChevronDown } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "SAHAYAK",
        label: "Flagship Project",
        icon: Stethoscope,
        text: "WhatsApp health assistant for elderly people: reminders, prescription flow, and caretaker support.",
        chips: ["Healthtech", "WhatsApp-first", "Prototype"],
        links: [
            { label: "Mediokart", href: "https://www.mediokart.in", icon: ExternalLink },
            { label: "GitHub", href: "https://github.com/amankumarhappy/sahayakbot", icon: Github },
        ],
    },
    {
        title: "Waggle-MCP",
        label: "Open Source Contributor",
        icon: Package,
        text: "Contributed to an MCP project published on PyPI and maintained in the open.",
        chips: ["Open Source", "MCP", "PyPI"],
        links: [
            { label: "GitHub", href: "https://github.com/Abhigyan-Shekhar/Waggle-mcp", icon: Github },
            { label: "PyPI", href: "https://pypi.org/project/waggle-mcp/", icon: ExternalLink },
        ],
        linkedInEmbed: "urn:li:ugcPost:7467221111680954369",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [showEmbed, setShowEmbed] = useState(false);
    const hasEmbed = !!project.linkedInEmbed;

    return (
        <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="compact-card group overflow-hidden p-6"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
            {/* 3D hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/5 group-hover:via-transparent group-hover:to-neon-purple/5 transition-all duration-500 pointer-events-none rounded-lg" />

            <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-card-border bg-card-hover text-neon-blue group-hover:scale-110 group-hover:border-neon-blue/50 transition-all duration-300">
                        <project.icon size={25} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-foreground group-hover:text-neon-blue transition-colors duration-300">{project.title}</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-neon-blue">{project.label}</p>
                    </div>
                </div>
                {project.title === "SAHAYAK" && <HeartPulse className="hidden text-neon-purple md:block" size={24} />}
            </div>

            <p className="min-h-14 text-sm leading-6 text-muted">{project.text}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.chips.map((chip) => (
                    <span key={chip} className="rounded-full border border-card-border bg-card-hover px-3 py-1 text-xs font-bold text-foreground hover:border-neon-blue/50 transition-colors duration-300">
                        {chip}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-card-border px-4 py-2 text-sm font-bold text-foreground transition-all hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                        data-cursor="hover"
                    >
                        <link.icon size={15} />
                        {link.label}
                    </a>
                ))}
            </div>

            {/* LinkedIn embed toggle for Waggle-MCP */}
            {hasEmbed && (
                <div className="mt-5">
                    <button
                        onClick={() => setShowEmbed(!showEmbed)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neon-blue hover:text-neon-purple transition-colors duration-300"
                    >
                        <ChevronDown size={14} className={`transition-transform duration-300 ${showEmbed ? "rotate-180" : ""}`} />
                        {showEmbed ? "Hide Details" : "Know More About This Project"}
                    </button>

                    <AnimatePresence>
                        {showEmbed && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="rounded-lg border border-card-border bg-card-bg overflow-hidden">
                                    <iframe
                                        src={`https://www.linkedin.com/embed/feed/update/${project.linkedInEmbed}`}
                                        height="400"
                                        width="100%"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="Embedded LinkedIn post about Waggle-MCP"
                                        className="w-full max-w-full"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section-compact bg-section-alt text-foreground relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-neon-blue/8 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-neon-purple/8 blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
                >
                    <div>
                        <p className="section-kicker">03. / Projects</p>
                        <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">Featured Work</h2>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-muted">
                        Projects that showcase my learning journey and contribution to open source.
                    </p>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
