"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Laptop2, Youtube, PenLine, MapPin, Cloud, Users } from "lucide-react";

const experiences = [
    {
        type: "salesforce",
        role: "Core Team Member",
        org: "Salesforce Community Bihar, India",
        period: "Jan 2026 - Present",
        loc: "Patna, Bihar, India · Hybrid",
        achievements: [
            "Serving as a Core Team Member of Salesforce Community Bihar, contributing to community growth and developer engagement.",
            "Collaborating with peers to organize events, learning sessions, and awareness initiatives around Salesforce technologies.",
            "Helping build a stronger tech ecosystem in Bihar by connecting students and developers with opportunities."
        ]
    },
    {
        type: "work",
        role: "Founder",
        org: "Mediokart",
        period: "Jan 2025 - Present",
        loc: "Buxar, Bihar",
        achievements: [
            "Researching healthcare gaps and building Mediokart as a tech-driven health platform focused on affordability, accessibility, and continuity of care.",
            "Leading design & development of the Mediokart website and app; working hands-on with Supabase and Firebase authentication systems.",
            "Building an early version of Mediobot — an AI-powered chatbot for health guidance and user engagement.",
            "Handling product planning, budgeting, and early monetization strategy while bootstrapping development.",
            "Shaping brand identity, UI/UX, and content strategy to attract early users and validate ideas."
        ]
    },
    {
        type: "community",
        role: "Google Student Ambassador",
        org: "Google",
        period: "Sep 2025 - Dec 2025",
        loc: "Buxar",
        achievements: [
            "Represented Google programs and initiatives on campus by promoting awareness of developer tools, certifications, and learning resources.",
            "Organized workshops and peer-learning events focused on Google Cloud, Android, and modern web tools.",
            "Contributed to building an engaged campus community by connecting peers with relevant opportunities and events."
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
            "Guided interested students on registrations, timelines, and event details."
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
            "Gained AI/ML Essentials using Vertex AI & BigQuery."
        ]
    },
    {
        type: "intern",
        role: "Data Analytics with LLMs Intern (AICTE Certified)",
        org: "Edunet Foundation",
        period: "Sep 2025 - Oct 2025",
        loc: "Buxar",
        achievements: [
            "Selected for AICTE-certified internship on Conversational Data Analytics with LLMs.",
            "Explored data analytics across agriculture, science & technology, and business domains.",
            "Gained hands-on exposure to Large Language Models (LLMs) and their practical applications.",
            "Completed guided project work on the VOIS for Tech platform."
        ]
    },
    {
        type: "visitor",
        role: "Business Visitor",
        org: "Startup Mahakumbh 2025",
        period: "Apr 2025",
        loc: "New Delhi",
        achievements: [
            "Attended Startup Mahakumbh 2025 as a Business Visitor.",
            "Interacted with startup founders, innovators, and ecosystem stakeholders.",
            "Observed startup pitches, innovation showcases, and entrepreneurship initiatives."
        ]
    },
    {
        type: "creator",
        role: "YouTube Content Creator",
        org: "YouTube",
        period: "Feb 2022 - Present",
        loc: "Remote",
        achievements: [
            "Created and uploaded 82+ videos with 115+ subscribers and 30K+ lifetime views.",
            "Content spans Vlogs, Book Reviews, Social Issues, and Podcasts.",
            "Developed skills in public speaking, video editing, and storytelling."
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
            "Wrote 314+ answers, 45+ posts on Quora with 30,000+ content views.",
            "Published 20+ blog posts on Blogspot, experimenting with SEO and digital writing styles.",
            "Built credibility as a knowledge sharer by simplifying complex ideas for a wide audience."
        ]
    },
    {
        type: "edu",
        role: "B.Tech in Computer Science",
        org: "Government Engineering College, Buxar",
        period: "Jul 2025 - Sep 2029",
        loc: "Buxar — Affiliated to Bihar Engineering University, Patna",
        achievements: [
            "Focus on Computer Science fundamentals with hands-on startup execution.",
            "Actively building projects and prototypes alongside coursework."
        ]
    },
    {
        type: "edu",
        role: "Higher Secondary Education (PCM)",
        org: "Vikramaditya Gita Mishra Senior Secondary School",
        period: "Jun 2023 - May 2025",
        loc: "Bihar",
        achievements: [
            "Completed 12th with Physics, Chemistry, and Mathematics."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-black text-white relative">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-800"
                >
                    My Journey
                </motion.h2>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-16">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ margin: "-100px" }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-neon-blue shadow-[0_0_10px_#00f3ff] z-10" />

                            <div className="group bg-neutral-900/40 border border-white/5 p-6 md:p-8 rounded-2xl hover:bg-neutral-800/60 hover:border-gray-700 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                            {exp.type === 'salesforce' && <Users size={20} className="text-blue-400" />}
                                            {exp.type === 'work' && <Briefcase size={20} className="text-neon-blue" />}
                                            {exp.type === 'edu' && <GraduationCap size={20} className="text-neon-purple" />}
                                            {exp.type === 'community' && <Award size={20} className="text-neon-green" />}
                                            {exp.type === 'intern' && <Laptop2 size={20} className="text-yellow-400" />}
                                            {exp.type === 'cloud' && <Cloud size={20} className="text-sky-400" />}
                                            {exp.type === 'creator' && <Youtube size={20} className="text-red-500" />}
                                            {exp.type === 'writer' && <PenLine size={20} className="text-orange-400" />}
                                            {exp.type === 'visitor' && <MapPin size={20} className="text-pink-400" />}
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
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-neon-blue transition-colors"></span>
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
