"use client";

import { motion } from "framer-motion";
import { ExternalLink, PenLine, BookOpen, MessageCircle, Code, Radio, RefreshCw, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

interface Article {
    title: string;
    url: string;
    date: string;
    platform: string;
    platformColor: string;
    summary?: string;
}

const platformMeta = [
    {
        name: "Medium",
        desc: "10+ articles on technology, healthcare, startups, and personal development.",
        label: "10+ Articles",
        icon: PenLine,
        color: "#00f3ff",
        glow: "rgba(0,243,255,0.15)",
        href: "https://medium.com/@amankumarhappy",
    },
    {
        name: "Quora",
        desc: "314+ answers on tech, startups, and personal growth. 30,000+ content views.",
        label: "30K+ Views · 314+ Answers",
        icon: MessageCircle,
        color: "#b92b27",
        glow: "rgba(185,43,39,0.15)",
        href: "https://www.quora.com/profile/Aman-Kumar-Happy",
    },
    {
        name: "Substack",
        desc: "Newsletter on building from Bihar — health, tech, and what it means to be a founder from a small city.",
        label: "Newsletter",
        icon: Radio,
        color: "#ff6719",
        glow: "rgba(255,103,25,0.15)",
        href: "https://substack.com/@amankumarhappy",
    },
    {
        name: "Dev.to",
        desc: "Technical articles on Python, APIs, WhatsApp bots, and developer learnings from shipping real products.",
        label: "Dev Articles",
        icon: Code,
        color: "#0aff0a",
        glow: "rgba(10,255,10,0.12)",
        href: "https://dev.to/amankumarhappy",
    },
    {
        name: "Blogspot",
        desc: "20+ original posts on technology, self-improvement, and society. My earliest writing home.",
        label: "20+ Posts",
        icon: BookOpen,
        color: "#a855f7",
        glow: "rgba(168,85,247,0.15)",
        href: "https://amankumarhappy.blogspot.com/",
    },
];

function ArticleCard({ article }: { article: Article }) {
    return (
        <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 p-4 rounded-2xl border border-white/5 bg-white/2 hover:border-white/15 hover:bg-white/5 transition-all duration-300"
        >
            <div className="flex items-center gap-2">
                <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                    style={{ color: article.platformColor, borderColor: `${article.platformColor}40`, background: `${article.platformColor}10` }}
                >
                    {article.platform}
                </span>
                {article.date && (
                    <span className="text-[10px] text-gray-600 font-mono flex items-center gap-1">
                        <Calendar size={10} /> {article.date}
                    </span>
                )}
            </div>
            <h4 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors leading-snug line-clamp-2">
                {article.title}
            </h4>
            {article.summary && (
                <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors line-clamp-1">{article.summary}</p>
            )}
            <span className="text-xs text-neon-blue flex items-center gap-1 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                Read <ExternalLink size={10} />
            </span>
        </a>
    );
}

export default function Blogs() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            const fetched: Article[] = [];

            // Fetch Medium via RSS2JSON
            try {
                const mediumRes = await fetch(
                    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@amankumarhappy&api_key=public_api_key"
                );
                if (mediumRes.ok) {
                    const mediumData = await mediumRes.json();
                    if (mediumData.items) {
                        mediumData.items.slice(0, 3).forEach((item: { title: string; link: string; pubDate: string; description?: string }) => {
                            fetched.push({
                                title: item.title,
                                url: item.link,
                                date: new Date(item.pubDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" }),
                                platform: "Medium",
                                platformColor: "#00f3ff",
                                summary: item.description
                                    ? item.description.replace(/<[^>]*>/g, "").slice(0, 80) + "..."
                                    : undefined,
                            });
                        });
                    }
                }
            } catch {
                // silently fail
            }

            // Fetch Dev.to via API
            try {
                const devRes = await fetch(
                    "https://dev.to/api/articles?username=amankumarhappy&per_page=3"
                );
                if (devRes.ok) {
                    const devData = await devRes.json();
                    if (Array.isArray(devData)) {
                        devData.slice(0, 3).forEach((item: { title: string; url: string; published_at: string; description?: string }) => {
                            fetched.push({
                                title: item.title,
                                url: item.url,
                                date: new Date(item.published_at).toLocaleDateString("en-IN", { month: "short", year: "numeric" }),
                                platform: "Dev.to",
                                platformColor: "#0aff0a",
                                summary: item.description,
                            });
                        });
                    }
                }
            } catch {
                // silently fail
            }

            setArticles(fetched);
            setLoading(false);
        };

        fetchArticles();
    }, []);

    return (
        <section id="blogs" className="py-28 bg-section text-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4"
                >
                    07. / Writing &amp; Blogs
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="text-4xl md:text-6xl font-black text-foreground mb-4 leading-tight"
                >
                    Ideas I Write{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                        About
                    </span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    className="text-muted text-lg mb-14 max-w-2xl"
                >
                    Writing since 2020 — across five platforms. Not always on schedule. Always when I have something worth saying.
                </motion.p>

                {/* Featured Article */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2.2}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-yellow-400 font-mono text-sm uppercase tracking-widest border border-yellow-400/30 px-3 py-1 rounded-full bg-yellow-400/10">
                            🌟 Featured Read
                        </span>
                    </div>
                    <a
                        href="https://medium.com/@amankumarhappy/what-a-national-level-startup-bootcamp-taught-me-about-mvp-lean-canvas-and-real-execution-316a8d3663b4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 rounded-3xl border border-neon-blue/30 bg-neon-blue/5 hover:bg-neon-blue/10 hover:border-neon-blue/60 transition-all duration-300"
                    >
                        <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-neon-blue transition-colors mb-3">
                            What a National-Level Startup Bootcamp Taught Me About MVP, Lean Canvas, and Real Execution
                        </h3>
                        <p className="text-gray-400 text-base leading-relaxed mb-4 max-w-4xl">
                            My learnings from the AICTE-MoE IDE Bootcamp 2026. How we built SAHAYAK, pitched it to investors, and realized that execution matters more than ideas.
                        </p>
                        <span className="text-sm font-bold text-neon-blue flex items-center gap-2">
                            Read Full Story <ExternalLink size={14} />
                        </span>
                    </a>
                </motion.div>

                {/* Live Articles — auto-fetched */}
                {(loading || articles.length > 0) && (
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2.5}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <RefreshCw size={14} className={`text-neon-blue ${loading ? "animate-spin" : ""}`} />
                            <span className="text-neon-blue font-mono text-sm">
                                {loading ? "Fetching latest articles..." : "Latest articles — auto-updated"}
                            </span>
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[1, 2, 3].map((k) => (
                                    <div key={k} className="h-32 rounded-2xl bg-white/5 animate-pulse border border-white/5" />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {articles.map((article, i) => (
                                    <ArticleCard key={i} article={article} />
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Platform cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {platformMeta.map((p, i) => (
                        <motion.a
                            key={i}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i + 3}
                            className="group relative rounded-3xl border border-card-border p-8 hover:border-white/20 transition-all duration-400 overflow-hidden flex flex-col gap-5"
                            style={{ background: `linear-gradient(135deg, #0d0d0d 60%, ${p.glow})` }}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 50% 0%, ${p.glow}, transparent 70%)` }}
                            />

                            {/* Icon */}
                            <div
                                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-300"
                                style={{ boxShadow: `0 0 20px ${p.glow}` }}
                            >
                                <p.icon size={26} color={p.color} />
                            </div>

                            {/* Label badge */}
                            <span
                                className="relative z-10 text-xs font-bold px-3 py-1 rounded-full w-fit border"
                                style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}15` }}
                            >
                                {p.label}
                            </span>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-foreground mb-2">{p.name}</h3>
                                <p className="text-muted text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {p.desc}
                                </p>
                            </div>

                            <div
                                className="relative z-10 mt-auto flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                                style={{ color: p.color }}
                            >
                                Read More <ExternalLink size={14} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
