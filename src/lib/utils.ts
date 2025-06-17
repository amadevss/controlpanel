import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatTime(date: string): string {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

export function formatDateRange(start: string, end: string): string {
  const startDate = new Date(start)
  const endDate = new Date(end)

  if (startDate.toDateString() === endDate.toDateString()) {
    return `${formatDate(start)}, ${formatTime(start)} - ${formatTime(end)}`
  }

  return `${formatDate(start)} - ${formatDate(end)}`
}

export function getRelativeTimeString(date: string): string {
  const now = new Date()
  const eventDate = new Date(date)
  const diffInDays = Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return "Today"
  if (diffInDays === 1) return "Tomorrow"
  if (diffInDays < 7) return `In ${diffInDays} days`
  if (diffInDays < 30) return `In ${Math.ceil(diffInDays / 7)} weeks`
  return `In ${Math.ceil(diffInDays / 30)} months`
}
