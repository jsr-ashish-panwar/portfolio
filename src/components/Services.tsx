"use client";

import { motion } from "framer-motion";
import { Video, Share2, PenTool, Code, BarChart3 } from "lucide-react";

const services = [
    {
        title: "Video Editing",
        description: "High-end post-production, color grading, and motion graphics for reels, YouTube, and commercial ads.",
        icon: <Video className="w-10 h-10 text-neon-purple" />,
    },
    {
        title: "Content Creation",
        description: "Strategic social media content creation that drives engagement and builds brand identity across platforms.",
        icon: <Share2 className="w-10 h-10 text-neon-cyan" />,
    },
    {
        title: "Graphic Design",
        description: "Premium posters, thumbnails, and branding assets designed to capture attention and deliver impact.",
        icon: <PenTool className="w-10 h-10 text-neon-blue" />,
    },
    {
        title: "Web Development",
        description: "Custom, responsive, and high-performance websites built with modern frameworks like Next.js and React.",
        icon: <Code className="w-10 h-10 text-neon-purple" />,
    },
    {
        title: "Data Analytics",
        description: "Professional data visualization and insights using Power BI and Supabase to drive informed decisions.",
        icon: <BarChart3 className="w-10 h-10 text-neon-cyan" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    <span className="text-white">What I</span>{" "}
                    <span className="text-neon-purple">Offer</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass p-10 rounded-3xl border border-white/5 relative group cursor-default"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-white/50 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
