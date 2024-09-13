'use client'
import {useState,useEffect} from 'react'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Search,  Menu, User } from 'lucide-react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const page = usePathname()

    useEffect(() => {
        const handleScroll = () => {
          const heroHeight = document.querySelector('#hero-section')?.offsetHeight || 0;
          
          if (window.scrollY > 100) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
    
          // Show search bar after scrolling past the hero section
          if (window.scrollY > heroHeight) {
            setShowSearchBar(true);
          } else {
            setShowSearchBar(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <nav className={`bg-white shadow-md fixed top-0 w-full z-40 ${!isScrolled && page ==='/' && 'hidden'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link href="/" className="block ">
           <Logo width={'120px'} height={'auto'} color={'currentColor'}/>
          </Link>
         
          {/* Search bar */}
          {showSearchBar && (
          <div className="hidden sm:flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  placeholder="Start your search"
                  type="search"
                />
              </div>
            </div>
          </div>
             )}

             
          {/* Navigation items */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/get-started" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              Become a Host
            </Link>
       
            <div className="ml-3 relative">
              <Button variant="outline" className="flex items-center space-x-2 rounded-full border border-gray-300 p-2">
                <Menu className="h-5 w-5 text-gray-600" aria-hidden="true" />
                <User className="h-6 w-6 text-gray-600" aria-hidden="true" />
              </Button>
            </div>
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