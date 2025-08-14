"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BlogHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-gradient">
              Coffee Stories & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the world of coffee through our expert insights, brewing
              guides, origin stories, and the latest trends in the coffee
              industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-primary">
                  Brewing Guides
                </span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-primary">
                  Origin Stories
                </span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-primary">
                  Industry News
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/blog/coffee6.jpg"
              alt="Coffee blog"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
