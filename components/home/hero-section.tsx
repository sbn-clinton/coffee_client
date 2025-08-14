"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedLogo } from "@/components/animated-logo";
import { ArrowRight, Coffee, Leaf, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero.jpg"
          alt="Artisan coffee roasting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <AnimatedLogo size="lg" showTagline />
          </div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafted with{" "}
            <span className="text-gradient bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">
              Passion
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the difference of our unique air-cooling roasting
            process. Every bean is carefully selected and roasted to perfection.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="coffee-gradient text-white hover:opacity-90"
            >
              <Link href="/shop">
                Shop Coffee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Link href="/subscription">Start Subscription</Link>
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Coffee className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Air-Cooled Process</h3>
              <p className="text-gray-300 text-sm">
                Our unique cooling method preserves the beans' natural flavors
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Sustainably Sourced
              </h3>
              <p className="text-gray-300 text-sm">
                Direct trade relationships with farmers worldwide
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Award className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Award Winning</h3>
              <p className="text-gray-300 text-sm">
                Recognized by coffee experts and enthusiasts alike
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
