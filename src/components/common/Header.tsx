'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 border-b border-blue-400 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="mr-12">
            <Image 
              src="/images/img_company_logo_white_a700_40x160.svg" 
              alt="Lookscout Logo" 
              width={160} 
              height={40} 
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-semibold text-white">
              Home
            </Link>
            <Link href="#products" className="text-sm font-semibold text-white">
              Our Products
            </Link>
            <div className="relative group">
              <div className="flex items-center text-sm font-semibold text-white cursor-pointer">
                <span>Resources</span>
                <Image 
                  src="/images/img_chevron_down.svg" 
                  alt="Dropdown" 
                  width={20} 
                  height={20} 
                  className="ml-2"
                />
              </div>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white hidden group-hover:block z-10">
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Documentation
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Tutorials
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <Link href="#contacts" className="text-sm font-semibold text-white">
              Contacts
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-sm font-semibold text-white">
            Log in
          </Link>
          <Button variant="primary" className="bg-blue-500 rounded-sm">
            Sign up
          </Button>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 px-4 py-2">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-semibold text-white">
              Home
            </Link>
            <Link href="#products" className="text-sm font-semibold text-white">
              Our Products
            </Link>
            <Link href="#resources" className="text-sm font-semibold text-white">
              Resources
            </Link>
            <Link href="#contacts" className="text-sm font-semibold text-white">
              Contacts
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-blue-400">
              <Link href="/login" className="text-sm font-semibold text-white">
                Log in
              </Link>
              <Button variant="primary" className="bg-blue-500 rounded-sm w-full">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;