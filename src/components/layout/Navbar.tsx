"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter uppercase font-oswald pl-2">
                    MIRSH<span className="text-primary">.</span>LAB
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider text-muted-foreground hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <Search className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <ShoppingBag className="w-5 h-5" />
                    </Button>
                    <Link href="/dealer" className="hidden md:block">
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white uppercase text-xs tracking-widest">
                            Dealer Portal
                        </Button>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 relative p-2"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 pt-20"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-3xl font-oswald uppercase tracking-widest hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="h-px w-20 bg-white/10 my-8" />
                        <Link href="/dealer">
                            <Button size="lg" className="w-full uppercase tracking-widest">
                                Dealer Portal
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
