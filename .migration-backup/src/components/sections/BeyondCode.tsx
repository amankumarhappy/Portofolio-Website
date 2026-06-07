"use client";

import { motion } from "framer-motion";
import { BookOpen, MapPin, PenLine, Users } from "lucide-react";

const items = [
    { icon: Users, label: "Community" },
    { icon: BookOpen, label: "Content" },
    { icon: PenLine, label: "Writing" },
    { icon: MapPin, label: "Bihar Startups" },
];

export default function BeyondCode() {
    return (
        <section id="beyond" className="section-compact bg-section-alt text-foreground">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto mb-8 max-w-2xl text-center"
                >
                    <p className="section-kicker">05. / Beyond Building</p>
                    <h2 className="mt-3 text-4xl font-black text-foreground md:text-5xl">More Than Code</h2>
                    <p className="mt-4 text-sm leading-6 text-muted">
                        Community, content, writing, and a strong interest in Bihar&apos;s startup future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06, duration: 0.4 }}
                            className="compact-card flex min-h-28 flex-col items-center justify-center gap-3 p-5 text-center"
                        >
                            <item.icon size={26} className="text-neon-blue" />
                            <span className="text-sm font-black text-foreground">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
