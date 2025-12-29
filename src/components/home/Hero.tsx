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
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            />

            <div className="container relative z-10 px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left space-y-6"
                    >
                        <h2 className="text-primary tracking-widest uppercase font-bold text-sm md:text-base">
                            Essential Sneaker Care
                        </h2>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold font-oswald text-white uppercase tracking-tighter leading-none">
                            Respect<br />Your Rotation
                        </h1>
                        <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl font-light">
                            Advanced biotechnology meets street-ready performance. Keep your grail pairs in deadstock condition.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 pt-8">
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

                    {/* Hero Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="flex-1 relative w-full aspect-square max-w-[600px] lg:h-[800px] lg:w-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <div
                            className="w-full h-full bg-contain bg-center bg-no-repeat filter drop-shadow-[0_0_30px_rgba(230,0,255,0.3)]"
                            style={{ backgroundImage: "url('/images/product-cleaner.png')" }}
                        />
                        {/* Floating Elements Animation */}
                        <div className="absolute top-1/4 right-0 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    </motion.div>
                </div>
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
