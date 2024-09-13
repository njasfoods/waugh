import FeaturedProperties from "@/components/Landing/Featured-Properties";
import HeroSection from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/How-It-Work";
import OwnerTestimonials from "@/components/Landing/OwnerTestimonial";
import SignUp from "@/components/Landing/SignUp";
import TenantReviews from "@/components/Landing/Tenant-Review";
import WhyChooseUs from "@/components/Landing/Why-Choose-Us";
import Navbar from "@/components/Layout/Navbar";


export default function Home() {
  return (
<main className="bg-gray-50 dark:bg-gray-900">
  <Navbar/>
  <HeroSection/>
  <div className="md:px-8">
    <SignUp/>
    <HowItWorks/>
    <FeaturedProperties/>
    <WhyChooseUs/>
  </div>
  
  {/* <TenantReviews/> */}
  {/* <OwnerTestimonials/> */}

</main>
  );
}
