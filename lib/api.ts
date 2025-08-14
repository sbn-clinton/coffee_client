import { BlogPost, Product } from "@/types"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

class ApiClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const json = await response.json()
      console.log(`API request to ${url} with options:`, config)
      console.log(`Response status: ${response.status}`)
      console.log(`Response body:`, json)

     return json
    } catch (error) {
      console.error("API request failed:", error)
      throw error
    }
  }

  // Products
  async getProducts(params?: {
    category?: string
    roastLevel?: string
    origin?: string
    featured?: boolean
  }) {
    const searchParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString())
        }
      })
    }

    const query = searchParams.toString()
    return this.request<{
  status: string;
  data: {
    products: Product[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
}>(`/products${query ? `?${query}` : ""}`)
  }

  async getProduct(slug: string) {
  return this.request<{
    status: string;
    data: {
      product: Product;
    };
  }>(`/products/${slug}`);
}


  // Blog
  async getBlogPosts() {
    return this.request<{ 
      status: string;
      data: {
       posts:[];
       pagination: {
         page: number;
         limit: number;
         total: number;
         pages: number;
       };
      };
     }>("/blog")
  }

  async getBlogPost(slug: string) {
    return this.request<{ post: any }>(`/blog/${slug}`)
  }

  // Subscription
  async getSubscriptionPlans() {
    return this.request<{ plans: any[] }>("/subscription/plans")
  }

  async subscribe(planId: string, email: string) {
    return this.request<{ success: boolean }>("/subscription/subscribe", {
      method: "POST",
      body: JSON.stringify({ planId, email }),
    })
  }

  // Contact
  async submitContact(data: any) {
    return this.request<{ success: boolean }>("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  // Newsletter
  async subscribeNewsletter(email: string) {
    return this.request<{ success: boolean }>("/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
    })
  }

  // Orders
  async createOrder(orderData: any) {
    return this.request<{ 
      status: string;
      data: {
        order: any;
        checkoutUrl: any;
      };
     }>("/orders", {
      method: "POST",
      body: JSON.stringify(orderData),
    })
  }
}

export const api = new ApiClient(API_BASE_URL)

// Export individual API functions for use with TanStack Query
export const apiQueries = {
  products: (params?: Parameters<typeof api.getProducts>[0]) => ({
    queryKey: ["products", params],
    queryFn: () => api.getProducts(params),
  }),

  product: (slug: string) => ({
    queryKey: ["product", slug],
    queryFn: () => api.getProduct(slug),
  }),

  blogPosts: () => ({
    queryKey: ["blog-posts"],
    queryFn: () => api.getBlogPosts(),
  }),

  blogPost: (slug: string) => ({
    queryKey: ["blog-post", slug],
    queryFn: () => api.getBlogPost(slug),
  }),

  subscriptionPlans: () => ({
    queryKey: ["subscription-plans"],
    queryFn: () => api.getSubscriptionPlans(),
  }),
}
