import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState, useEffect } from 'react'

export default function MyModal({ switcher, setIsOpen, data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/house1.jpg', alt: 'House 1' },
    { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', alt: 'House 2' },
    { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', alt: 'House 3' },
    { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', alt: 'House 4' },
    { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', alt: 'House 5' },
  ];

  function close() {
    setIsOpen(false);
  }


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Dialog open={switcher} as="div" className="relative z-50 focus:outline-none" onClose={close}>
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-8">
          <DialogPanel className="w-full max-w-4xl rounded-xl bg-accent/40 p-6 backdrop-blur-2xl">
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              All Photos
            </DialogTitle>

            <div id="gallery" className="relative w-full mt-4" data-carousel="slide">
              {/* Carousel wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Carousel items */}
                {data?.imageUrls.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                  >
                    <img
                      src={image}
                      className="block w-full h-full object-cover"
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>

              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>

            <div className="mt-4 items-end flex w-full">
              <Button
                className=" rounded-md bg-secondary py-4 px-16 text-sm font-semibold text-white shadow-inner focus:outline-none"
                onClick={close}
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
