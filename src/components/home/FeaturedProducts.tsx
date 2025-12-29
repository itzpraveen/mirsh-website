import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FEATURED_PRODUCTS } from "@/lib/data";

export function FeaturedProducts() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">The Lineup</h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-oswald uppercase text-white">Essentials</h3>
                    </div>
                    <Link href="/products" className="hidden md:block">
                        <Button variant="link" className="text-white hover:text-primary p-0 h-auto text-base">
                            View All Products <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURED_PRODUCTS.map((product) => (
                        <Card key={product.id} className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
                            <CardHeader className="p-0">
                                <div className="aspect-square relative bg-white/5">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">
                                        {product.category}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <h4 className="text-xl font-bold font-oswald uppercase text-white mb-2">{product.name}</h4>
                                <p className="text-sm text-primary font-medium mb-3">{product.tagline}</p>
                                <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Link href={`/products/${product.id}`} className="w-full">
                                    <Button className="w-full uppercase tracking-wider bg-transparent border border-white/20 hover:bg-white hover:text-black hover:border-white text-white">
                                        View Details
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/products">
                        <Button variant="outline" className="w-full uppercase tracking-widest text-white border-white/20">
                            View All Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
