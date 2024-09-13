'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Home } from 'lucide-react';
import { Button } from '../UI/button';

const SignUp = () => {
  const signUpOptions = [
    {
      title: 'owner',
      description: 'List Your Property',
      icon: <Building className="w-6 h-6 text-white" />,
      href: '/get-started/owner',
    },
    {
      title: 'renter',
      description: 'Find Your Home',
      icon: <Home className="w-6 h-6 text-white" />,
      href: '/get-started/tentant',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8 w-full ">
          {signUpOptions.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={option.href}
                target={option.title === 'renter' ? '_blank' : ''}
                className="block bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    {option.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{option.description}</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  {option.title === 'owner' ? 'In need of Real Asset Management?' : 'Find your new home with us!'}
                </p>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
  );
};

export default SignUp;
