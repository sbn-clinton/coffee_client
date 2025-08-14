"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the subscription work?",
    answer:
      "Choose your plan, and we'll deliver freshly roasted coffee to your door based on your selected frequency. You can skip, pause, or cancel anytime through your account dashboard.",
  },
  {
    question: "Can I change my subscription plan?",
    answer:
      "You can upgrade, downgrade, or modify your subscription plan at any time. Changes will take effect with your next delivery.",
  },
  {
    question: "What if I don't like the coffee?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not happy with any coffee, contact us and we'll send you a replacement or provide a full refund.",
  },
  {
    question: "How fresh is the coffee?",
    answer:
      "All coffee is roasted to order and shipped within 24-48 hours of roasting. You'll receive your coffee at peak freshness, typically within 3-5 days of roasting.",
  },
  {
    question: "Can I pause my subscription?",
    answer:
      "Yes! You can pause your subscription for up to 3 months at a time. This is perfect for vacations or when you have too much coffee on hand.",
  },
  {
    question: "Do you offer decaf options?",
    answer:
      "Yes, we offer premium decaf options in all our subscription plans. You can specify your preference for decaf or regular coffee when setting up your subscription.",
  },
]

export function SubscriptionFAQ() {
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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our coffee subscription service.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
