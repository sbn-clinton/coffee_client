"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const categories = [
  { id: "all", name: "All Posts", count: 24 },
  { id: "brewing", name: "Brewing Guides", count: 8 },
  { id: "origins", name: "Origin Stories", count: 6 },
  { id: "reviews", name: "Reviews", count: 5 },
  { id: "news", name: "Industry News", count: 3 },
  { id: "recipes", name: "Recipes", count: 2 },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-8 bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={activeCategory === category.id ? "coffee-gradient" : ""}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
