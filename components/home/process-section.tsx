"use client"

import { motion } from "framer-motion"
import { Wind, Thermometer, Coffee, Award } from "lucide-react"

const processSteps = [
  {
    icon: Coffee,
    title: "Bean Selection",
    description:
      "We carefully select the finest beans from sustainable farms around the world, ensuring quality and ethical sourcing.",
  },
  {
    icon: Thermometer,
    title: "Precision Roasting",
    description:
      "Our master roasters use precise temperature control to bring out the unique characteristics of each bean variety.",
  },
  {
    icon: Wind,
    title: "Air-Cooling Process",
    description:
      "Our signature air-cooling method preserves the beans' natural oils and flavors, creating a smoother, richer taste.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every batch is tested and approved by our quality team to ensure consistency and excellence in every cup.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient">Our Roasting Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the artistry behind our unique air-cooling roasting method that sets us apart from traditional
            coffee roasters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <step.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
