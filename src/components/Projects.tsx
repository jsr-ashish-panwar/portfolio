"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Sikkim Trails",
        description: "A comprehensive travel website showcasing the beauty of Sikkim with interactive maps and travel guides.",
        tags: ["Next.js", "Three.js", "Tailwind"],
        link: "https://sikkimtrails.netlify.app/",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "AaVerta",
        description: "Cloud kitchen platform with a sleek, modern UI for seamless food ordering experience.",
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://aavertafood.netlify.app/",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "MetaIverse",
        description: "Cutting-edge video editing work showcasing immersive digital environments and 3D interactions.",
        tags: ["Video Editing", "After Effects", "R3F"],
        link: "https://www.metaiverse.in",
        image: "/metaiverse.png",
    },
    {
        title: "Stage Spark",
        description: "A premium event management platform dedicated to creating unforgettable experiences and spectacular productions.",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        link: "https://stagespark.netlify.app/",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
    },
];

export default function Projects() {
    return (
        <section id="work" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    <span className="text-white">Featured</span>{" "}
                    <span className="text-neon-cyan">Work</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                perspective={1000}
                                scale={1.02}
                                transitionSpeed={1500}
                                gyroscope={true}
                                className="glass rounded-3xl overflow-hidden border border-white/10 group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-4">
                                            {project.link !== "#" && (
                                                <a href={project.link} className="text-white/40 hover:text-white transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-white/60 mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neon-purple"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
