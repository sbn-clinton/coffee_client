"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Coffee, Truck } from "lucide-react";

const benefits = [
  "Fresh coffee delivered to your door",
  "Skip, pause, or cancel anytime",
  "Exclusive subscriber discounts",
  "First access to new roasts",
];

export function SubscriptionCTA() {
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
              Never Run Out of Great Coffee
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of coffee lovers who trust us to deliver freshly
              roasted beans right to their doorstep. Customize your subscription
              to match your taste and schedule.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="coffee-gradient">
                <Link href="/subscription">Start Subscription</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/shop">Shop One-Time</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0 relative  w-full h-72  md:h-96 ">
                <Image
                  src="/images/home/sub.jpg"
                  alt="Coffee subscription box"
                  fill
                  className="object-fill"
                />
              </CardContent>
            </Card>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="flex items-center space-x-2">
                <Coffee className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Fresh Roasted</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1.5,
              }}
            >
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
