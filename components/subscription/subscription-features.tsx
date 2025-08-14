"use client"

import { motion } from "framer-motion"
import { Shield, Truck, Calendar, Coffee, Gift, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every bag is guaranteed fresh or we'll replace it for free.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on all subscription orders.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Skip, pause, or modify your delivery schedule anytime.",
  },
  {
    icon: Coffee,
    title: "Curated Selection",
    description: "Hand-picked beans from the world's finest coffee regions.",
  },
  {
    icon: Gift,
    title: "Exclusive Access",
    description: "First access to limited edition roasts and special blends.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our community of coffee enthusiasts and share experiences.",
  },
]

export function SubscriptionFeatures() {
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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient">
            Why Choose Our Subscription?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            More than just coffee delivery - it's a complete coffee experience designed around your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                <feature.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
