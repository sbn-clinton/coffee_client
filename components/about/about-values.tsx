"use client"

import { motion } from "framer-motion"
import { Heart, Leaf, Users, Award } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every cup is crafted with love and dedication to the art of coffee making.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to environmentally responsible practices and supporting farming communities.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections between coffee lovers, farmers, and our local community.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Uncompromising standards in sourcing, roasting, and delivering exceptional coffee.",
  },
]

export function AboutValues() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient">Our Core Values</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These principles guide everything we do, from sourcing beans to serving our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
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
                <value.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
