"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import { SubscriptionModal } from "./subscription-modal"

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for casual coffee drinkers",
    price: 19.99,
    frequency: "monthly",
    features: ["1 bag of coffee per month", "Free shipping", "Skip or cancel anytime", "Access to exclusive blends"],
    popular: false,
  },
  {
    id: "enthusiast",
    name: "Enthusiast",
    description: "For the true coffee lover",
    price: 34.99,
    frequency: "monthly",
    features: [
      "2 bags of coffee per month",
      "Free shipping",
      "Skip or cancel anytime",
      "Access to exclusive blends",
      "Tasting notes included",
      "Priority customer support",
    ],
    popular: true,
  },
  {
    id: "connoisseur",
    name: "Connoisseur",
    description: "The ultimate coffee experience",
    price: 49.99,
    frequency: "monthly",
    features: [
      "3 bags of coffee per month",
      "Free shipping",
      "Skip or cancel anytime",
      "Access to exclusive blends",
      "Detailed tasting notes",
      "Priority customer support",
      "Early access to new roasts",
      "Brewing equipment discounts",
    ],
    popular: false,
  },
]

export function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
    setIsModalOpen(true)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient">Choose Your Perfect Plan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the subscription that fits your coffee consumption and discover new flavors every month.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-playfair">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.frequency}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="bg-primary/10 rounded-full p-1">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 ${plan.popular ? "coffee-gradient" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    Select {plan.name}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={plans.find((p) => p.id === selectedPlan)}
      />
    </section>
  )
}
