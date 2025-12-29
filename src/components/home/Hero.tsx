"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
            </div>

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h2 className="text-primary tracking-widest uppercase font-bold text-sm md:text-base">
                        Essential Sneaker Care
                    </h2>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold font-oswald text-white uppercase tracking-tighter leading-none">
                        Respect<br />Your Rotation
                    </h1>
                    <p className="max-w-xl mx-auto text-lg text-muted-foreground md:text-xl font-light">
                        Advanced biotechnology meets street-ready performance. Keep your grail pairs in deadstock condition.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
                        <Link href="/products">
                            <Button size="lg" className="h-14 px-8 text-lg uppercase tracking-wider bg-primary hover:bg-primary/90 text-white font-bold">
                                Upgrade Your Kit
                            </Button>
                        </Link>
                        <Link href="/dealer">
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg uppercase tracking-wider text-white border-white/20 hover:bg-white/10">
                                Become a Dealer
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
        </section>
    );
}
