import { Hero } from "@/components/home/Hero";
import { VisualPillars } from "@/components/home/VisualPillars";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { RoutineBuilder } from "@/components/home/RoutineBuilder";
import { BeforeAfter } from "@/components/home/BeforeAfter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <VisualPillars />
      <RoutineBuilder />
      <BeforeAfter />
      <FeaturedProducts />
      {/* Other sections would go here */}
    </div>
  );
}
