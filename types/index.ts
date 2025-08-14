export interface Product {
  _id: string
  name: string
  description: string
  price: number
  image: string
  images?: string[]
  category: string
  roastLevel: "light" | "medium" | "dark"
  origin: string
  isActive: boolean
  slug: string
  weight: string
  tastingNotes: string[]
  processingMethod: string
  altitude: string
  featured?: boolean
}

export interface BlogPost {
  _id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    email: string
  }
  publishedAt: string
  slug: string
  tags: string[]
}

export interface SubscriptionPlan {
  id: string
  name: string
  description: string
  price: number
  frequency: "weekly" | "biweekly" | "monthly"
  features: string[]
  popular?: boolean
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface NewsletterForm {
  email: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: string
  shippingAddress: Address
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface User {
  id: string
  name: string
  email: string
  orders: Order[]
  subscription?: {
    planId: string
    status: "active" | "paused" | "cancelled"
    nextDelivery: string
  }
}
