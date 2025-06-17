import { Navbar } from "@/components/navbar"
import { EventFeed } from "@/components/event-feed"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="w-full py-8 px-12">
        <EventFeed />
      </main>
    </div>
  )
}
