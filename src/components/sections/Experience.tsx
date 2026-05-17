"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Laptop2, Youtube, PenLine, MapPin, Cloud, Users, Trophy, BookOpen, Zap } from "lucide-react";

const experiences = [
    // ─── Awards & Achievements ───────────────────────────────────────
    {
        type: "award",
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
        role: "Winner — Thrust Competition",
        org: "Techmiti Techfest · GEC Buxar",
        period: "2026",
        loc: "Government Engineering College, Buxar",
        achievements: [
            "Won the Thrust competition at Techmiti Techfest, GEC Buxar's technical festival.",
        ]
    },
    // ─── Founder & Work ──────────────────────────────────────────────
    {
        type: "work",
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
    // ─── Teaching Initiative ──────────────────────────────────────────
    {
        type: "teaching",
        role: "Founder — Pahal Teaching Initiative",
        org: "GEC Buxar (Self-Initiated)",
        period: "2026 - Present",
        loc: "Buxar, Bihar",
        achievements: [
            "Every Monday, teaches free Computer Science classes to Class 8–9 Hindi-medium school students at GEC Buxar.",
            "Pahal is a personal initiative — because if tech is going to matter in Bihar, it has to start in classrooms.",
            "Covers basics of computing, internet literacy, and digital tools in Hindi to make CS accessible.",
        ]
    },
    // ─── Community Roles ─────────────────────────────────────────────
    {
        type: "salesforce",
        role: "Core Team Member",
        org: "Salesforce Community Bihar, India",
        period: "Jan 2026 - Present",
        loc: "Patna, Bihar, India · Hybrid",
        achievements: [
            "Serving as a Core Team Member of Salesforce Community Bihar, contributing to community growth and developer engagement.",
            "Collaborating with peers to organize events, learning sessions, and awareness initiatives around Salesforce technologies.",
            "Helping build a stronger tech ecosystem in Bihar by connecting students and developers with opportunities.",
        ]
    },
    {
        type: "community",
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
    // ─── Hackathons ───────────────────────────────────────────────────
    {
        type: "hackathon",
        role: "Participant — HackIndia Spark 6",
        org: "SkillChain · Team NexaForce",
        period: "2025",
        loc: "New Delhi",
        achievements: [
            "Built SkillChain — blockchain credential verification on Polygon using Soulbound Tokens (SBTs).",
            "Implemented tamper-proof academic certificate verification with IPFS storage.",
        ]
    },
    {
        type: "hackathon",
        role: "Participant — Hackatron 3.0",
        org: "NexFlow · BIT Sindri",
        period: "2025",
        loc: "BIT Sindri, Jharkhand",
        achievements: [
            "Built NexFlow — an AI workflow orchestration OS for intelligent multi-step process automation.",
            "Turned rough ideas into structured, automated pipelines powered by LLMs.",
        ]
    },
    {
        type: "hackathon",
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
        role: "Solo Participant — OpenEnv Hackathon",
        org: "MediTriage",
        period: "2025",
        loc: "Remote · Solo",
        achievements: [
            "Built MediTriage — a reinforcement learning environment for intelligent medical triage decisions.",
            "Solo build: trained an RL agent to prioritize patient care based on severity and resource availability.",
        ]
    },
    // ─── Internships & Programs ───────────────────────────────────────
    {
        type: "intern",
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
        type: "cloud",
        role: "Participant (Cohort 1)",
        org: "Google Cloud Arcade Facilitator Program",
        period: "Jan 2025 - Aug 2025",
        loc: "Buxar, Bihar, India",
        achievements: [
            "Selected for the Google Cloud Arcade Facilitator Program, a cohort-based upskilling initiative by Google.",
            "Worked on hands-on labs and skill badges in Cloud Fundamentals (Compute Engine, IAM, Networking).",
            "Explored Application Development on Cloud: APIs, Cloud Run, and CI/CD pipelines.",
            "Gained AI/ML Essentials using Vertex AI & BigQuery.",
        ]
    },
    {
        type: "visitor",
        role: "Business Visitor",
        org: "Startup Mahakumbh 2025",
        period: "Apr 2025",
        loc: "New Delhi",
        achievements: [
            "Attended Startup Mahakumbh 2025 as a Business Visitor in New Delhi.",
            "Interacted with startup founders, innovators, and ecosystem stakeholders.",
            "Observed startup pitches, innovation showcases, and entrepreneurship initiatives.",
        ]
    },
    // ─── Content ──────────────────────────────────────────────────────
    {
        type: "creator",
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
    // ─── Education ────────────────────────────────────────────────────
    {
        type: "edu",
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
    return (
        <section id="experience" className="py-24 bg-black text-white relative">
            <div className="max-w-5xl mx-auto px-4">
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
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-16">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: Math.min(i * 0.05, 0.4) }}
                            viewport={{ margin: "-100px" }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 z-10 ${exp.type === 'award' ? 'border-yellow-400 shadow-[0_0_10px_#facc15]' : 'border-neon-blue shadow-[0_0_10px_#00f3ff]'}`} />

                            <div className="group bg-neutral-900/40 border border-white/5 p-6 md:p-8 rounded-2xl hover:bg-neutral-800/60 hover:border-gray-700 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                            {exp.type === 'award' && <Trophy size={20} className="text-yellow-400 shrink-0" />}
                                            {exp.type === 'salesforce' && <Users size={20} className="text-blue-400 shrink-0" />}
                                            {exp.type === 'work' && <Briefcase size={20} className="text-neon-blue shrink-0" />}
                                            {exp.type === 'teaching' && <BookOpen size={20} className="text-emerald-400 shrink-0" />}
                                            {exp.type === 'edu' && <GraduationCap size={20} className="text-neon-purple shrink-0" />}
                                            {exp.type === 'community' && <Award size={20} className="text-neon-green shrink-0" />}
                                            {exp.type === 'hackathon' && <Zap size={20} className="text-orange-400 shrink-0" />}
                                            {exp.type === 'intern' && <Laptop2 size={20} className="text-yellow-400 shrink-0" />}
                                            {exp.type === 'cloud' && <Cloud size={20} className="text-sky-400 shrink-0" />}
                                            {exp.type === 'creator' && <Youtube size={20} className="text-red-500 shrink-0" />}
                                            {exp.type === 'writer' && <PenLine size={20} className="text-orange-400 shrink-0" />}
                                            {exp.type === 'visitor' && <MapPin size={20} className="text-pink-400 shrink-0" />}
                                            {exp.role}
                                        </h3>
                                        <div className="text-lg text-neon-blue font-medium mt-1">{exp.org}</div>
                                    </div>
                                    <div className="md:text-right">
                                        <div className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full inline-block">{exp.period}</div>
                                        <div className="text-xs text-gray-500 mt-1">{exp.loc}</div>
                                    </div>
                                </div>

                                <ul className="space-y-2 mt-4">
                                    {exp.achievements.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-neon-blue transition-colors shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
