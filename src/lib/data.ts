import type { Event } from "./types"

export const events: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival",
    description:
      "Join us for a day of amazing music performances from local and international artists. Enjoy food, drinks, and great company in the heart of Central Park!",
    location: "Central Park, New York",
    startDate: "2025-06-15T15:00:00",
    endDate: "2025-06-15T23:00:00",
    imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    organizer: "NYC Events Co.",
    attendees: 1250,
    category: "music",
    isOnline: false,
    isFree: false,
    price: 35,
    tags: ["music", "festival", "summer", "outdoor"],
  },
  {
    id: "2",
    title: "Charity Run for Kids",
    description:
      "Participate in our annual 5K run to raise funds for children's education. All proceeds go to local schools and educational programs.",
    location: "Riverside Park",
    startDate: "2025-07-03T08:00:00",
    endDate: "2025-07-03T12:00:00",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    organizer: "Education Foundation",
    attendees: 512,
    category: "sports",
    isOnline: false,
    isFree: false,
    price: 25,
    tags: ["charity", "sports", "education", "community"],
  },
  {
    id: "3",
    title: "Food & Wine Festival",
    description:
      "Sample delicious cuisines and fine wines from over 50 local restaurants and wineries. A perfect evening for food enthusiasts!",
    location: "Downtown Food District",
    startDate: "2025-08-05T18:00:00",
    endDate: "2025-08-05T23:00:00",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    organizer: "Foodie Events",
    attendees: 1800,
    category: "food",
    isOnline: false,
    isFree: false,
    price: 45,
    tags: ["food", "wine", "tasting", "local"],
  },
  {
    id: "4",
    title: "Digital Art Workshop",
    description:
      "Learn the basics of digital art creation with professional artists. All skill levels welcome. Materials provided.",
    location: "Creative Arts Center",
    startDate: "2025-06-20T14:00:00",
    endDate: "2025-06-20T17:00:00",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    organizer: "Arts Academy",
    attendees: 45,
    category: "arts",
    isOnline: false,
    isFree: false,
    price: 30,
    tags: ["art", "workshop", "digital", "creative"],
  },
  {
    id: "5",
    title: "Morning Yoga in the Park",
    description:
      "Start your day with a peaceful yoga session surrounded by nature. Suitable for all levels. Bring your own mat.",
    location: "Sunset Park",
    startDate: "2025-06-18T07:00:00",
    endDate: "2025-06-18T08:30:00",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    organizer: "Wellness Community",
    attendees: 78,
    category: "wellness",
    isOnline: false,
    isFree: true,
    tags: ["yoga", "wellness", "morning", "outdoor"],
  },
  {
    id: "6",
    title: "Tech Innovation Conference",
    description:
      "Join industry leaders discussing the latest trends in technology and innovation. Networking opportunities included.",
    location: "Convention Center",
    startDate: "2025-09-12T09:00:00",
    endDate: "2025-09-12T18:00:00",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    organizer: "Tech Hub",
    attendees: 850,
    category: "business",
    isOnline: false,
    isFree: false,
    price: 120,
    tags: ["technology", "innovation", "networking", "business"],
  },
  {
    id: "7",
    title: "Italian Cooking Masterclass",
    description:
      "Learn to cook authentic Italian dishes from a professional chef. Includes wine pairing and recipe booklet.",
    location: "Culinary Institute",
    startDate: "2025-07-15T18:00:00",
    endDate: "2025-07-15T21:00:00",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    organizer: "Culinary Masters",
    attendees: 24,
    category: "learning",
    isOnline: false,
    isFree: false,
    price: 85,
    tags: ["cooking", "italian", "masterclass", "wine"],
  },
  {
    id: "8",
    title: "Monthly Book Club Meeting",
    description: "Join our discussion of this month's featured book. New members welcome! Light refreshments provided.",
    location: "Central Library",
    startDate: "2025-06-25T19:00:00",
    endDate: "2025-06-25T21:00:00",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    organizer: "City Library",
    attendees: 32,
    category: "social",
    isOnline: false,
    isFree: true,
    tags: ["books", "discussion", "social", "monthly"],
  },
]

export const categories = [
  { id: "all", label: "All Events" },
  { id: "social", label: "Social" },
  { id: "music", label: "Music" },
  { id: "food", label: "Food & Drink" },
  { id: "arts", label: "Arts" },
  { id: "sports", label: "Sports" },
  { id: "wellness", label: "Wellness" },
  { id: "learning", label: "Learning" },
  { id: "business", label: "Business" },
]
