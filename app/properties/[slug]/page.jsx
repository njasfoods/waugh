'use client'
import Navbar from '@/components/layout/Navbar'
import BackButton from '@/components/UI/BackButton'
import { Button } from '@/components/UI/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/UI/dialog'
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'
import MyModal from '@/components/UI/Modal'
import { db } from '@/lib/firebase'
import { collection,  getDocs, query, where } from 'firebase/firestore'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState , useRef} from 'react'

const PropertyDetails = ({params:{slug}}) => {
  let [isOpen, setIsOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [myData, setMyData] = useState({ imageUrls: [] });
  const [selectedImage, setSelectedImage] = useState(myData?.imageUrls[0]); // Start with the first image as the large image
  const scrollContainerRef = useRef(null); // Ref to the scroll container
  const router =useRouter()

  useEffect(() => {
    if (myData?.imageUrls.length > 0) {
      setSelectedImage(myData.imageUrls[0]); // Set the initial large image when data is available
    }
  }, [myData]); // Re-run when myData changes

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Update the large image when a smaller image is clicked
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(collection(db, "Properties"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        
        let propertyData = null;
        querySnapshot.forEach((doc) => {
          propertyData = doc.data(); // assuming there's only one matching doc
        });
        
        setMyData(propertyData);
      } catch (error) {
        console.error(error);
      }
    };
  
    getData();
  }, [slug]); // Adding slug as a dependency
  if (!myData.imageUrls || myData.imageUrls.length === 0) {
    return <div className='min-h-screen opacity-55'>Loading...</div>; // You can show a loading spinner or placeholder here
  }

  return (
    <div className='bg-accent'>
      
      <Navbar/>
     
      <div className='px-4 md:px-8 py-8 md:py-12'> 
        <div className='w-full'>
        <BackButton/>
      </div>
            <div className='hidden lg:grid grid-cols-4 gap-2 h-[60vh] mt-4'>
                <div className='col-span-2 relative w-full h-full'>
                  <Image className="object-cover rounded-md" src={myData?.imageUrls[0]} fill alt={''} />
                </div>
                <div className='col-span-1 flex flex-col gap-2 h-full'>
                  <div className='relative w-full h-[50%]'>
                    <Image className="object-cover rounded-md" src={myData?.imageUrls[1]} fill alt={''} />
                  </div>
                  <div className='relative w-full h-1/2'>
                    <Image className="object-cover rounded-md" src={myData?.imageUrls[2]} fill alt={''} />
                  </div>
                </div>
                <div className='col-span-1 flex flex-col gap-2'>
                  <div className='relative w-full h-[90%]'>
                    <Image className="object-cover rounded-md" src={myData?.imageUrls[3]} fill alt={''} />
                  </div>
                  <div className='relative w-full h-[10%] '>
                    <button type='button' onClick={()=>setIsOpen(true)} className='bg-secondary text-sm font-semibold text-white shadow-inner flex justify-between items-center rounded-md w-full h-full px-4 py-2 text-start '>
                      <p>Show All Photos</p>
                      <span className='opacity-60'>32</span>
                      </button>
                  </div>
                </div>
            </div>
            <div className="lg:hidden flex flex-col space-y-2 h-[60vh] w-full mt-4">
            {/* Large Image */}
            <div className='relative w-full h-[80%]'>
              <Image className="object-cover rounded-md" src={selectedImage} fill alt="Large Image" />
            </div>

            {/* Thumbnails with Horizontal Scroll */}
            <div className="relative flex items-center w-full h-[20%]">
              {/* Left Navigation Button */}
              <button onClick={scrollLeft} className="absolute left-0 z-10 h-full p-2 bg-gradient-to-r from-gray-200 to-transparent">
                <ArrowLeft size={24} />
              </button>

              {/* Scrollable Thumbnails */}
              <div
                className="flex space-x-2 overflow-x-auto scrollbar-hide w-full h-full"
                ref={scrollContainerRef}
              >
                {myData?.imageUrls.slice(1).map((imageUrl, index) => (
                  <div 
                    key={index} 
                    className='relative w-[100px] h-full cursor-pointer flex-shrink-0'
                    onClick={() => handleImageClick(imageUrl)}
                  >
                    <Image className="object-cover rounded-md" src={imageUrl} fill alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>

              {/* Right Navigation Button */}
              <button onClick={scrollRight} className="absolute right-0 z-10 h-full p-2 bg-gradient-to-l from-gray-200 to-transparent">
                <ArrowRight size={24} />
              </button>

              {/* Blur effect on the right end */}
              <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
              
            <div className='grid grid-cols-2 mt-4'>
              <div className='flex space-x-4 text-secondary font-semibold '>
                <button type='button' className='flex space-x-2 text-sm'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <span>Save</span>
                </button>

                <button type='button' className='flex space-x-2 text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                <span>Share</span>

                </button>
              </div>

              <div className='flex space-x-2 text-secondary/80 items-start md:items-center font-semibold '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 md:size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <span>{myData.address}, {myData.city}</span>


              </div>
            </div>
          

            <div className='grid sm:grid-cols-2 mt-8 items-start'>
              <div>
                <h2 className='text-5xl font-bold'>${myData.price} <span className='text-base'>per month</span></h2>
                
                <div className='mt-4 flex items-center group'>
                  <div className='relative w-16 h-16 rounded-full group-hover:border border-primary'>
                  <Image src={'/assets/imgs/soren.jpg'} alt='' fill className='rounded-full object-cover' />
                    
                  </div>
                  <Dialog>
                <DialogTrigger asChild>
                  <Button className="h-10 px-8 text-white bg-secondary rounded-r-md -ml-4 group-hover:bg-primary group-hover:shadow-sm" onClick={() => setSelectedProperty(slug)}>Enquire Now</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Enquire about {myData?.title}</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Input id="message" placeholder="Your message" />
                    </div>
                    <Button type="submit" className="w-full">Send Inquiry</Button>
                  </form>
                </DialogContent>
              </Dialog>
                </div>

              </div>
              <div className="mt-12 sm:mt-0">
                <div className='flex space-x-8 justify-evenly'>
                    <p className='text-4xl font-bold'>{myData.bedrooms}<span className='text-base '> beds</span></p>
                    <p className='text-4xl font-bold'>{myData.bathrooms}<span className='text-base '> bath</span></p>
                    <p className='text-4xl font-bold'>1{myData.kitchen}<span className='text-base'> kitchen</span></p>
                </div>
                <div className='mt-4'>
                    <h4 className='font-medium underline underline-offset-4'>Property Overview</h4>

                    <p className='mt-4 text-sm'>  
                      {myData.description} </p>
                </div>
              </div>

            </div>
      </div>
    
      <MyModal data={myData} switcher={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default PropertyDetails