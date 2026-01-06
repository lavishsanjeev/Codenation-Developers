"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Neon Fintech",
        category: "Fintech",
        description: "Real-time crypto trading platform with <50ms latency.",
        gradient: "from-blue-600/20 via-purple-900/20 to-neutral-950",
    },
    {
        id: 2,
        title: "Cyber Health",
        category: "Healthcare",
        description: "AI-powered diagnostic dashboard.",
        gradient: "from-emerald-600/20 via-teal-900/20 to-neutral-950",
    },
    {
        id: 3,
        title: "Future Retail",
        category: "E-commerce",
        description: "Immersive 3D shopping experience.",
        gradient: "from-orange-600/20 via-red-900/20 to-neutral-950",
    },
    {
        id: 4,
        title: "Orbital SaaS",
        category: "SaaS",
        description: "Enterprise project management suite.",
        gradient: "from-cyan-600/20 via-blue-900/20 to-neutral-950",
    },
    {
        id: 5,
        title: "Azure Dining",
        category: "Hospitality",
        description: "High-end restaurant booking experience.",
        gradient: "from-rose-600/20 via-pink-900/20 to-neutral-950",
    },
    {
        id: 6,
        title: "Nexus Architecture",
        category: "Real Estate",
        description: "Virtual reality property tours.",
        gradient: "from-amber-600/20 via-yellow-900/20 to-neutral-950",
    },
];

export function PortfolioSection() {
    return (
        <section id="work" className="py-20 md:py-32 bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 text-center md:text-left">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            THE 100+ CLUB
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-md">
                            A curated selection of digital dominance.
                            Speed, scale, and ROI delivered.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-neutral-500 text-sm font-mono">SCROLL TO EXPLORE</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 h-[280px] hover:border-white/10 transition-colors duration-500"
                        >
                            {/* Abstract Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                            {/* Noise Texture Overlay */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

                            {/* Glassmorphism Overlay */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] group-hover:backdrop-blur-[2px] transition-all duration-500" />

                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/10 group-hover:bg-white/20 transition-colors duration-300">
                                        {project.category}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
