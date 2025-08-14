"use client";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { apiQueries } from "@/lib/api";
import { BlogCard } from "./blog-card";

// Mock blog data
const mockPosts = [
  {
    id: "1",
    title: "The Perfect Pour-Over: A Step-by-Step Guide",
    excerpt:
      "Master the art of pour-over coffee with our comprehensive guide to brewing the perfect cup at home.",
    content: "Full article content here...",
    image: "/images/blog/coffee1.jpg",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    slug: "perfect-pour-over-guide",
    tags: ["brewing", "guide", "pour-over"],
  },
  {
    id: "2",
    title: "Ethiopian Coffee: A Journey to the Birthplace",
    excerpt:
      "Explore the rich history and unique flavors of Ethiopian coffee, from ancient traditions to modern cultivation.",
    content: "Full article content here...",
    image: "/images/blog/coffee2.jpg",
    author: "Michael Chen",
    publishedAt: "2024-01-12",
    slug: "ethiopian-coffee-journey",
    tags: ["origins", "ethiopia", "history"],
  },
  {
    id: "3",
    title: "Cold Brew vs Iced Coffee: What's the Difference?",
    excerpt:
      "Understand the key differences between cold brew and iced coffee, and learn which one suits your taste.",
    content: "Full article content here...",
    image: "/images/blog/coffee3.jpg",
    author: "Emily Rodriguez",
    publishedAt: "2024-01-10",
    slug: "cold-brew-vs-iced-coffee",
    tags: ["brewing", "cold-brew", "comparison"],
  },
  {
    id: "4",
    title: "Sustainable Coffee: Supporting Farmers and Environment",
    excerpt:
      "Learn about sustainable coffee practices and how your choices can make a positive impact on farmers and the planet.",
    content: "Full article content here...",
    image: "/images/blog/coffee4.jpg",
    author: "David Wilson",
    publishedAt: "2024-01-08",
    slug: "sustainable-coffee-practices",
    tags: ["sustainability", "environment", "farmers"],
  },
  {
    id: "5",
    title: "Coffee Cupping: How to Taste Like a Pro",
    excerpt:
      "Develop your palate and learn the professional techniques used by coffee experts to evaluate coffee quality.",
    content: "Full article content here...",
    image: "/images/blog/coffee5.jpg",
    author: "Lisa Thompson",
    publishedAt: "2024-01-05",
    slug: "coffee-cupping-guide",
    tags: ["tasting", "cupping", "professional"],
  },
  {
    id: "6",
    title: "The Science Behind Coffee Roasting",
    excerpt:
      "Dive deep into the chemical processes that occur during coffee roasting and how they affect flavor development.",
    content: "Full article content here...",
    image: "/images/blog/coffee6.jpg",
    author: "Dr. James Miller",
    publishedAt: "2024-01-03",
    slug: "science-of-coffee-roasting",
    tags: ["roasting", "science", "chemistry"],
  },
];

export function BlogGrid() {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => Promise.resolve({ posts: mockPosts }),
  });

  const posts = response?.posts || [];

  if (isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-lg h-48 mb-4" />
                <div className="bg-muted rounded h-4 mb-2" />
                <div className="bg-muted rounded h-4 w-2/3 mb-2" />
                <div className="bg-muted rounded h-3 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
