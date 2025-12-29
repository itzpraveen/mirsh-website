import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-oswald tracking-tighter uppercase">MIRSH</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Premium care for your rotation. Formulated in the lab, tested on the streets.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Shop */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white">Shop</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/products?category=cleaning" className="hover:text-primary transition-colors">Cleaning</Link></li>
                            <li><Link href="/products?category=protection" className="hover:text-primary transition-colors">Protection</Link></li>
                            <li><Link href="/products?category=accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/routines" className="hover:text-primary transition-colors">How to Use</Link></li>
                            <li><Link href="/ingredients" className="hover:text-primary transition-colors">Ingredients & Safety</Link></li>
                            <li><Link href="/help" className="hover:text-primary transition-colors">Help Center & FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Business */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white">Business</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/dealer" className="hover:text-primary transition-colors">Become a Dealer</Link></li>
                            <li><Link href="/stockists" className="hover:text-primary transition-colors">Find a Stockist</Link></li>
                            <li><Link href="/press" className="hover:text-primary transition-colors">Press Kit</Link></li>
                        </ul>
                        <div className="pt-4">
                            <Link href="mailto:hello@mirsh.com" className="flex items-center text-sm text-primary hover:text-primary/80">
                                <Mail className="w-4 h-4 mr-2" /> hello@mirsh.com
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} MIRSH LABS. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
