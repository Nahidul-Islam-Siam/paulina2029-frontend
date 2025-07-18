import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  bgClass?: string;
}

export default function HeroSection({ title, description, bgClass = '' }: HeroSectionProps) {
  return (
    <section className={`md:h-[400px] flex items-center ${bgClass}`}>
      <div className="w-full h-full bg-black bg-opacity-30 flex items-center px-4 sm:px-6 md:px-12 py-10">
        <div className="container mx-auto">
          <h1 className="md:text-[68px] text-4xl font-poppins font-semibold text-white py-3 mb-2 sm:mb-4 md:mb-5">
            {title}
          </h1>
          <p className="text-[#FFFFFF] font-poppins md:text-xl text-base font-normal max-w-4xl whitespace-normal mt-4 text-justify">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
