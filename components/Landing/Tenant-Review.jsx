'use client'
import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Alex Thompson",
    location: "New York, NY",
    image: "https://ik5bpxjwqxp7ckzx.public.blob.vercel-storage.com/alex-thompson-9uHJ9k.jpg",
    quote: "I found the perfect apartment for my 3-month work assignment. The booking process was seamless, and the property exceeded my expectations!",
    rating: 5,
    stayType: "Short-term"
  },
  {
    id: 2,
    name: "Sophia Lee",
    location: "San Francisco, CA",
    image: "https://ik5bpxjwqxp7ckzx.public.blob.vercel-storage.com/sophia-lee-2pQR7v.jpg",
    quote: "As a digital nomad, I love how easy it is to find and book quality long-term rentals. The customer support team is always responsive and helpful.",
    rating: 4,
    stayType: "Long-term"
  },
  {
    id: 3,
    name: "David Martinez",
    location: "Miami, FL",
    image: "https://ik5bpxjwqxp7ckzx.public.blob.vercel-storage.com/david-martinez-5mNO1w.jpg",
    quote: "We booked a beautiful beachfront condo for our family vacation. The amenities were exactly as described, and we had a fantastic time!",
    rating: 5,
    stayType: "Short-term"
  },
  {
    id: 4,
    name: "Emma Wilson",
    location: "Austin, TX",
    image: "https://ik5bpxjwqxp7ckzx.public.blob.vercel-storage.com/emma-wilson-7uHJ9k.jpg",
    quote: "I'm a student, and I found an affordable room for the entire semester. The platform made it easy to connect with verified property owners.",
    rating: 4,
    stayType: "Long-term"
  }
]

export default function TenantReviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = setInterval(nextReview, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Hear from Our Happy Tenants</h2>
        <div className="relative">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <img
                  src={reviews[currentReview].image}
                  alt={reviews[currentReview].name}
                  className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-xl">{reviews[currentReview].name}</h3>
                  <p className="text-sm text-muted-foreground">{reviews[currentReview].location}</p>
                  <div className="flex items-center justify-center md:justify-start mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < reviews[currentReview].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg text-center italic mb-6">
                {reviews[currentReview].quote}
              </blockquote>
              <div className="text-center">
                <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold">
                  {reviews[currentReview].stayType} Stay
                </span>
              </div>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-full"
            onClick={prevReview}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous review</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-full"
            onClick={nextReview}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next review</span>
          </Button>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied tenants who&apos;ve found their perfect stay through our platform.
          </p>
        </div>
      </div>
    </section>
  )
}