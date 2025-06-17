"use client"

import { useState, useMemo } from "react"
import { Grid3X3, List, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CategoryFilter } from "@/components/category-filter"
import { EventCard } from "@/components/event-card"
import { events } from "@/lib/data"
import type { Event, ViewMode, TabMode } from "@/lib/types"

export function EventFeed() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [activeTab, setActiveTab] = useState<TabMode>("upcoming")

  const filteredEvents = useMemo(() => {
    let filtered = events

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((event) => event.category === selectedCategory)
    }

    // Filter by tab (upcoming vs today)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (activeTab === "today") {
      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.startDate)
        eventDate.setHours(0, 0, 0, 0)
        return eventDate.getTime() === today.getTime()
      })
    } else {
      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.startDate)
        return eventDate >= today
      })
    }

    return filtered.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
  }, [selectedCategory, activeTab])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Events</h1>
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="icon" onClick={() => setViewMode("grid")}>
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="icon" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabMode)}>
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          <EventGrid events={filteredEvents} viewMode={viewMode} />
        </TabsContent>

        <TabsContent value="today" className="mt-6">
          <EventGrid events={filteredEvents} viewMode={viewMode} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface EventGridProps {
  events: Event[]
  viewMode: ViewMode
}

function EventGrid({ events, viewMode }: EventGridProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <SlidersHorizontal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">No events found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or check back later for new events.</p>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} viewMode="list" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} viewMode="grid" />
      ))}
    </div>
  )
}
