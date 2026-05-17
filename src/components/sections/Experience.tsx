"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Trophy, Briefcase, Code, BookOpen, Users, Map, GraduationCap, ChevronDown, Award, ChevronLeft, ChevronRight } from "lucide-react";

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
        role: "Intra-College Winner — Poster Making",
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
        role: "Solo Participant — OpenEnv",
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
        role: "Data Analytics with LLMs Intern",
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
        role: "Independent Blogger & Writer",
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
        loc: "Buxar",
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
        org: "VG Mishra Senior Secondary School",
        period: "Jun 2023 - May 2025",
        loc: "Bihar",
        achievements: [
            "Completed 12th with Physics, Chemistry, and Mathematics.",
        ]
    }
];

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="experience" className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <p className="text-neon-blue font-mono tracking-widest uppercase text-sm mb-4">
                        04. / Timeline
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">Journey</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">Scroll to explore my journey. Click any node to view details.</p>
                </motion.div>

                {/* Horizontal Journey Timeline */}
                <div className="relative group">
                    {/* Navigation Buttons (Desktop) */}
                    <button 
                        onClick={() => scroll('left')} 
                        className="hidden md:flex absolute -left-6 top-[220px] z-30 bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-full hover:bg-white/10 hover:border-neon-blue text-white hover:text-neon-blue transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button 
                        onClick={() => scroll('right')} 
                        className="hidden md:flex absolute -right-6 top-[220px] z-30 bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-full hover:bg-white/10 hover:border-neon-blue text-white hover:text-neon-blue transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Scroll Container */}
                    <div 
                        ref={scrollRef} 
                        className="overflow-x-auto pb-12 pt-8 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="relative flex gap-8 px-4 md:px-12 w-max items-start">
                            {/* Connecting Line */}
                            <div className="absolute top-[34px] left-8 right-8 h-[3px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 z-0" />

                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: Math.min(i * 0.05, 0.3) }}
                                    viewport={{ margin: "-50px" }}
                                    className="relative shrink-0 w-[85vw] md:w-[380px] snap-center flex flex-col items-center"
                                >
                                    {/* The Node (Square/Circle on the line) */}
                                    <div 
                                        onClick={() => toggleAccordion(i)}
                                        className={`w-16 h-16 rounded-2xl md:rounded-full bg-black border-[3px] z-10 flex items-center justify-center mb-8 transition-all duration-300 cursor-pointer hover:scale-110 ${
                                            expandedIndex === i 
                                            ? 'border-neon-blue shadow-[0_0_25px_rgba(0,243,255,0.4)] scale-110' 
                                            : 'border-white/20 hover:border-white/50 hover:bg-white/5'
                                        }`}
                                    >
                                        <exp.icon size={26} className={expandedIndex === i ? 'text-neon-blue' : 'text-gray-400'} />
                                    </div>

                                    {/* The Card */}
                                    <div 
                                        className={`w-full text-left bg-neutral-900/40 border p-6 rounded-3xl transition-all duration-500 cursor-pointer hover:bg-neutral-800/60 flex flex-col ${
                                            expandedIndex === i 
                                            ? 'border-neon-blue/40 shadow-[0_0_30px_rgba(0,243,255,0.05)] bg-neutral-800/40' 
                                            : 'border-white/5 hover:border-white/20'
                                        }`}
                                        onClick={() => toggleAccordion(i)}
                                    >
                                        <div className="flex flex-col gap-4 mb-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-mono text-neon-blue bg-neon-blue/10 px-3 py-1.5 rounded-full border border-neon-blue/20">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-bold leading-tight transition-colors ${expandedIndex === i ? 'text-white' : 'text-gray-300'}`}>
                                                    {exp.role}
                                                </h3>
                                                <p className="text-gray-400 text-sm font-medium mt-1">{exp.org}</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 flex items-center justify-between border-t border-white/5">
                                            <span className="text-xs text-gray-500 font-mono transition-colors group-hover:text-gray-300">
                                                {expandedIndex === i ? 'Close details' : 'View details'}
                                            </span>
                                            <ChevronDown size={20} className={`text-gray-500 transition-transform duration-300 ${expandedIndex === i ? 'rotate-180 text-neon-blue' : ''}`} />
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
                                                    <div className="pt-6 mt-2">
                                                        <div className="flex items-center gap-2 mb-4 text-xs font-mono text-gray-400/80">
                                                            <Map size={14} /> {exp.loc}
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {exp.achievements.map((ach, a) => (
                                                                <li key={a} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                                                                    <span className="text-neon-blue mt-1">▹</span>
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
                </div>

                {/* Hide scrollbar CSS */}
                <style dangerouslySetInnerHTML={{__html: `
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}} />
            </div>
        </section>
    );
}
