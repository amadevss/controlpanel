"use client"

import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin, Users, Heart, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Event } from "@/lib/types"
import { formatDate, formatTime, getRelativeTimeString } from "@/lib/utils"

interface EventCardProps {
  event: Event
  viewMode?: "grid" | "list"
}

export function EventCard({ event, viewMode = "grid" }: EventCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="flex">
          <div className="relative w-32 h-24 flex-shrink-0">
            <Image src={event.imageUrl || "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"} alt={event.title} fill className="object-cover" />
            <div className="absolute top-2 left-2">
              {event.isFree ? (
                <Badge variant="secondary" className="text-xs">
                  Free
                </Badge>
              ) : (
                <Badge variant="secondary" className="text-xs">
                  ${event.price}
                </Badge>
              )}
            </div>
          </div>
          <CardContent className="flex-1 p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <Link href={`/event/${event.id}`}>
                  <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                  {getRelativeTimeString(event.startDate)}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 ml-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative aspect-video">
        <Image
          src={event.imageUrl || "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {event.isOnline && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Online
            </Badge>
          )}
          {event.isFree ? (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Free
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              ${event.price}
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <Link href={`/event/${event.id}`}>
            <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">{event.title}</h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>
              {formatDate(event.startDate)}, {formatTime(event.startDate)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{event.attendees} attending</span>
            </div>
            <p className="text-xs text-muted-foreground">{event.organizer}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
