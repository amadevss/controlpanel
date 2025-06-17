export interface Event {
  id: string
  title: string
  description: string
  location: string
  startDate: string
  endDate: string
  imageUrl: string
  organizer: string
  attendees: number
  category: "social" | "music" | "food" | "arts" | "sports" | "wellness" | "learning" | "business"
  isOnline: boolean
  isFree: boolean
  price?: number
  tags: string[]
}

export type ViewMode = "grid" | "list"
export type TabMode = "upcoming" | "today"
