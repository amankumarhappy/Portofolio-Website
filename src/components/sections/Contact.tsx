"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, ExternalLink } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

// All 15 social links with emoji icons (no external icon deps needed)
const socials = [
    { emoji: "🐙", label: "GitHub", href: "https://github.com/amankumarhappy", color: "#ffffff", bg: "#333" },
    { emoji: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/amankumarhappy/", color: "#ffffff", bg: "#0077b5" },
    { emoji: "𝕏", label: "X (Twitter)", href: "https://x.com/AmanKumarHappy1", color: "#ffffff", bg: "#000000" },
    { emoji: "▶️", label: "YouTube", href: "https://youtube.com/amankumarhappy", color: "#ffffff", bg: "#ff0000" },
    { emoji: "📸", label: "Instagram", href: "https://www.instagram.com/amankumarhappy1", color: "#ffffff", bg: "#e1306c" },
    { emoji: "✍️", label: "Medium", href: "https://medium.com/@amankumarhappy", color: "#ffffff", bg: "#000000" },
    { emoji: "📨", label: "Substack", href: "https://substack.com/@amankumarhappy", color: "#ffffff", bg: "#ff6719" },
    { emoji: "💻", label: "Dev.to", href: "https://dev.to/amankumarhappy", color: "#ffffff", bg: "#0a0a0a" },
    { emoji: "🔶", label: "Stack Overflow", href: "https://stackoverflow.com/users/29753353/aman-kumar-happy", color: "#ffffff", bg: "#f48024" },
    { emoji: "🚀", label: "Product Hunt", href: "https://www.producthunt.com/@amankumarhappy", color: "#ffffff", bg: "#da552f" },
    { emoji: "🤖", label: "Reddit", href: "https://www.reddit.com/user/amankumarhappy1/", color: "#ffffff", bg: "#ff4500" },
    { emoji: "📘", label: "Facebook", href: "https://www.facebook.com/Amankumarhappy1", color: "#ffffff", bg: "#1877f2" },
    { emoji: "📝", label: "Blogspot", href: "https://amankumarhappy.blogspot.com/", color: "#ffffff", bg: "#ff5722" },
    { emoji: "📊", label: "Medial", href: "https://medial.app/user/aman-kumar-happy-1970b0552cde4", color: "#ffffff", bg: "#7c3aed" },
    { emoji: "🏥", label: "Mediokart", href: "https://www.mediokart.in", color: "#ffffff", bg: "#00a676" },
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
                    08. / Get In Touch
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
                            Let&apos;s{" "}
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
                            Always open for collaboration, feedback, partnership — or just a conversation about building things that matter for Bharat.
                        </motion.p>

                        {/* Email */}
                        <motion.a
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={3}
                            href="mailto:amankumarhappy1@gmail.com"
                            className="inline-flex items-center gap-4 text-xl text-gray-300 hover:text-neon-blue transition-colors mb-5 group"
                        >
                            <div className="p-3 bg-white/10 rounded-full group-hover:bg-neon-blue/20 transition-colors">
                                <Mail size={22} />
                            </div>
                            amankumarhappy1@gmail.com
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={3.5}
                            href="tel:+919153737258"
                            className="flex items-center gap-4 text-xl text-gray-300 hover:text-neon-blue transition-colors mb-10 group"
                        >
                            <div className="p-3 bg-white/10 rounded-full group-hover:bg-neon-blue/20 transition-colors">
                                <Phone size={22} />
                            </div>
                            +91-9153737258
                        </motion.a>

                        {/* Social icons — all 15 */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={4}
                        >
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-5">Find me everywhere</p>
                            <div className="flex gap-3 flex-wrap">
                                {socials.map((s, i) => (
                                    <a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={s.label}
                                        aria-label={s.label}
                                        className="group relative flex flex-col items-center gap-1"
                                    >
                                        <span
                                            className="w-11 h-11 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 text-lg hover:scale-110 transition-all duration-300 hover:border-white/30"
                                            style={{}}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLElement).style.background = s.bg;
                                                (e.currentTarget as HTMLElement).style.borderColor = s.bg;
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLElement).style.background = "";
                                                (e.currentTarget as HTMLElement).style.borderColor = "";
                                            }}
                                        >
                                            {s.emoji}
                                        </span>
                                        <span className="text-[9px] font-mono text-gray-600 group-hover:text-gray-400 transition-colors text-center leading-tight max-w-[44px]">
                                            {s.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
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
                        <form action="https://formspree.io/f/xvgrypek" method="POST" className="space-y-5">
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-5 focus:border-neon-blue focus:outline-none transition-colors text-white placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-5 focus:border-neon-blue focus:outline-none transition-colors text-white placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
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

                        {/* Quick links */}
                        <div className="mt-6 pt-6 border-t border-white/5">
                            <p className="text-xs font-mono text-gray-600 mb-3 uppercase tracking-widest">Quick Links</p>
                            <div className="flex flex-wrap gap-2">
                                <a href="https://www.mediokart.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-neon-blue hover:underline">
                                    <ExternalLink size={10} /> mediokart.in
                                </a>
                                <span className="text-gray-600">·</span>
                                <a href="https://www.linkedin.com/in/amankumarhappy/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-neon-blue hover:underline">
                                    <ExternalLink size={10} /> LinkedIn
                                </a>
                                <span className="text-gray-600">·</span>
                                <a href="https://github.com/amankumarhappy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-neon-blue hover:underline">
                                    <ExternalLink size={10} /> GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
