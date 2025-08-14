"use client";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { apiQueries } from "@/lib/api";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Mock data for development
const mockProducts = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    description: "Bright and floral with notes of lemon and jasmine",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300&text=Ethiopian+Coffee",
    category: "Single Origin",
    roastLevel: "light" as const,
    origin: "Ethiopia",
    inStock: true,
    slug: "ethiopian-yirgacheffe",
    weight: "12oz",
    tastingNotes: ["Lemon", "Jasmine", "Bright"],
    processingMethod: "Washed",
    altitude: "1,800-2,200m",
    featured: true,
  },
  {
    id: "2",
    name: "Colombian Supremo",
    description: "Rich and balanced with chocolate and caramel notes",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300&text=Colombian+Coffee",
    category: "Single Origin",
    roastLevel: "medium" as const,
    origin: "Colombia",
    inStock: true,
    slug: "colombian-supremo",
    weight: "12oz",
    tastingNotes: ["Chocolate", "Caramel", "Balanced"],
    processingMethod: "Washed",
    altitude: "1,200-1,800m",
    featured: true,
  },
  {
    id: "3",
    name: "House Blend",
    description: "Our signature blend with a smooth, full-bodied flavor",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300&text=House+Blend",
    category: "Blend",
    roastLevel: "medium" as const,
    origin: "Multi-Origin",
    inStock: true,
    slug: "house-blend",
    weight: "12oz",
    tastingNotes: ["Smooth", "Full-bodied", "Balanced"],
    processingMethod: "Various",
    altitude: "Various",
    featured: true,
  },
];

export function FeaturedProducts() {
  const { data, isLoading, error } = useQuery({
    ...apiQueries.products({ featured: true }),
    // Use mock data as fallback
    // placeholderData: { products: mockProducts },
  });

  const products = data?.data?.products || [];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient">
            Featured Coffees
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most popular and exceptional coffee selections, each
            with its own unique character and story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="coffee-gradient">
            <Link href="/shop">
              View All Coffees
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
