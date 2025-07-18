/* eslint-disable react/no-unescaped-entities */
import React from "react";

const HappenBanner = () => {
  return (
    <section className="relative bg-gradient-to-r text-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    style={{
      backgroundImage: "url('/images/banner-happend.jpg')",
    }}
    >
      <div className="max-w-7xl mx-auto text-center bg-gradient-to-r">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-[500] font-playfair mb-4 tracking-tight">
          MAKE IT LAST
        </h1>

        {/* Subheading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair mb-8">
     WITH DURABLE <span className="text-[#FFD700]">STUCCO</span>
        </h2>

        {/* Trusted Brands */}
        <div className="mt-12">
          <p className="text-lg sm:text-md md:text-xl text-white font-[500] font-poppins">
            Trusted by over 300+ of the world&lsquo;s leading brands
          </p>
        </div>
      </div>
    </section>
  );
};

export default HappenBanner;