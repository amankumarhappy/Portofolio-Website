"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Trophy, Briefcase, Code, BookOpen, Users, Map, GraduationCap, ChevronDown, Award } from "lucide-react";

const experiences = [
    {
        type: "award",
        icon: Trophy,
        role: "National Winner — IDE Bootcamp 2026 Phase II",
        org: "AICTE × Ministry of Education",
        period: "April 2026",
        loc: "NIT Patna · Team NexaForce · 40+ teams competed",
        achievements: [
            "Won Phase II of the national AICTE-MoE IDE Bootcamp 2026 at NIT Patna with team NexaForce (Aman Kumar Happy · Biru Kumar · Amber Arya).",
            "Pitched SAHAYAK — a WhatsApp-based health assistant for rural and elderly India delivering MBBS-reviewed first-aid in Hindi & Bhojpuri.",
            "Competed against 40+ teams from engineering colleges across India. Selected as one of the top teams at the national level.",
        ]
    },
    {
        type: "award",
        icon: Award,
        role: "Intra-College Winner — Poster Making Competition",
        org: "UMANG'26 · GEC Buxar",
        period: "2026",
        loc: "Government Engineering College, Buxar",
        achievements: [
            "Won the Poster Making Competition at UMANG'26, the annual cultural-technical fest of GEC Buxar.",
        ]
    },
    {
        type: "award",
        icon: Award,
        role: "Winner — Thrust Competition",
        org: "Techmiti Techfest · GEC Buxar",
        period: "2026",
        loc: "Government Engineering College, Buxar",
        achievements: [
            "Won the Thrust competition at Techmiti Techfest, GEC Buxar's technical festival.",
        ]
    },
    {
        type: "work",
        icon: Briefcase,
        role: "Founder & CEO",
        org: "Mediokart",
        period: "Jan 2025 - Present",
        loc: "Buxar, Bihar",
        achievements: [
            "Founded Mediokart in January 2025 — a healthtech startup building accessible healthcare tools for rural India.",
            "Built and launched SAHAYAK: a WhatsApp-based health assistant using Python, WhatsApp Business API, and Google Sheets.",
            "Leading product strategy, brand identity, and technical development for SAHAYAK — with AuraBox and Mediobot on the roadmap.",
            "Handling all aspects of a bootstrapped startup: product, pitching, partnerships, and community outreach.",
        ]
    },
    {
        type: "community",
        icon: Users,
        role: "Google Student Ambassador",
        org: "Google",
        period: "Sep 2025 - Dec 2025",
        loc: "GEC Buxar Campus",
        achievements: [
            "Represented Google programs and initiatives on campus by promoting awareness of developer tools, certifications, and learning resources.",
            "Organized workshops and peer-learning events focused on Google Cloud, Android, and modern web tools.",
            "Contributed to building an engaged campus community by connecting peers with relevant opportunities and events.",
        ]
    },
    {
        type: "community",
        icon: Users,
        role: "Campus Ambassador",
        org: "Techfest, IIT Bombay",
        period: "Jul 2025 - Jan 2026",
        loc: "Buxar",
        achievements: [
            "Represented Techfest, IIT Bombay on campus by promoting flagship events, competitions, and initiatives.",
            "Coordinated outreach activities, shared official updates, and encouraged student participation.",
            "Guided interested students on registrations, timelines, and event details.",
        ]
    },
    {
        type: "hackathon",
        icon: Code,
        role: "Participant — Smart India Hackathon 2025",
        org: "Government of India",
        period: "2025",
        loc: "India",
        achievements: [
            "Participated in Smart India Hackathon 2025, India's largest hackathon organized by the Government of India.",
        ]
    },
    {
        type: "hackathon",
        icon: Code,
        role: "Solo Participant — OpenEnv Hackathon",
        org: "MediTriage",
        period: "2025",
        loc: "Remote · Solo",
        achievements: [
            "Built MediTriage — a reinforcement learning environment for intelligent medical triage decisions.",
            "Solo build: trained an RL agent to prioritize patient care based on severity and resource availability.",
        ]
    },
    {
        type: "intern",
        icon: Briefcase,
        role: "Data Analytics with LLMs Intern (AICTE Certified)",
        org: "Edunet Foundation / VOIS for Tech",
        period: "Sep 2025 - Oct 2025",
        loc: "Buxar",
        achievements: [
            "Selected for AICTE-certified internship on Conversational Data Analytics with LLMs.",
            "Explored data analytics across agriculture, science & technology, and business domains.",
            "Gained hands-on exposure to Large Language Models (LLMs) and their practical applications.",
            "Completed guided project work on the VOIS for Tech platform.",
        ]
    },
    {
        type: "creator",
        icon: BookOpen,
        role: "YouTube Content Creator",
        org: "YouTube",
        period: "Feb 2022 - Present",
        loc: "Remote",
        achievements: [
            "Created and uploaded 82+ videos with 115+ subscribers and 30K+ lifetime views.",
            "Content spans Vlogs, Book Reviews, Social Issues, and Podcasts.",
            "Developed skills in public speaking, video editing, and storytelling.",
        ]
    },
    {
        type: "writer",
        icon: BookOpen,
        role: "Independent Blogger & Content Writer",
        org: "Medium / Quora / Blogspot",
        period: "Dec 2020 - Present",
        loc: "Buxar, Bihar, India",
        achievements: [
            "Published 10+ articles on Medium covering technology, social issues, and personal development.",
            "Wrote 314+ answers on Quora with 30,000+ content views.",
            "Published 20+ blog posts on Blogspot, experimenting with SEO and digital writing styles.",
        ]
    },
    {
        type: "edu",
        icon: GraduationCap,
        role: "B.Tech in Computer Science",
        org: "Government Engineering College, Buxar",
        period: "Jul 2025 - Sep 2029",
        loc: "Buxar — Affiliated to Bihar Engineering University, Patna",
        achievements: [
            "Focus on Computer Science fundamentals with hands-on startup execution.",
            "Actively building projects and prototypes alongside coursework.",
            "Running Pahal — a free CS teaching initiative for Hindi-medium school students.",
        ]
    },
    {
        type: "edu",
        icon: GraduationCap,
        role: "Higher Secondary Education (PCM)",
        org: "Vikramaditya Gita Mishra Senior Secondary School",
        period: "Jun 2023 - May 2025",
        loc: "Bihar",
        achievements: [
            "Completed 12th with Physics, Chemistry, and Mathematics.",
        ]
    }
];

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="py-24 bg-black text-white relative">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4">
                        04. / Timeline
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black text-white">
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">Journey</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">Click on any path to open details about it.</p>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-6">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: Math.min(i * 0.05, 0.4) }}
                            viewport={{ margin: "-100px" }}
                            className="relative pl-6 md:pl-10"
                        >
                            {/* Timeline Node */}
                            <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-black border-2 z-10 transition-colors ${
                                expandedIndex === i ? 'border-neon-blue shadow-[0_0_10px_#00f3ff]' : 'border-white/30'
                            }`} />

                            <div 
                                className={`group bg-neutral-900/40 border p-6 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-neutral-800/60 ${
                                    expandedIndex === i ? 'border-neon-blue/40 shadow-lg' : 'border-white/5 hover:border-white/20'
                                }`}
                                onClick={() => toggleAccordion(i)}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className={`mt-1 shrink-0 p-2 rounded-lg bg-white/5 ${expandedIndex === i ? 'text-neon-blue' : 'text-gray-400'}`}>
                                            <exp.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold transition-colors ${expandedIndex === i ? 'text-white' : 'text-gray-300'}`}>
                                                {exp.role}
                                            </h3>
                                            <p className="text-neon-blue text-sm font-medium mt-1">{exp.org}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-right justify-between md:justify-end md:ml-auto">
                                        <div className="flex flex-col items-start md:items-end gap-1">
                                            <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-full border border-white/10">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <ChevronDown size={20} className={`text-gray-500 transition-transform duration-300 ${expandedIndex === i ? 'rotate-180 text-neon-blue' : ''}`} />
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 mt-4 border-t border-white/10">
                                                <div className="flex items-center gap-2 mb-4 text-xs font-mono text-gray-500">
                                                    <Map size={14} /> {exp.loc}
                                                </div>
                                                <ul className="space-y-3">
                                                    {exp.achievements.map((ach, a) => (
                                                        <li key={a} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                                                            <span className="text-neon-blue/50 mt-1">▹</span>
                                                            <span className="flex-1">{ach}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
