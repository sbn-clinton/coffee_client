"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types";
import { useCart } from "@/components/providers/cart-provider";
import { ShoppingCart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const roastLevelColors = {
    light: "bg-amber-100 text-amber-800",
    medium: "bg-orange-100 text-orange-800",
    dark: "bg-stone-100 text-stone-800",
  };

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={
              `${process.env.NEXT_PUBLIC_API_URL}/products/${product._id}/image` ||
              "/placeholder.svg"
            }
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>
          )}
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className={roastLevelColors[product.roastLevel]}
            >
              {product.roastLevel}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4 flex-grow">
          <div className="mb-2">
            <h3 className="font-semibold text-lg mb-1">
              <Link
                href={`/shop/${product._id}`}
                className="hover:text-primary transition-colors"
              >
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {product.origin}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-current text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">(4.8)</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {product.tastingNotes?.slice(0, 3).map((note) => (
              <Badge key={note} variant="outline" className="text-xs">
                {note}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <div>
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-muted-foreground ml-1">
                / {product.weight}
              </span>
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={!product.isActive}
              className="coffee-gradient"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.isActive ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
