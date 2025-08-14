import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactMap />
      </main>
      <Footer />
    </div>
  )
}
