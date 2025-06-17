"use client"

import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "whitespace-nowrap transition-colors",
            selectedCategory === category.id && "bg-primary text-primary-foreground",
          )}
        >
          {category.label}
        </Button>
      ))}
    </div>
  )
}
