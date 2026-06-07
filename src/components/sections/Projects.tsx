"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, HeartPulse, Package, Stethoscope } from "lucide-react";

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
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-compact bg-section-alt text-foreground">
            <div className="mx-auto max-w-6xl px-6">
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
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.45 }}
                            className="compact-card group overflow-hidden p-6"
                        >
                            <div className="mb-6 flex items-start justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-card-border bg-card-hover text-neon-blue">
                                        <project.icon size={25} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-foreground">{project.title}</h3>
                                        <p className="text-xs font-bold uppercase tracking-widest text-neon-blue">{project.label}</p>
                                    </div>
                                </div>
                                {project.title === "SAHAYAK" && <HeartPulse className="hidden text-neon-purple md:block" size={24} />}
                            </div>

                            <p className="min-h-14 text-sm leading-6 text-muted">{project.text}</p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.chips.map((chip) => (
                                    <span key={chip} className="rounded-full border border-card-border bg-card-hover px-3 py-1 text-xs font-bold text-foreground">
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
                                        className="inline-flex items-center gap-2 rounded-full border border-card-border px-4 py-2 text-sm font-bold text-foreground transition-all hover:border-neon-blue hover:text-neon-blue"
                                        data-cursor="hover"
                                    >
                                        <link.icon size={15} />
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
