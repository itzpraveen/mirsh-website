import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { RoutineBuilder } from "@/components/home/RoutineBuilder";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Pillars />
      <RoutineBuilder />
      <FeaturedProducts />
      {/* Other sections would go here */}
    </div>
  );
}
