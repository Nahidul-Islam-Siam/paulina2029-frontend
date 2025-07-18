import Image from "next/image";
import React from "react";

const PortfolioCard = () => { 
  const portfolioItems = [
    {
      title: "Custom Home Designs",
      image: "/portCard/portCard1.jpg",
      alt: "Modern custom home with flat roof design",
    },
    {
      title: "Stucco Exterior Cladding",
      image: "/portCard/portCard2.jpg",
      alt: "Home with stucco exterior and garage",
    },
    {
      title: "Luxury Home Finishes",
      image: "/portCard/portCard3.jpg",
      alt: "Luxury home with desert backdrop",
    },
    {
      title: "Elegant Home Exteriors",
      image: "/portCard/portCard4.jpg",
      alt: "Church-inspired home with tower",
    },
    {
      title: "Timeless Architectural Designs",
      image: "/portCard/portCard5.jpg",
      alt: "Home with mountain backdrop",
    },
    {
      title: "Mountain Luxury Home Designs",
      image: "/portCard/portCard6.jpg",
      alt: "Modern luxury home on hillside",
    }, 
    {
      title: "High-End Facade Treatments",
      image: "/portCard/portCard7.jpg",
      alt: "Modern home with unique facade",
    },
    {
      title: "Exquisite Residential Cladding",
      image: "/portCard/portCard8.jpg",
      alt: "Home with blue sky backdrop",
    },
    {
      title: "Premium Building Finishes",
      image: "/portCard/portCard9.jpg",
      alt: "Modern building with premium finishes",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:py-12 py-4">
      {/* Section Header */}
      <div className="md:mb-8 mb-4 md:mt-10 mt-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[1px] bg-[#231F20]"></div>
          <p className="text-[#231F20] md:text-xl text-base font-semibold">
            Our Portfolio
          </p>
        </div>
        <h1 className="text-2xl md:text-5xl font-bold mb-3 font-playfair text-[#231F20]">
          Delivering Excellence in Every <br /> Project
        </h1>
        <p className="text-[#496187] max-w-3xl text-wrap text-justify">
          Our team is known for excellence, strategic planning delivers
          high-quality, durable results. We take pride in our designs,
          materials, and craftsmanship for lasting beauty.
        </p>
      </div>

      {/* Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <div className="aspect-square relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Bottom-Centered Glass Title */}
              <div className="absolute w-[95%] bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="px-0 py-2 rounded-md backdrop-blur-sm bg-white/10 border border-white/20 text-white text-center">
                  <h3 className="font-bold text-xl px-10 py-2 font-playfair">{item.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
