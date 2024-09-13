'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Home, HomeIcon, User } from "lucide-react"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const GetStarted = () => {
  const router = useRouter()
  const choices = [
  
    {
      id:3,
      slug:'owner',
      name:'an Owner',
      description:'Manage your properties effortlessly',
      content:' Streamline your property management with our owner services, including tenant screening, maintenance coordination, and financial reporting.',
      icon:<User className="w-16 h-16 mb-4 text-primary-dark" />
    },
    {
      id:2,
      slug:'renter',
      name:'a Tenant',
      description:'Access premium living services',
      content:'Enjoy hassle-free living with our comprehensive tenant services, from maintenance requests to lifestyle amenities.',
      icon:<HomeIcon className="w-16 h-16 mb-4 text-primary-dark" />
    },
  ]



  const selectChoice = (e)=>{
    // setSelectedChoice(e.id)
    {
      if(e.slug ==='renter'){
        router.push('/get-started/tenant');
        
      }
      if(e.slug ==='owner'){
        router.push('/get-started/'+e.slug)
      }
    }
  }
  return (
    <main className="flex-1">
        <section className="w-full py-8 md:py-12 xl:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get Started
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose your role to begin your journey with our premium property concierge service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            {
              choices.map((choice,i)=>( 
              <Card key={i} className="w-full h-full">
                <CardHeader>
                  <CardTitle>I&apos;m {choice.name}</CardTitle>
                  <CardDescription>{choice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {choice.icon}
                  
                  <p className="text-sm text-muted-foreground h-16">
                   {choice.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button onClick={()=>selectChoice(choice)}  className="w-full bg-primary-dark">Select </Button>
                </CardFooter>
              </Card>
          
              ))
             }
          
            </div>
          </div>
        </section>
      </main>

  )
}

export default GetStarted