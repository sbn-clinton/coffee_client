"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-playfair font-bold mb-4 text-gradient">
            Find Our Roastery
          </h2>
          <p className="text-muted-foreground">
            Visit us in person to experience our coffee and see our roasting
            process in action.
          </p>
        </motion.div>

        <motion.div
          className="relative h-96 bg-muted rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Coffee Shop Map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019758206832!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2a2ec2c9%3A0xc8e3c2a6f6171fdd!2sBlue%20Bottle%20Coffee!5e0!3m2!1sen!2sus!4v1628803074321!5m2!1sen!2sus"
            className="absolute inset-0 border-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
