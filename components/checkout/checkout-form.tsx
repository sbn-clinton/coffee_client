"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/components/providers/cart-provider";
import { api } from "@/lib/api";
import { CreditCard, User, MapPin } from "lucide-react";

interface CheckoutFormData {
  fullName: string;
  email: string;
  number: string;
  address: string;
  city: string;
  state: string;
  //   country: string;
  zipCode: string;
}

// const countries = [
//   { value: "US", label: "United States" },
//   { value: "CA", label: "Canada" },
//   { value: "GB", label: "United Kingdom" },
//   { value: "AU", label: "Australia" },
//   { value: "DE", label: "Germany" },
//   { value: "FR", label: "France" },
// ];

const usStates = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  // Add more states as needed
];

export function CheckoutForm() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    number: "",
    address: "",
    city: "",
    state: "",
    // country: "US",
    zipCode: "",
  });
  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});

  const { state: cartState } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const checkoutMutation = useMutation({
    mutationFn: async (data: CheckoutFormData) => {
      const orderData = {
        items: cartState.items,
        total: cartState.total,
        shippingAddress: {
          fullName: data.fullName,
          email: data.email,
          number: data.number,
          street: data.address,
          city: data.city,
          state: data.state,
          //   country: data.country,
          zipCode: data.zipCode,
        },
      };
      console.log("Creating order with data:", orderData);
      return api.createOrder(orderData);
    },
    onSuccess: (response) => {
      // In a real app, this would redirect to Stripe Checkout
      // For now, we'll simulate the redirect
      toast({
        title: "Redirecting to payment...",
        description: "You will be redirected to Stripe Checkout shortly.",
      });

      const { checkoutUrl } = response.data;
      console.log("Checkout URL:", checkoutUrl);
      if (checkoutUrl) {
        window.location.href = checkoutUrl; // Real redirect to Stripe
      } else {
        toast({
          title: "Payment failed",
          description: "Checkout URL missing from response.",
          variant: "destructive",
        });
      }
      router.push("/checkout/success");

      // Simulate redirect to Stripe Checkout
      // setTimeout(() => {
      //   // In production, you would redirect to the Stripe Checkout URL
      //   // window.location.href = response.checkoutUrl

      //   // For demo purposes, redirect to a success page
      //   router.push("/checkout/success");
      // }, 2000);
    },
    onError: (error) => {
      toast({
        title: "Checkout failed",
        description:
          "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    },
  });

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    // if (!formData.country.trim()) {
    //   newErrors.country = "Country is required";
    // }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartState.items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }

    if (validateForm()) {
      checkoutMutation.mutate(formData);
    }
  };

  const handleInputChange = (field: keyof CheckoutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Customer Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className={errors.fullName ? "border-destructive" : ""}
              />
              {errors.fullName && (
                <p className="text-sm text-destructive mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="number">Phone Number *</Label>
              <Input
                id="number"
                type="text"
                placeholder="+234 567 8901"
                value={formData.number}
                onChange={(e) => handleInputChange("number", e.target.value)}
                className={errors.number ? "border-destructive" : ""}
              />
              {errors.number && (
                <p className="text-sm text-destructive mt-1">{errors.number}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Shipping Address */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Shipping Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                type="text"
                placeholder="123 Main Street"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className={errors.address ? "border-destructive" : ""}
              />
              {errors.address && (
                <p className="text-sm text-destructive mt-1">
                  {errors.address}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="New York"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className={errors.city ? "border-destructive" : ""}
                />
                {errors.city && (
                  <p className="text-sm text-destructive mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  className={errors.zipCode ? "border-destructive" : ""}
                />
                {errors.zipCode && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.zipCode}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => handleInputChange("state", value)}
                >
                  <SelectTrigger
                    className={errors.state ? "border-destructive" : ""}
                  >
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {usStates.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.state && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.state}
                  </p>
                )}
              </div>

              {/* <div>
                <Label htmlFor="country">Country *</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => handleInputChange("country", value)}
                >
                  <SelectTrigger
                    className={errors.country ? "border-destructive" : ""}
                  >
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.country && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.country}
                  </p>
                )}
              </div> */}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full coffee-gradient"
          disabled={checkoutMutation.isPending || cartState.items.length === 0}
        >
          {checkoutMutation.isPending ? (
            "Processing..."
          ) : (
            <>
              <CreditCard className="h-5 w-5 mr-2" />
              Continue to Payment
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          You will be redirected to Stripe Checkout to complete your payment
          securely.
        </p>
      </form>
    </motion.div>
  );
}
