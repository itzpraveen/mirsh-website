import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { FEATURED_PRODUCTS } from "@/lib/data"; // In a real app, this would be a fuller list

export default function ProductsPage() {
    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <h1 className="text-5xl font-bold font-oswald uppercase mb-8">All Products</h1>

            <div className="flex space-x-4 mb-12 border-b border-white/10 pb-4 overflow-x-auto">
                <Button variant="ghost" className="text-primary font-bold">All</Button>
                <Button variant="ghost">Cleaning</Button>
                <Button variant="ghost">Protection</Button>
                <Button variant="ghost">Accessories</Button>
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
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <h4 className="text-xl font-bold font-oswald uppercase text-white mb-2">{product.name}</h4>
                            <p className="text-sm text-primary font-medium mb-3">{product.tagline}</p>
                            <p className="text-muted-foreground text-sm">{product.description}</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Link href={`/products/${product.id}`} className="w-full">
                                <Button className="w-full uppercase tracking-wider bg-transparent border border-white/20 hover:bg-white hover:text-black hover:border-white text-white">
                                    Details
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
