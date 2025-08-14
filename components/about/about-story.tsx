"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutStory() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about/story.jpg"
              alt="Our story"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              The Story Behind Our Beans
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                It all started in 2018 when our founder, Maria Santos, traveled
                to Ethiopia and experienced coffee like never before. The rich
                flavors, the community around coffee culture, and the dedication
                of local farmers inspired her to bring that authentic experience
                home.
              </p>
              <p>
                Back in the States, Maria experimented with different roasting
                techniques, eventually developing our signature air-cooling
                process. This method preserves the beans' natural oils and
                creates the smooth, rich flavor profile our customers love.
              </p>
              <p>
                Today, we work directly with farmers from around the world,
                ensuring fair trade practices and sustainable farming methods.
                Every bag of coffee tells a story of passion, tradition, and the
                pursuit of the perfect cup.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
