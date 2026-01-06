"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CodeSnippet() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none overflow-hidden select-none font-mono text-sm leading-relaxed text-white">
            <pre>
                {`
import { Future } from '@codenation/core';
import { Dominance } from '@codenation/dominance';

class DigitalEmpire extends Agency {
  constructor() {
    super({
      mode: 'DOMINANCE',
      speed: 99,
      quality: 'ELITE'
    });
  }

  async evolve(client: Client): Promise<Success> {
    const vision = await this.discovery(client);
    const reality = await this.build(vision, {
      stack: ['Next.js', 'Tailwind', 'AI'],
      performance: 'OPTIMIZED'
    });
    
    return reality.scale();
  }
}

export default new DigitalEmpire();
                `.repeat(5)}
            </pre>
        </div>
    );
}

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 pt-24 md:pt-32">
            <CodeSnippet />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950 z-0" />

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide"
                    >
                        EST. 2022 • 100+ VISIONS RENDERED INTO REALITY
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-8 tracking-tighter text-white">
                        WE DON'T JUST CODE. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            WE BUILD DIGITAL DOMINANCE.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        High-performance websites for brands that refuse to blend in.
                        Speed, scale, and ROI baked into every pixel.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto rounded-full px-8 py-7 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 border-none whitespace-nowrap"
                            >
                                Start Your Evolution
                            </Button>
                        </Link>
                        <Link href="#work" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto rounded-full px-8 py-7 text-lg font-medium border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 whitespace-nowrap"
                            >
                                View Our Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
