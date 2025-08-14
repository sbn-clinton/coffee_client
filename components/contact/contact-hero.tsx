"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-gradient">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our coffee, need help with your order, or want to learn more about our roasting
            process? We'd love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
