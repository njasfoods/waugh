'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Briefcase, Globe, ShieldCheck, ListChecks, Home, Search, Lock, Clock, UserCheck, Filter } from 'lucide-react'

const benefits = {
  owners: [
    { icon: DollarSign, title: "Maximize Rental Income", description: "Optimize your property's earning potential with our dynamic pricing strategies." },
    { icon: Briefcase, title: 'Hassle-free Property Management', description: 'We handle everything from guest communication to maintenance coordination.' },
    { icon: Globe, title: 'Wide Exposure for Your Property', description: 'Reach a global audience of potential guests through our platform.' },
    { icon: ShieldCheck, title: 'Secure Payments', description: 'Receive timely, secure payments for all your bookings.' },
    { icon: ListChecks, title: 'Tailored Listings', description: 'Customize your listing for short or long-term rentals to suit your preferences.' },
  ],
  tenants: [
    { icon: Home, title: 'Curated Listings for Every Budget', description: 'Find the perfect property that fits your needs and budget.' },
    { icon: Lock, title: 'Secure Booking Process', description: 'Book with confidence knowing your personal and payment information is protected.' },
    { icon: Clock, title: 'Flexible Stay Durations', description: 'Choose from short-term getaways to long-term residences.' },
    { icon: UserCheck, title: 'Verified Hosts and Properties', description: 'All our listings are vetted to ensure quality and safety.' },
    { icon: Filter, title: 'Easy Search & Filter Options', description: 'Quickly find your ideal property with our intuitive search tools.' },
  ],
}

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState('tenants')

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Us</h2>
        <Tabs defaultValue="owners" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="owners">For Owners</TabsTrigger>
            <TabsTrigger value="tenants">For Tenants</TabsTrigger>
          </TabsList>
          {Object.entries(benefits).map(([role, roleBenefits]) => (
            <TabsContent key={role} value={role} className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {roleBenefits.map((benefit, index) => (
                  <Card key={index} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-12 text-center">
          <p className="text-xl text-muted-foreground">
            Join the thousands of {activeTab === 'owners' ? 'property owners' : 'tenants'} who trust our platform for their {activeTab === 'owners' ? 'rental management' : 'accommodation'} needs.
          </p>
        </div>
      </div>
    </section>
  )
}