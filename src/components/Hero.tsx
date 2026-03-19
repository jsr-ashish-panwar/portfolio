"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";

export default function Hero() {
    const roles = ["Content Creator", "Video Editor", "Web Developer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan mb-4 leading-tight">
                        Hi, I'm Ashish Panwar
                    </h1>
                    <div className="h-10 sm:h-12 md:h-14 mb-4 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={roles[index]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90"
                            >
                                {roles[index]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 px-4">
                        I bridge the gap between code and creativity. I create engaging websites, videos, graphics and digital experiences.
                    </p>

                    <div className="flex flex-col xs:flex-row gap-4 justify-center px-6">
                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 sm:py-3 rounded-full bg-neon-purple text-white font-semibold neon-glow-purple transition-all w-full xs:w-auto text-center cursor-pointer"
                        >
                            View Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 sm:py-3 rounded-full border border-neon-cyan/50 text-neon-cyan font-semibold hover:bg-neon-cyan/10 transition-all w-full xs:w-auto text-center cursor-pointer"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative 3D Element in Hero */}
            <div className="absolute inset-0 z-0 opacity-50">
                <Canvas>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                            <Sphere args={[1, 100, 200]} scale={2}>
                                <MeshDistortMaterial
                                    color="#a855f7"
                                    attach="material"
                                    distort={0.4}
                                    speed={2}
                                    roughness={0}
                                />
                            </Sphere>
                        </Float>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}
