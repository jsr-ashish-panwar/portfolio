"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, Send, MessageSquare } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*New Portfolio Message*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/918650882398?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `New Portfolio Message from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoUrl = `mailto:ashishpanwar8899@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-cyan/5 blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto glass p-8 md:p-16 rounded-[32px] md:rounded-[40px] border border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
                                <span className="text-white">Let's Create</span> <br />
                                <span className="text-neon-cyan">Something Epic</span>
                            </h2>
                            <p className="text-white/60 mb-10 text-base md:text-lg text-center lg:text-left">
                                Have a project in mind? Reach out and let's bring your vision to life with professional video editing and technical excellence.
                            </p>

                            <div className="space-y-4 md:space-y-6">
                                <a href="mailto:ashishpanwar8899@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-neon-cyan transition-colors group p-3 rounded-2xl bg-white/5 lg:bg-transparent border border-white/5 lg:border-none">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-neon-cyan/20 transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span>ashishpanwar8899@gmail.com</span>
                                </a>
                                <a href="tel:+918650882398" className="flex items-center gap-4 text-white/80 hover:text-neon-cyan transition-colors group">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-neon-cyan/20 transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span>+91 8650882398</span>
                                </a>
                                <a href="https://www.linkedin.com/in/jsr-ashish-panwar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-neon-blue transition-colors group">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-neon-blue/20 transition-colors">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://www.instagram.com/jsr_ashish_panwar?igsh=MTFnNDk0M3p6OGszcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-neon-purple transition-colors group">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-neon-purple/20 transition-colors">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/40 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-cyan/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/40 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-cyan/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/40 ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-cyan/50 transition-colors resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleWhatsApp}
                                    className="py-4 rounded-2xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 group shadow-xl"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    WhatsApp
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleEmail}
                                    className="py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold flex items-center justify-center gap-2 group shadow-xl"
                                >
                                    <Mail className="w-5 h-5" />
                                    Email
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
