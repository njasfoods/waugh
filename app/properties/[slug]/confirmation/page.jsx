'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

const Confirmation = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/'); // Adjust the path as needed for your home page
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-slate-100 px-4">
      <div className="bg-= p-6 ">
        <div className='flex space-x-4 items-center'>
             <FaCheckCircle className="text-primary text-Xl sm:text-2xl lg:text-3xl  " />
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            Congratulations!
            </h2>
        </div>
       
        <p className="mt-12 text-lg max-w-2xl">
        Thank you for submitting your contact details! We appreciate your interest in Clarke and Waugh Ltd. A member of our team will be in touch with you shortly to discuss how we can assist with your Real asset needs. If you have any urgent questions, please feel free to reach out to us directly at Clarkeandwaugh@gmail.com
        </p>
        <p className='mt-4'>Warmth, <br/>
        Clarke & Waugh Ltd. </p>
        <button
          onClick={handleBackToHome}
          className="bg-primary text-white px-6 py-3 rounded-lg mt-6 hover:bg-primary-dark"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
