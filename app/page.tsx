import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { SubscriptionCTA } from "@/components/home/subscription-cta"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ProcessSection } from "@/components/home/process-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <ProcessSection />
        <SubscriptionCTA />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
