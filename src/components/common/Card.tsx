'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  className?: string;
  iconClassName?: string;
  isDark?: boolean;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  link,
  className = '',
  iconClassName = '',
  isDark = false
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {icon && (
        <div className={`bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-5 ${iconClassName}`}>
          <Image src={icon} alt={title} width={32} height={32} />
        </div>
      )}
      <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>
      <p className={`text-base mb-4 ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>
        {description}
      </p>
      {link && (
        <div className="flex items-center mt-auto">
          <Link href={link.url} className="text-blue-500 font-semibold text-sm flex items-center">
            {link.text}
            <Image 
              src="/images/img_arrow_right.svg" 
              alt="Arrow Right" 
              width={20} 
              height={20} 
              className="ml-2" 
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;