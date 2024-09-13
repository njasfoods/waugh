'use client'
import { useState,useEffect } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getCollection } from '@/lib/CRUD/readCollection'

// Sample data for featured properties


export default function FeaturedProperties() {
  const [selectedType, setSelectedType] = useState("all")
  const [properties, setProperties] = useState([])
  const router = useRouter() // Initialize the router

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getCollection("Properties");
        console.log("get data",getData)
        setProperties(getData)
      } catch (error) {
        console.error('Error fetching properties:', error.message);
      }
    };

    fetchData();
  }, []);

  const handlePropertyClick = (slug) => {
    router.push(`/properties/${slug}`)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Properties</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="overflow-hidden transition-all duration-200 hover:shadow-lg"
          
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                 src={property.imageUrls[0]}
                  alt={property.title}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
        
                />
                <Badge 
                  className="absolute top-2 right-2" 
                  variant={property.type === 'short-term' ? 'default' : 'outline'}
                >
                  {property.type === 'short-term' ? 'Short Term' : 'Long Term'}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2 ">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.address}, {property.city}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{property.type === 'short-term' ? 'Nightly' : 'Monthly'}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-primary">${property.price}{'USD'} {property.type === 'short-term' ? '/night' : '/month'}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button onClick={() => handlePropertyClick(property.slug)} className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}