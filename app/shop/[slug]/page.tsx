"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { apiQueries } from "@/lib/api";
import { useCart } from "@/components/providers/cart-provider";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { use } from "react";
import { useParams } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);

  console.log("Fetching product with slug:", slug);
  const { data, isLoading, error } = useQuery(apiQueries.product(slug));

  const { dispatch } = useCart();
  const { toast } = useToast();

  const product = data?.data?.product;
  console.log("Fetched product:", product);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: "ADD_ITEM", payload: product });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-muted rounded-lg h-96" />
              <div className="space-y-4">
                <div className="bg-muted rounded h-8 w-3/4" />
                <div className="bg-muted rounded h-4 w-1/2" />
                <div className="bg-muted rounded h-20" />
                <div className="bg-muted rounded h-10 w-1/3" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Product not found</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const roastLevelColors: any = {
    light: "bg-amber-100 text-amber-800",
    medium: "bg-orange-100 text-orange-800",
    dark: "bg-stone-100 text-stone-800",
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className={roastLevelColors[product.roastLevel]}
                >
                  {product.roastLevel} roast
                </Badge>
                <Badge variant="outline">{product.category}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
                {product.name}
              </h1>

              <p className="text-muted-foreground text-lg mb-4">
                Origin: {product.origin}
              </p>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-muted-foreground ml-2">
                  (4.8) • 127 reviews
                </span>
              </div>

              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
            </div>

            {/* Tasting Notes */}
            <div>
              <h3 className="font-semibold mb-3">Tasting Notes</h3>
              <div className="flex flex-wrap gap-2">
                {product.tastingNotes?.map((note: string) => (
                  <Badge key={note} variant="outline">
                    {note}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Processing:</span>
                <p className="font-medium">{product.processingMethod}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Altitude:</span>
                <p className="font-medium">{product.altitude}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Weight:</span>
                <p className="font-medium">{product.weight}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Stock:</span>
                <p
                  className={`font-medium ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>

            <Separator />

            {/* Price and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    / {product.weight}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="lg"
                className="w-full coffee-gradient"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free shipping over $50</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Quality guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <RotateCcw className="h-4 w-4 text-primary" />
                <span>30-day returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
