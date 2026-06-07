"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, HeartPulse, Package, Stethoscope } from "lucide-react";
import { useState, MouseEvent } from "react";

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
        hasEmbed: true,
        embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7467221111680954369",
    },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
    const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ rx: y * -8, ry: x * 8 });
    };

    const handleMouseLeave = () => {
        setTilt({ rx: 0, ry: 0 });
    };

    return (
        <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
            className="compact-card group overflow-hidden p-6 transition-transform duration-300"
        >
            <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-card-border bg-card-hover text-neon-blue group-hover:border-neon-blue group-hover:bg-neon-blue group-hover:text-background transition-all duration-300">
                        <project.icon size={25} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-foreground">{project.title}</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-neon-blue">{project.label}</p>
                    </div>
                </div>
                {project.title === "SAHAYAK" && (
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="hidden text-neon-purple md:block"
                    >
                        <HeartPulse size={24} />
                    </motion.div>
                )}
            </div>

            <p className="min-h-14 text-sm leading-6 text-muted">{project.text}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.chips.map((chip) => (
                    <motion.span
                        key={chip}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-card-border bg-card-hover px-3 py-1 text-xs font-bold text-foreground hover:border-neon-blue transition-colors"
                    >
                        {chip}
                    </motion.span>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-full border border-card-border px-4 py-2 text-sm font-bold text-foreground transition-all hover:border-neon-blue hover:text-neon-blue"
                        data-cursor="hover"
                    >
                        <link.icon size={15} />
                        {link.label}
                    </motion.a>
                ))}
            </div>

            {project.hasEmbed && (
                <div className="mt-5 pt-5 border-t border-card-border">
                    <a
                        href="https://github.com/Abhigyan-Shekhar/Waggle-mcp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-card-border px-3 py-1.5 text-xs font-bold text-neon-blue hover:border-neon-blue hover:bg-card-hover transition-all"
                    >
                        Know more about this project <ExternalLink size={11} />
                    </a>
                </div>
            )}
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section-compact bg-section-alt text-foreground relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10 opacity-10">
                <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            </div>

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
