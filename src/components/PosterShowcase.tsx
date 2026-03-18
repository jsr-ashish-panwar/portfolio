"use client";

import { motion } from "framer-motion";
import { Maximize2, ExternalLink } from "lucide-react";
import { useState } from "react";

const posters = [
    {
        title: "Creative Edit 01",
        category: "Visual Design",
        image: "/poster1.jpeg",
    },
    {
        title: "Creative Edit 02",
        category: "Graphic Art",
        image: "/poster2.jpeg",
    },
    {
        title: "Creative Edit 03",
        category: "Digital Poster",
        image: "/poster3.jpeg",
    },
    {
        title: "Creative Edit 04",
        category: "Modern Design",
        image: "/poster4.PNG",
    },
    {
        title: "Creative Edit 05",
        category: "Conceptual Art",
        image: "/poster5.PNG",
    },
    {
        title: "Creative Edit 06",
        category: "Visual Design",
        image: "/poster6.jpeg",
    },
    {
        title: "Creative Edit 07",
        category: "Graphic Art",
        image: "/poster7.jpeg",
    },
];

export default function PosterShowcase() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="design" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-neon-purple/5 -z-10 blur-[120px]" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="text-white">Creative</span>{" "}
                            <span className="text-neon-blue">Posters</span>
                        </h2>
                        <p className="text-white/60 max-w-xl">
                            A collection of graphic design work, ranging from event posters to conceptual digital art.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">
                            Graphic Design
                        </span>
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/40">
                            Posters
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posters.map((poster, index) => (
                        <motion.div
                            key={poster.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden glass border border-white/10 cursor-pointer"
                            onClick={() => setSelectedImage(poster.image)}
                        >
                            <img
                                src={poster.image}
                                alt={poster.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <span className="text-neon-blue text-xs font-bold tracking-widest uppercase mb-2">
                                    {poster.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {poster.title}
                                </h3>
                                <div className="flex gap-3">
                                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-neon-blue/20 transition-colors">
                                        <Maximize2 className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="relative max-w-4xl w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-neon-blue/20"
                    >
                        <img src={selectedImage} alt="Fullscreen poster" className="w-full h-full object-contain" />
                        <button
                            className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
