"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, MessageSquare, ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";

const links = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jsr-ashish-panwar/",
        icon: <Linkedin className="w-6 h-6" />,
        color: "hover:text-neon-blue",
        bg: "hover:bg-neon-blue/10",
        border: "hover:border-neon-blue/50"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/jsr_ashish_panwar?igsh=MTFnNDk0M3p6OGszcg%3D%3D&utm_source=qr",
        icon: <Instagram className="w-6 h-6" />,
        color: "hover:text-neon-purple",
        bg: "hover:bg-neon-purple/10",
        border: "hover:border-neon-purple/50"
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/918650882398",
        icon: <MessageSquare className="w-6 h-6" />,
        color: "hover:text-green-400",
        bg: "hover:bg-green-400/10",
        border: "hover:border-green-400/50"
    },
    {
        name: "Email Me",
        url: "mailto:ashishpanwar8899@gmail.com",
        icon: <Mail className="w-6 h-6" />,
        color: "hover:text-neon-cyan",
        bg: "hover:bg-neon-cyan/10",
        border: "hover:border-neon-cyan/50"
    },
    {
        name: "Main Portfolio",
        url: "/",
        icon: <Globe className="w-6 h-6" />,
        color: "hover:text-white",
        bg: "hover:bg-white/10",
        border: "hover:border-white/50"
    }
];

export default function LinksPage() {
    return (
        <div className="min-h-screen bg-obsidian text-white selection:bg-neon-cyan/30 flex flex-col items-center py-20 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-neon-purple/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-neon-cyan/5 blur-[120px] -z-10" />

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md flex flex-col items-center"
            >
                {/* Profile Section */}
                <div className="relative mb-8 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
                        <img 
                            src="/profile.jpeg" 
                            alt="Ashish Panwar" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <h1 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    Ashish Panwar
                </h1>
                <p className="text-white/60 mb-12 text-center font-medium tracking-wide">
                    Content Creator • Video Editor • Web Developer
                </p>

                {/* Links list */}
                <div className="w-full space-y-4">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${link.bg} ${link.border} group`}
                        >
                            <div className={`p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${link.color}`}>
                                {link.icon}
                            </div>
                            <span className="font-semibold text-white/90 group-hover:text-white transition-colors">
                                {link.name}
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Back to Home Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-16"
                >
                    <Link 
                        href="/" 
                        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group text-sm uppercase tracking-widest font-bold"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Footer Text */}
                <p className="mt-12 text-xs text-white/20 uppercase tracking-[0.2em]">
                    © 2026 Ashish Panwar
                </p>
            </motion.div>
        </div>
    );
}
