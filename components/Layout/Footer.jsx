import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-100">For Tenants</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="#" className="hover:underline">Browse Listings</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Tenant FAQs</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-100">For Owners</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="#" className="hover:underline">List Your Property</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Owner FAQs</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Get Started</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-100">Legal</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="#" className="hover:underline">Terms of Service</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-800" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex mt-4 space-x-6 sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </Link>
          
          </div>
          <p className="mt-8 text-base text-gray-500 sm:mt-0 dark:text-gray-400">© 2024 Clarke and Waugh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}