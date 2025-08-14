"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useMutation } from "@tanstack/react-query"
import { api } from "@/lib/api"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan?: {
    id: string
    name: string
    price: number
    frequency: string
  }
}

export function SubscriptionModal({ isOpen, onClose, selectedPlan }: SubscriptionModalProps) {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const mutation = useMutation({
    mutationFn: (data: { planId: string; email: string }) => api.subscribe(data.planId, data.email),
    onSuccess: () => {
      toast({
        title: "Subscription Started!",
        description: "Welcome to our coffee subscription. Your first delivery will arrive soon!",
      })
      setEmail("")
      onClose()
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to start subscription. Please try again.",
        variant: "destructive",
      })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedPlan && email) {
      mutation.mutate({ planId: selectedPlan.id, email })
    }
  }

  if (!selectedPlan) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Start Your {selectedPlan.name} Subscription</DialogTitle>
        </DialogHeader>

        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-primary mb-2">
            ${selectedPlan.price}/{selectedPlan.frequency}
          </div>
          <p className="text-muted-foreground">Your first delivery will arrive within 3-5 business days</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full coffee-gradient" disabled={mutation.isPending}>
            {mutation.isPending ? "Starting Subscription..." : "Start Subscription"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          You can skip, pause, or cancel your subscription at any time.
        </p>
      </DialogContent>
    </Dialog>
  )
}
