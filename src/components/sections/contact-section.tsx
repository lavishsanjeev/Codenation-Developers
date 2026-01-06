"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct Gmail web compose link
        const subject = `Project Request from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=codenationdevelopers@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank');

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-neutral-950 relative overflow-hidden" >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        START YOUR EVOLUTION
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Ready to dominate your industry? Let's build something extraordinary.
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Request Sent!</h3>
                            <p className="text-neutral-400">
                                Thank you! We will reach you as soon as possible.
                            </p>
                            <Button
                                variant="outline"
                                className="mt-8 border-white/10 text-white hover:bg-white/10"
                                onClick={() => setIsSuccess(false)}
                            >
                                Send Another Request
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-400">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-400">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-400">
                                    Project Details
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us about your vision..."
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full rounded-xl py-6 text-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Request"}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section >
    );
}
