import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative flex h-[70vh] w-full items-center justify-center bg-gray-50">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/imgs/overlay.jpg"
          alt="Hero background"
          className="h-full w-full object-cover brightness-75"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto flex flex-col items-center text-center max-w-7xl px-4 md:px-8">
        {/* Hero text */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Find Your Perfect Stay
        </h1>
        <p className="mt-4 text-lg text-white sm:text-xl">
          Discover short and long-term rentals that feel like home.
        </p>

    

        {/* Search bar */}
        <div className="mt-8 flex w-full max-w-lg flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <div className="flex items-center w-full rounded-3xl bg-white shadow-md p-1">
        {/* Input Field */}
        <input
        type="text"
          placeholder="Search location"
          className="w-full px-4 bg-transparent py-2 border-none focus:ring-0 focus:outline-none focus:border-b-2 border-gray-300 focus:border-primary transition-colors duration-300"
        />
        {/* Search Button */}
        <Button className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark transition-colors duration-300">
          {/* Search Icon */}
          <Search size={24} />
        </Button>
      </div>
    </div>


        {/* CTA buttons */}
        {/* <div className="mt-6 flex w-full max-w-md justify-center space-x-4">
          <Button className="bg-orange-500 border border-white text-white hover:bg-white hover:text-black">
            List Your Property
          </Button>
          <Button className="bg-white text-black hover:bg-gray-100">
            Browse Listings
          </Button>
        </div> */}
      </div>
    </section>
  );
}
