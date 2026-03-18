"use client";

import { motion } from "framer-motion";
import {
    Video, Code, Palette, Music,
    Layers, Zap, Camera, Monitor
} from "lucide-react";

const skillCategories = [
    {
        title: "Video & Content",
        icon: <Video className="w-8 h-8 text-neon-purple" />,
        skills: ["VN", "CapCut", "After Effects", "Voice Overs", "Voice Cloning", "Color Grading", "Transitions"],
    },
    {
        title: "Graphic Design",
        icon: <Palette className="w-8 h-8 text-neon-blue" />,
        skills: ["Canva", "Photoshop", "PicsArt", "Creative Poster Design"],
    },
    {
        title: "Technical",
        icon: <Code className="w-8 h-8 text-neon-cyan" />,
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Python"],
    },
    {
        title: "Data & Tools",
        icon: <Layers className="w-8 h-8 text-neon-purple" />,
        skills: ["Power BI", "Supabase", "Git", "VS Code"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    <span className="text-white">Professional</span>{" "}
                    <span className="text-neon-purple">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-neon-purple/50 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
                            <ul className="space-y-2">
                                {cat.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-white/60">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
