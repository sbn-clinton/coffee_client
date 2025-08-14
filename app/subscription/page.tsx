import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { SubscriptionHero } from "@/components/subscription/subscription-hero"
import { SubscriptionPlans } from "@/components/subscription/subscription-plans"
import { SubscriptionFeatures } from "@/components/subscription/subscription-features"
import { SubscriptionFAQ } from "@/components/subscription/subscription-faq"

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <SubscriptionHero />
        <SubscriptionPlans />
        <SubscriptionFeatures />
        <SubscriptionFAQ />
      </main>
      <Footer />
    </div>
  )
}
