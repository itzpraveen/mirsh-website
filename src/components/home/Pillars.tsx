import { Zap, ShieldCheck, Droplets } from "lucide-react";
import { PILLARS } from "@/lib/data";

const iconMap = {
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Droplets: Droplets,
};

export function Pillars() {
    return (
        <section className="py-24 bg-background border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {PILLARS.map((pillar, index) => {
                        const Icon = iconMap[pillar.icon as keyof typeof iconMap];
                        return (
                            <div key={index} className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold font-oswald uppercase tracking-wider">{pillar.title}</h3>
                                <p className="text-muted-foreground leading-relaxed max-w-xs">{pillar.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
