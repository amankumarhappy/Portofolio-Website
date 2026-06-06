"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

const links = [
    { icon: Github, label: "GitHub", href: "https://github.com/amankumarhappy" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/amankumarhappy/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/amankumarhappy1" },
    { icon: Mail, label: "Email", href: "mailto:amankumarhappy1@gmail.com" },
];

export default function Contact() {
    return (
        <section id="contact" className="section-compact bg-section text-foreground">
            <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <p className="section-kicker">06. / Contact</p>
                    <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">Let&apos;s Connect</h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-muted">
                        Open for collaborations, open-source work, feedback, and conversations about building useful products.
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                className="compact-card flex items-center gap-3 p-4 text-sm font-bold text-foreground transition-all hover:border-neon-blue hover:text-neon-blue"
                                data-cursor="hover"
                            >
                                <link.icon size={20} />
                                {link.label}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08, duration: 0.55 }}
                    action="https://formspree.io/f/xvgrypek"
                    method="POST"
                    className="compact-card grid gap-4 p-5"
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-muted">
                            Name
                            <input className="field-control" type="text" name="name" placeholder="Your name" required />
                        </label>
                        <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-muted">
                            Email
                            <input className="field-control" type="email" name="email" placeholder="you@example.com" required />
                        </label>
                    </div>

                    <label className="grid gap-2 text-xs font-bold uppercase tracking-widest text-muted">
                        Message
                        <textarea className="field-control min-h-28 resize-none" name="message" placeholder="Tell me what you are building..." required />
                    </label>

                    <button type="submit" className="btn-pill btn-primary w-full" data-cursor="hover">
                        Send Message
                        <Send size={16} />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
