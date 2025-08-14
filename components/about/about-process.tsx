"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const processSteps = [
  "Direct relationships with coffee farmers worldwide",
  "Careful selection of premium green beans",
  "Small-batch roasting with our air-cooling method",
  "Quality testing and flavor profiling",
  "Fresh packaging and rapid delivery",
];

export function AboutProcess() {
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
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              Our Unique Process
            </h2>
            <p className="text-muted-foreground mb-8">
              From farm to cup, we maintain the highest standards at every step
              of our coffee journey.
            </p>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about/process.jpg"
              alt="Our coffee process"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
