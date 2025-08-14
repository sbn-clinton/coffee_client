"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface ProductFiltersProps {
  filters: {
    category: string
    roastLevel: string
    origin: string
  }
  onFiltersChange: (filters: any) => void
}

const filterOptions = {
  category: ["Single Origin", "Blend", "Decaf", "Espresso"],
  roastLevel: ["light", "medium", "dark"],
  origin: ["Ethiopia", "Colombia", "Brazil", "Guatemala", "Kenya", "Costa Rica"],
}

export function ProductFilters({ filters, onFiltersChange }: ProductFiltersProps) {
  const updateFilter = (key: string, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: filters[key as keyof typeof filters] === value ? "" : value,
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      category: "",
      roastLevel: "",
      origin: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some((filter) => filter !== "")

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div>
          <h4 className="font-medium mb-3">Category</h4>
          <div className="space-y-2">
            {filterOptions.category.map((category) => (
              <Button
                key={category}
                variant={filters.category === category ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => updateFilter("category", category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Roast Level Filter */}
        <div>
          <h4 className="font-medium mb-3">Roast Level</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.roastLevel.map((level) => (
              <Badge
                key={level}
                variant={filters.roastLevel === level ? "default" : "outline"}
                className="cursor-pointer capitalize"
                onClick={() => updateFilter("roastLevel", level)}
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>

        {/* Origin Filter */}
        <div>
          <h4 className="font-medium mb-3">Origin</h4>
          <div className="space-y-2">
            {filterOptions.origin.map((origin) => (
              <Button
                key={origin}
                variant={filters.origin === origin ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => updateFilter("origin", origin)}
              >
                {origin}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
