"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, DollarSign, ImageIcon, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { categories } from "@/lib/data"

export default function CreateEventPage() {
  const [isOnline, setIsOnline] = useState(false)
  const [isFree, setIsFree] = useState(true)
  const [venueType, setVenueType] = useState("address")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Create Event</h1>
            <p className="text-muted-foreground mt-2">Fill in the details below to create your event</p>
          </div>

          <form className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input id="title" placeholder="Give your event a catchy title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organizer">Organizer</Label>
                  <Input id="organizer" placeholder="Who's organizing this event?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Tell people what your event is about" rows={4} required />
                </div>
              </CardContent>
            </Card>

            {/* Date and Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Date and Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" type="datetime-local" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <Input id="endDate" type="datetime-local" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="online" checked={isOnline} onCheckedChange={setIsOnline} />
                  <Label htmlFor="online">This is an online event</Label>
                </div>

                {!isOnline && (
                  <>
                    <div className="space-y-3">
                      <Label>Venue Type</Label>
                      <RadioGroup value={venueType} onValueChange={setVenueType}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="address" id="address" />
                          <Label htmlFor="address">Address</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tbd" id="tbd" />
                          <Label htmlFor="tbd">To be determined</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {venueType === "address" && (
                      <div className="space-y-2">
                        <Label htmlFor="venue">Venue Name</Label>
                        <Input id="venue" placeholder="Enter the venue name" required />
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>

            {/* Tickets */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="free" checked={isFree} onCheckedChange={setIsFree} />
                  <Label htmlFor="free">This is a free event</Label>
                </div>

                {!isFree && (
                  <div className="space-y-2">
                    <Label htmlFor="price">Ticket Price</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="price"
                        type="number"
                        placeholder="0.00"
                        className="pl-10"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Event Image */}
            <Card>
              <CardHeader>
                <CardTitle>Event Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Click to upload an image</p>
                  <p className="text-sm text-muted-foreground">Recommended size: 1200 x 630 pixels</p>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5" />
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tags">Add tags to help people discover your event</Label>
                  <Input id="tags" placeholder="Add tags separated by commas" />
                </div>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex gap-4 justify-end">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Create Event</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
