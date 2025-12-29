"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const MATERIALS = [
    { id: "leather", label: "Leather" },
    { id: "suede", label: "Suede / Nubuck" },
    { id: "knit", label: "Primeknit / Mesh" },
    { id: "canvas", label: "Canvas" },
];

const ROUTINES = {
    leather: {
        title: "Leather Protocol",
        steps: [
            {
                id: 1,
                action: "PREP",
                detail: "Dry brush to remove loose soil.",
                product: "Premium Brush (Stiff)",
                image: "/images/product-kit.png"
            },
            {
                id: 2,
                action: "CLEAN",
                detail: "Apply Bio-Foam. Scrub in circular motion.",
                product: "Bio-Foam Cleanser",
                image: "/images/product-cleaner.png"
            },
            {
                id: 3,
                action: "PROTECT",
                detail: "Buff with microfiber. Apply Nano-Shield.",
                product: "Nano-Shield Coat",
                image: "/images/product-protector.png"
            },
        ]
    },
    suede: {
        title: "Suede Restoration",
        steps: [
            { id: 1, action: "RESET", detail: "Use eraser block to lift nap.", product: "Eraser Block", image: "/images/product-kit.png" },
            { id: 2, action: "CLEAN", detail: "Dry foam clean only. DO NOT saturare.", product: "Bio-Foam Cleanser", image: "/images/product-cleaner.png" },
            { id: 3, action: "REVIVE", detail: "Reset nap with brass brush.", product: "Premium Brush (Soft)", image: "/images/product-kit.png" },
        ]
    },
    knit: {
        title: "Technical Knit Care",
        steps: [
            { id: 1, action: "SUPPORT", detail: "Insert shoe tree to maintain shape.", product: "Shoe Tree", image: "/images/product-kit.png" },
            { id: 2, action: "DEEP CLEAN", detail: "Soak brush, apply foam, scrub fibers.", product: "Bio-Foam Cleanser", image: "/images/product-cleaner.png" },
            { id: 3, action: "AIR DRY", detail: "Let dry naturally. 24 hours.", product: "Air Circulation", image: "/images/product-protector.png" },
        ]
    },
    canvas: {
        title: "Canvas Renewal",
        steps: [
            { id: 1, action: "SCRUB", detail: "Heavy scrub with stiff bristles.", product: "Stiff Brush", image: "/images/product-kit.png" },
            { id: 2, action: "RINSE", detail: "Rinse foam with damp towel.", product: "Microfiber Towel", image: "/images/product-cleaner.png" },
            { id: 3, action: "SHIELD", detail: "Double coat of Nano-Shield.", product: "Nano-Shield Coat", image: "/images/product-protector.png" },
        ]
    },
};

export function RoutineBuilder() {
    const [activeMaterial, setActiveMaterial] = useState("leather");

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-12">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Technical Guidance</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-oswald text-white uppercase">Define Your Material</h3>
                    <p className="text-muted-foreground mt-4 max-w-xl">
                        Different materials require specific protocols. Select your sneaker's primary material to generate the optimal care routine.
                    </p>
                </div>

                {/* Material Selector */}
                <div className="flex flex-wrap gap-4 mb-16">
                    {MATERIALS.map((mat) => (
                        <Button
                            key={mat.id}
                            onClick={() => setActiveMaterial(mat.id)}
                            variant={activeMaterial === mat.id ? "default" : "outline"}
                            className={`h-12 px-8 uppercase tracking-wider ${activeMaterial === mat.id
                                    ? "bg-primary text-white border-primary"
                                    : "bg-transparent text-muted-foreground border-white/10 hover:border-primary hover:text-white"
                                }`}
                        >
                            {mat.label}
                        </Button>
                    ))}
                </div>

                {/* Dynamic Routine Display */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <h4 className="text-3xl font-oswald uppercase text-white">
                            {ROUTINES[activeMaterial as keyof typeof ROUTINES].title}
                        </h4>
                        <div className="flex items-center space-x-2 text-primary">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-xs font-mono uppercase tracking-widest">Protocol Active</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatePresence mode="wait">
                            {ROUTINES[activeMaterial as keyof typeof ROUTINES].steps.map((step, idx) => (
                                <motion.div
                                    key={`${activeMaterial}-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-4 -top-4 text-6xl font-oswald font-bold text-white/5 select-none text-outline">
                                        0{step.id}
                                    </div>

                                    <div className="relative z-10 bg-black/40 border border-white/5 hover:border-primary/50 transition-colors p-6 rounded-xl h-full flex flex-col">
                                        <div className="mb-6 aspect-square relative bg-white/5 rounded-lg overflow-hidden">
                                            <Image
                                                src={step.image}
                                                alt={step.product}
                                                fill
                                                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        <h5 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{step.action}</h5>
                                        <p className="text-white font-medium mb-1">{step.product}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{step.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 flex justify-end">
                        <Button size="lg" className="uppercase tracking-widest">
                            Get This Kit <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
