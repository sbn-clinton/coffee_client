"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Coffee, Calendar, Truck } from "lucide-react";

export function SubscriptionHero() {
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
              Coffee Delivered Fresh
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Never run out of your favorite coffee again. Our subscription
              service delivers freshly roasted beans right to your door, exactly
              when you need them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Fresh Roasted</h3>
                  <p className="text-sm text-muted-foreground">
                    Weekly roasting
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Flexible</h3>
                  <p className="text-sm text-muted-foreground">
                    Skip or cancel anytime
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    On all subscriptions
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="coffee-gradient">
              Choose Your Plan
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full  aspect-[1/1]"
          >
            <Image
              src="/images/sub/hero.jpg"
              alt="Coffee subscription"
              fill
              className="rounded-lg shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
