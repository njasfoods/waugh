import { Home, ListChecks, Users, Search, Filter, Calendar } from 'lucide-react'

const steps = {
  owners: [
    { icon: Home, title: 'List your property', description: 'List your property with ease using our simple interface.' },
    { icon: ListChecks, title: 'Manage listings', description: 'Easily manage your listings and track your earnings.' },
    { icon: Users, title: 'Get reliable tenants', description: 'Find reliable tenants for short or long-term stays.' },
  ],
  tenants: [
    { icon: Search, title: 'Browse listings', description: 'Browse through our wide range of available listings.' },
    { icon: Filter, title: 'Filter stays', description: 'Filter for short or long-term stays that suit your needs.' },
    { icon: Calendar, title: 'Book with confidence', description: 'Book your stay with confidence and ease.' },
  ],
}

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {Object.entries(steps).map(([role, roleSteps]) => (
            <div key={role} className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl capitalize text-center">
                For {role}
              </h3>
              <div className="space-y-8">
                {roleSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <step.icon className="w-6 h-6 bg-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-medium">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}