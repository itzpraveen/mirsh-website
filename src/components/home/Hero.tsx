"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-[65%_center] md:bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero-banner-action.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent" /> {/* Mobile: localized gradient for text readability */}
            </div>

            <div className="container relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl space-y-6"
                >
                    <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest backdrop-blur-sm border border-primary/20 mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span>Instant Action Formula</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-oswald text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Dirt Has<br />No Chance
                    </h1>

                    <p className="max-w-xl text-lg text-gray-200 md:text-xl font-light leading-relaxed drop-shadow-md">
                        Experience the power of our Bio-Active foam. Instantly breaks down stubborn grime while protecting your delicate materials.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4 pt-8">
                        <Link href="/products">
                            <Button size="lg" className="h-14 px-10 text-xl uppercase tracking-wider bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/25">
                                Upgrade Your Kit
                            </Button>
                        </Link>
                        <Link href="/routines">
                            <Button size="lg" variant="outline" className="h-14 px-10 text-xl uppercase tracking-wider text-white border-white/30 hover:bg-white/10 hover:border-white backdrop-blur-sm">
                                Watch It Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section >
    );
}
