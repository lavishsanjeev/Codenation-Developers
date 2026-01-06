"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-white/5 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tighter text-white">
                            CODE<span className="text-blue-500">NATION</span>
                        </span>
                        <span className="text-neutral-500 text-sm ml-4">
                            © 2026 Digital Dominance.
                        </span>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link
                            href="https://www.instagram.com/codenationdevelopers?igsh=MWx2dmM3bHd1cXpkNQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors text-sm"
                        >
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
