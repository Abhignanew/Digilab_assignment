'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/ui/Button';

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image 
              src="/images/img_company_logo_white_a700_40x160.svg" 
              alt="Lookscout Logo" 
              width={160} 
              height={40} 
              className="mb-4"
            />
            <p className="text-gray-500 mb-6">
              Generate outside the box thinking with the possibility to targtet the low.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold mb-4">Get Email Notifications</h3>
            <p className="text-gray-500 mb-4">
              Generate outside the box thinking with the possibility to targtet the low
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Enter email...."
                className="bg-dark-800 border border-dark-700 text-gray-500 py-3 px-4 rounded-l-sm w-full focus:outline-none"
                required
              />
              <Button 
                type="submit" 
                className="bg-blue-500 text-white font-semibold py-3 px-4 rounded-r-sm"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © 2023 Lookscout. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Image src="/images/img_social_platforms_logo.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Image src="/images/img_social_platforms_logo_white_a700.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Image src="/images/img_social_platforms_logo_white_a700_24x24.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Image src="/images/img_text_input.svg" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;