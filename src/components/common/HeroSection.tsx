'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaAction?: () => void;
  supportingText?: string;
  supportingLogos?: string[];
  backgroundImage?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  ctaText,
  ctaAction,
  supportingText,
  supportingLogos = [],
  backgroundImage,
  className = '',
}) => {
  const handleCtaClick = () => {
    if (ctaAction) {
      ctaAction();
    } else {
      alert('CTA clicked!');
    }
  };

  return (
    <section className={`bg-blue-600 text-white py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg text-blue-300 mb-8 max-w-lg">
              {description}
            </p>
            <Button 
              onClick={handleCtaClick}
              className="bg-blue-500 text-white font-semibold mb-12"
            >
              {ctaText}
            </Button>
            
            {supportingText && (
              <div className="mt-12">
                <p className="text-sm font-medium mb-4">{supportingText}</p>
                <div className="flex flex-wrap gap-6">
                  {supportingLogos.map((logo, index) => (
                    <Image 
                      key={index}
                      src={logo}
                      alt="Partner Logo"
                      width={112}
                      height={28}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {backgroundImage && (
            <div className="md:w-1/2 relative">
              <Image 
                src={backgroundImage}
                alt="Hero Background"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;