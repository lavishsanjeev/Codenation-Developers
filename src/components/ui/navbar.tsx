"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const navItems = [
        { name: "Work", href: "#work" },
        { name: "Process", href: "#process" },
        { name: "About", href: "#about" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 md:pt-8 px-4"
        >
            <div className="flex items-center justify-between w-full max-w-5xl md:w-auto gap-6 rounded-full border border-white/10 bg-black/50 px-6 md:px-8 py-3 md:py-4 backdrop-blur-md shadow-2xl ring-1 ring-white/5 transition-all duration-300 hover:bg-black/60 hover:ring-white/10 hover:shadow-blue-500/10">
                <Link
                    href="/"
                    className="flex items-center gap-2 group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
                        CODE<span className="text-blue-500">NATION</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block ml-4">
                    <Link href="#contact">
                        <Button
                            size="default"
                            className="rounded-full bg-blue-600 hover:bg-blue-500 text-white border-none px-6 text-base font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/40"
                        >
                            Start Project
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-neutral-900/95 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden max-h-[80vh] overflow-y-auto"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5 last:border-none"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="#contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white mt-2">
                                Start Project
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
