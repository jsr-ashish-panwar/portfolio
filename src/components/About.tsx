"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span className="text-white">About</span>{" "}
                        <span className="text-neon-cyan">Me</span>
                    </h2>

                    <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
                        <div className="lg:col-span-1 max-w-sm mx-auto lg:max-w-none">
                            <Link href="/links" className="block relative group cursor-pointer">
                                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
                                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 group-active:scale-[0.98]">
                                    <img
                                        src="/profile.jpeg"
                                        alt="Ashish Panwar"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                                        <span className="text-white text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">View Links</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div className="space-y-6">
                                <p className="text-base md:text-lg text-white/80 leading-relaxed text-center lg:text-left">
                                    I'm a transition from a Bachelor of Computer Applications (BCA) student at{" "}
                                    <span className="text-neon-purple font-semibold">Vidya University</span> to a
                                    professional video editor and content creator.
                                </p>
                                <p className="text-base md:text-lg text-white/80 leading-relaxed text-center lg:text-left">
                                    My unique edge lies in bridging the gap between <span className="text-neon-cyan italic">CODE AND CREATIVITY</span>.
                                    By combining technical skills in HTML, CSS, and Python with creative mastery in Videos and Photos editing, I create digital experiences that are both functional and visually stunning.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                {[
                                    { label: "Experience", value: "2+ Years" },
                                    { label: "Projects", value: "50+" },
                                    { label: "Clients", value: "10+" },
                                    { label: "Efficiency", value: "100%" },
                                ].map((stat) => (
                                    <div key={stat.label} className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center">
                                        <span className="text-lg md:text-xl font-bold text-neon-cyan">{stat.value}</span>
                                        <span className="text-[10px] md:text-xs text-white/40 text-center uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
