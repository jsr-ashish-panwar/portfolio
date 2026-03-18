"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const showcaseVideos = [
    {
        title: "Sikkim Trails Cinematic",
        category: "Travel Edit",
        link: "https://www.instagram.com/reel/C7X3o5-S8W_/", // Example link
        thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "AaVerta Launch",
        category: "Promo Video",
        link: "#", // User to provide
        thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Creative Storytelling",
        category: "Reel Edit",
        link: "#", // User to provide
        thumbnail: "https://images.unsplash.com/photo-1614853035986-ca4587db291c?q=80&w=800&auto=format&fit=crop",
    },
];

export default function VideoShowcase() {
    return (
        <section className="py-24 bg-neon-purple/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-16">
                    <span className="text-white">Cinematic</span>{" "}
                    <span className="text-neon-cyan">Showcase</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {showcaseVideos.map((video, index) => (
                        <motion.a
                            key={index}
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -10 }}
                            className="relative aspect-[9/16] rounded-3xl overflow-hidden glass border border-white/10 group cursor-pointer block"
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10" />

                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="p-4 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                                    <Play className="w-8 h-8 text-white fill-white/80" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 z-30 text-left">
                                <span className="text-xs font-bold text-neon-purple mb-2 block tracking-widest uppercase">
                                    {video.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {video.title}
                                </h3>
                                <p className="text-white/40 text-sm">Tap to Watch Reel</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
