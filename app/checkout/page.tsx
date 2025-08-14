import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { CheckoutSummary } from "@/components/checkout/checkout-summary";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-playfair font-bold mb-8 text-gradient">
              Checkout
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <CheckoutForm />
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
