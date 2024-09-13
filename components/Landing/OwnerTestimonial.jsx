import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Home, DollarSign } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Miami, FL",
    image: "https://ik5bpxjwqxp7ckzx.public.blob.vercel-storage.com/sarah-johnson-7uHJ9k.jpg",
    quote: "I was hesitant to list my beach house at first, but the platform made it so easy. I've seen a 40% increase in bookings and the property management is top-notch!",
    metrics: {
      propertiesListed: 3,
      averageRating: 4.9,
      annualEarnings: "$75,000+"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "San Francisco, CA",
    image: "https://ik5bpxjwqxp7ckzx.public.blob.vercel-storage.com/michael-chen-2pQR7v.jpg",
    quote: "As a busy professional, I needed a hands-off solution for my investment properties. This platform exceeded my expectations. My occupancy rates have never been higher!",
    metrics: {
      propertiesListed: 5,
      averageRating: 4.8,
      annualEarnings: "$120,000+"
    }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Austin, TX",
    image: "https://ik5bpxjwqxp7ckzx.public.blob.vercel-storage.com/emily-rodriguez-5mNO1w.jpg",
    quote: "I love how the platform handles everything from guest communication to maintenance. It's given me the freedom to focus on growing my portfolio instead of day-to-day management.",
    metrics: {
      propertiesListed: 8,
      averageRating: 4.7,
      annualEarnings: "$200,000+"
    }
  }
]

export default function OwnerTestimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Success Stories from Our Owners</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full">
              <CardContent className="flex-grow p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  {testimonial.quote}
                </blockquote>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="flex items-center">
                    <Home className="w-4 h-4 mr-1" />
                    {testimonial.metrics.propertiesListed} Properties Listed
                  </Badge>
                  <Badge variant="secondary" className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {testimonial.metrics.averageRating} Avg. Rating
                  </Badge>
                  <Badge variant="secondary" className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {testimonial.metrics.annualEarnings} Annual Earnings
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Badge variant="outline" className="text-lg py-2 px-4">
            95% Owner Satisfaction
          </Badge>
        </div>
      </div>
    </section>
  )
}