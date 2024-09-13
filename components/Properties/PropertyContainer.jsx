'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Search, MapPin, Filter, Star, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../UI/Logo'

const properties = [
  {
    id: 1,
    title: "Cozy Beachfront Cottage",
    location: "Malibu, California",
    price: 250,
    rating: 4.9,
    reviews: 120,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 2,
    title: "Modern Downtown Loft",
    location: "New York City, New York",
    price: 180,
    rating: 4.7,
    reviews: 95,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 3,
    title: "Mountain Retreat Cabin",
    location: "Aspen, Colorado",
    price: 300,
    rating: 4.8,
    reviews: 150,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 4,
    title: "Charming Parisian Apartment",
    location: "Paris, France",
    price: 220,
    rating: 4.6,
    reviews: 80,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 5,
    title: "Tropical Island Villa",
    location: "Bali, Indonesia",
    price: 400,
    rating: 5.0,
    reviews: 200,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 6,
    title: "Historic City Center Flat",
    location: "Rome, Italy",
    price: 190,
    rating: 4.5,
    reviews: 110,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 7,
    title: "Ski-in/Ski-out Chalet",
    location: "Whistler, Canada",
    price: 350,
    rating: 4.9,
    reviews: 130,
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 8,
    title: "Luxury Penthouse with City Views",
    location: "Dubai, UAE",
    price: 500,
    rating: 4.8,
    reviews: 90,
    image: "/placeholder.svg?height=300&width=400"
  }
]

export default function PropertyContainer() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [instantBook, setInstantBook] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
            <Logo width={'120px'} height={'auto'} color={'currentColor'}/>
            </Link>
            <div className="flex items-center flex-1">
              <div className="flex items-center rounded-full bg-gray-100 p-2 w-full max-w-xl">
                <Input
                  type="text"
                  placeholder="Search destinations"
                  className="flex-grow bg-transparent border-none focus:ring-0"
                />
                <Button size="sm" className="ml-2 rounded-full bg-primary text-white hover:bg-primary-dark">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">Become a Host</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Help</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Sign Up</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Log In</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Price range</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="instant-book" className="text-sm font-medium">
                    Instant Book
                  </Label>
                  <Switch
                    id="instant-book"
                    checked={instantBook}
                    onCheckedChange={setInstantBook}
                  />
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary-dark">
                  Show results
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={property.image}
                      alt={property.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{property.title}</h3>
                        <p className="text-gray-500 text-sm flex items-center">
                          <MapPin className="h-4 w-4 mr-1" /> {property.location}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{property.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">({property.reviews})</span>
                      </div>
                    </div>
                    <p className="mt-2 text-lg font-semibold">${property.price} <span className="text-gray-500 text-sm font-normal">/ night</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}