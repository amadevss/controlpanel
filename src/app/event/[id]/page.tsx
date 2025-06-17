import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { events } from "@/lib/data"
import { formatDateRange } from "@/lib/utils"

interface EventDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params
  const event = events.find((e) => e.id === id)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src={event.imageUrl || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </Badge>
              </div>
            </div>

            {/* Event Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                  <p className="text-lg text-muted-foreground">By {event.organizer}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">About this event</h2>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {event.isFree ? (
                    <span className="text-2xl font-bold text-green-600">Free</span>
                  ) : (
                    <span className="text-2xl font-bold">${event.price}</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Register
                </Button>
                <p className="text-center text-sm text-muted-foreground">{event.attendees} people are going</p>
              </CardContent>
            </Card>

            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Date and time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{formatDateRange(event.startDate, event.endDate)}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{event.location}</p>
                {event.isOnline && (
                  <Badge variant="secondary" className="mt-2">
                    Online Event
                  </Badge>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Attendees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{event.attendees} people attending</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
