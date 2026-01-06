"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We decode your vision. No fluff, just raw requirements and strategic planning.",
    },
    {
        id: "02",
        title: "Rapid Development",
        description: "We build with speed and precision. Next.js, Tailwind, and AI-driven workflows.",
    },
    {
        id: "03",
        title: "Scaling",
        description: "We launch and optimize. 99/100 PageSpeed, SEO-first, and ready for millions.",
    },
];

export function ProcessSection() {
    return (
        <section id="process" className="py-32 bg-neutral-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-neutral-950 to-neutral-950" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        THE EXECUTION PIPELINE
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        A streamlined process designed for speed and dominance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm hover:bg-neutral-900 transition-colors duration-300 group"
                        >
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500" />

                            <span className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300 absolute top-4 right-6">
                                {step.id}
                            </span>

                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                                {step.title}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed relative z-10">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
