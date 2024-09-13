'use client'
import {useState,useEffect} from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Globe, Menu, User } from 'lucide-react'
import Logo from '../ui/Logo'
import Link from 'next/link'

export default function GetStartedNav() {
    const [openMenu, setOpenMenu] = useState(false);

  
  return (
    <nav className={`bg-white shadow-md fixed top-0 w-full z-40 `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link href="/" className="block ">
           <Logo width={'120px'} height={'auto'} color={'currentColor'}/>
          </Link>
         
       

             
          {/* Navigation items */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/get-started" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              Become a Host
            </Link>
   
         
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button type="button" onClick={()=>setOpenMenu(!openMenu)} variant="ghost" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${!openMenu && 'hidden'}   relative`} id="mobile-menu">
        <div className={`px-2 pt-2 pb-3 space-y-1 absolute z-20 top-o left-0 right-0 bg-white`}>
          <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Become a Host</Link>
          <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Help</Link>
          <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Sign Up</Link>
          <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Log In</Link>
        </div>
      </div>
    </nav>
  )
}