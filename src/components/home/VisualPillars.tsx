import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function VisualPillars() {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Card 1: Active Cleaning - Large Visual */}
                    <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                        <Image
                            src="/images/product-cleaner.png"
                            alt="Active Foam Cleaning Action"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-10 max-w-lg">
                            <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Bio-Active Formula
                            </div>
                            <h3 className="text-5xl font-bold font-oswald text-white uppercase leading-none mb-6">
                                Foam On.<br />Dirt Off.
                            </h3>
                            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                                Our proprietary enzymatic foam lifts stubborn stains at a molecular level without water saturation. Safe for delicate suedes and premium knits.
                            </p>
                            <Link href="/products" className="inline-flex items-center text-white border-b border-primary pb-1 hover:text-primary transition-colors uppercase tracking-wider text-sm font-bold">
                                See The Science <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Card 2: Protection - Abstract Visual */}
                        <div className="relative h-[280px] rounded-3xl overflow-hidden group bg-neutral-900 border border-white/5">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold font-oswald text-white uppercase mb-2">Nano Shield Defense</h3>
                                <p className="text-gray-400 max-w-xs mb-4">Superhydrophobic coating that repels liquids. Invisible armor for your rotation.</p>
                                <div className="flex items-center gap-4 text-xs font-mono text-primary uppercase">
                                    <span>• SiO2 Technology</span>
                                    <span>• UV Resistant</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Safety - Solid Visual */}
                        <div className="relative h-[280px] rounded-3xl overflow-hidden bg-primary/10 border border-primary/20 p-8 flex flex-col justify-center">
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                {/* Abstract icon or shape could go here */}
                                <div className="w-32 h-32 rounded-full border-4 border-primary/50" />
                            </div>

                            <h3 className="text-3xl font-bold font-oswald text-white uppercase mb-4">Pure & Safe</h3>
                            <p className="text-gray-300 max-w-sm mb-6">
                                Engineered without harsh solvents. No acetone, no bleach, no aerosols. Just pure, concentrated cleaning power that respects your materials.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Leather', 'Suede', 'Nubuck', 'Canvas', 'Knit'].map((mat) => (
                                    <span key={mat} className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] uppercase tracking-wider text-white">
                                        {mat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
