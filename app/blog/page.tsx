import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <BlogHero />
        <BlogCategories />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
