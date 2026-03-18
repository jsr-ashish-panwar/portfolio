"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Linkedin, Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Design", href: "#design" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-obsidian/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border border-white/10 group-hover:border-neon-cyan/50 transition-all duration-300">
                        <img
                            src="/apfavicon.PNG"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-neon-cyan transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex gap-4 ml-4 border-l border-white/10 pl-8">
                        <a href="https://www.linkedin.com/in/jsr-ashish-panwar/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-blue transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/jsr_ashish_panwar?igsh=MTFnNDk0M3p6OGszcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-purple transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.621.074-3.057.394-4.234 1.571s-1.497 2.613-1.571 4.234c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.074 1.621.394 3.057 1.571 4.234s2.613 1.497 4.234 1.571c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.621-.074 3.057-.394 4.234-1.571s1.497-2.613 1.571-4.234c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.621-.394-3.057-1.571-4.234s-2.613-1.497-4.234-1.571c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-obsidian/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-semibold text-white/70 hover:text-neon-cyan transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-6 mt-4 pt-6 border-t border-white/10">
                                <a href="https://www.linkedin.com/in/jsr-ashish-panwar/" target="_blank" rel="noopener noreferrer" className="text-neon-blue">LinkedIn</a>
                                <a href="https://www.instagram.com/jsr_ashish_panwar?igsh=MTFnNDk0M3p6OGszcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-neon-purple">Instagram</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
