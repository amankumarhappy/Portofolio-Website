"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Youtube, Globe, Send } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/amankumarhappy/", hoverBg: "#0077b5" },
    { icon: Github, label: "GitHub", href: "https://github.com/amankumarhappy", hoverBg: "#ffffff", hoverText: "#000000" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@amankumarhappy", hoverBg: "#ff0000" },
    { icon: Globe, label: "Website", href: "https://amankumarhappy.netlify.app/", hoverBg: "#00f3ff", hoverText: "#000000" },
];

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 left-0 w-80 h-80 bg-neon-blue/8 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-neon-purple/8 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section label */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4"
                >
                    07. / Get In Touch
                </motion.p>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <div>
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                        >
                            Let's{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                                Connect
                            </span>
                            .
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                            className="text-xl text-gray-400 mb-10 max-w-md leading-relaxed"
                        >
                            Always open for collaboration, feedback, or a conversation about AI, healthcare, and the future of India.
                        </motion.p>

                        {/* Email */}
                        <motion.a
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={3}
                            href="mailto:amankumarhappy1@gmail.com"
                            className="inline-flex items-center gap-4 text-xl text-gray-300 hover:text-neon-blue transition-colors mb-10 group"
                        >
                            <div className="p-3 bg-white/10 rounded-full group-hover:bg-neon-blue/20 transition-colors">
                                <Mail size={22} />
                            </div>
                            amankumarhappy1@gmail.com
                        </motion.a>

                        {/* Social icons */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={4}
                            className="flex gap-4 flex-wrap"
                        >
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={s.label}
                                    className="p-4 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition-all duration-300"
                                    style={{}}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = s.hoverBg;
                                        (e.currentTarget as HTMLElement).style.color = s.hoverText ?? "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = "";
                                        (e.currentTarget as HTMLElement).style.color = "";
                                    }}
                                >
                                    <s.icon size={22} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Contact form */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                        className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
                    >
                        <form className="space-y-5">
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-5 focus:border-neon-blue focus:outline-none transition-colors text-white placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-5 focus:border-neon-blue focus:outline-none transition-colors text-white placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-5 focus:border-neon-blue focus:outline-none transition-colors text-white resize-none placeholder-gray-600"
                                    placeholder="Let's build something meaningful..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-neon-blue text-black font-bold tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                            >
                                SEND MESSAGE <Send size={17} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
