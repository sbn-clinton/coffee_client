import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { QueryProvider } from "@/components/providers/query-provider"
import { CartProvider } from "@/components/providers/cart-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Artisan Coffee Roasters - Air-Cooled to Perfection",
  description:
    "Premium artisan coffee beans, air-cooled to perfection. Discover our unique roasting process and subscribe to fresh coffee delivered to your door.",
  keywords: "artisan coffee, specialty coffee, air-cooled roasting, coffee subscription, premium coffee beans",
  authors: [{ name: "Artisan Coffee Roasters" }],
  openGraph: {
    title: "Artisan Coffee Roasters - Air-Cooled to Perfection",
    description: "Premium artisan coffee beans, air-cooled to perfection.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <QueryProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
