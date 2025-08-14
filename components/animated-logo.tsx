"use client"

import { motion } from "framer-motion"
import { Coffee } from "lucide-react"

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg"
  showTagline?: boolean
}

export function AnimatedLogo({ size = "md", showTagline = false }: AnimatedLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  }

  const taglineSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <div className="flex items-center space-x-3">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Coffee className={`${sizeClasses[size]} text-primary`} />
        </motion.div>

        {/* Steam animation */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-0.5 h-3 bg-primary/30 rounded-full absolute"
              style={{ left: `${i * 2 - 2}px` }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -8, -16],
                scale: [1, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col">
        <motion.h1
          className={`font-playfair font-bold text-gradient ${textSizeClasses[size]}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Artisan Coffee
        </motion.h1>

        {showTagline && (
          <motion.div
            className={`text-muted-foreground ${taglineSizeClasses[size]} font-medium`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {Array.from("Air-Cooled to Perfection").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 0.6 + index * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
