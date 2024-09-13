"use client"

import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Search, MapPin, Filter, Star, Heart, Bed, Bath, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../ui/Logo'
import Navbar from '../Layout/Navbar'
import { getCollection } from '@/lib/CRUD/readCollection'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'



export default function PropertyContainer() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [instantBook, setInstantBook] = useState(false)
  const [ratingFilter, setRatingFilter] = useState(0)
  const [locationFilter, setLocationFilter] = useState("")
  const [properties, setProperties] = useState([])
  
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


  const filteredProperties = properties.filter(property => 
    property.price >= priceRange[0] && 
    property.price <= priceRange[1] &&
    // property.rating >= ratingFilter &&
    property.address.toLowerCase().includes(locationFilter.toLowerCase())
  )
  if(properties.length ===0){
    return <div className='min-h-screen px-4 md:px-8 opacity-55'>Loading...</div>; // You can show a loading spinner or placeholder here

  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
     <Navbar/>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <div className="space-y-6">
                {/* Price Range */}
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

                {/* Rating Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Minimum Rating</h3>
                  <Slider
                    value={[ratingFilter]}
                    onValueChange={(value) => setRatingFilter(value[0])}
                    max={5}
                    step={0.1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{ratingFilter.toFixed(1)} stars</span>
                  </div>
                </div>

                {/* Instant Book */}
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

                {/* Apply Filters Button */}
                <Button className="w-full bg-primary text-white hover:bg-primary-dark">
                  Show results
                </Button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="w-full md:w-3/4">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <Card key={property.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={property.imageUrls[0]}
                        alt={property.title}
                        layout="fill"
                        objectFit="cover"
                      />
                        <Badge 
                        className="absolute top-2 right-2" 
                        variant={property.type === 'short-term' ? 'default' : 'outline'}
                        >
                        {property.type === 'short-term' ? 'Short Term' : 'Long Term'}
                        </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{property.title}</h3>
                          <p className="text-gray-500 text-sm flex items-center">
                            <MapPin className="h-4 w-4 mr-1" /> {property.address}, {property.city}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{property.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({property.reviews})</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4 mt-2">
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
                      <p className="mt-2 text-lg font-semibold">${property.price} <span className="text-gray-500 text-sm font-normal">/ night</span></p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No properties match your criteria.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
