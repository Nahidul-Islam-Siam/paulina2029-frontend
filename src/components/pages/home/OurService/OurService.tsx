import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import CardImg1 from "@/assets/service-card/card1.png";
import CardImg2 from "@/assets/service-card/card2.png";
import CardImg3 from "@/assets/service-card/card3.png";
import CardImg4 from "@/assets/cards/cover5.jpg";

const 
ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Lath & Plaster",
      description: "The most common exterior finish used in the Western United States providing high durability and architectural flexibility.",
    },
    {
      title: "EFIS",
      description: "Exterior insulation and finish system is a general class of non-load bearing building cladding systems that provides exterior walls with an insulated, water-resistant, finished surface in an integrated composite material system."
    },
    {
      title: "Vencer",
      description: "Veneer a thin layer of any stone used as decorative facing material that is not meant to be load bearing. Stone cladding is a stone veneer, or simulated stone, applied to a building or other structure made of a material other than stone."
    },
    {
      title: "Nichita Fiber Cement Panels",
      description: "Nichita Fiber Cement Panels are premium-quality, durable building materials designed for both exterior and interior applications."
    }
  ];

  return (
    <section className="md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 ">
        
        {/* Section Header */}
        <div className="mb-6 md:mb-12">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-emerald-600"></div>
            <p className="text-[#231F20] md:text-xl text-base font-semibold">Our services</p>
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col md:gap-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 max-w-2xl leading-snug sm:leading-tight">
     Generations of plasterers with over 30 years of combined experience.
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[#496187] text-sm sm:text-base font-poppins max-w-3xl text-justify">
           With over 20 years of experience, Jimenez Plastering delivers high-quality, durable finishes for both luxury homes and large-scale commercial projects across Arizona.
            </p>
            <Button className="whitespace-nowrap self-start md:self-auto">
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Services Cards */}
        <div className="space-y-6 mt-10">
          {/* First Row */}
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="relative overflow-hidden shadow-md w-full md:w-[40%] rounded-[12px] bg-[linear-gradient(180deg,rgba(1,25,54,0.10)_0%,rgba(1,25,54,0.80)_100%)]">
              <Image
                src={CardImg2}
                alt={services[0].title}
               width={400}
                height={800}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold mb-1 playfair-font md:text-[32px] text-2xl text-justify">
                  {services[0].title}
                </h3>
                <p className="text-white text-sm md:text-base font-poppins font-medium text-justify">
                  {services[0].description}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden shadow-md w-full md:w-[60%] rounded-[12px] bg-[linear-gradient(180deg,rgba(1,25,54,0.10)_0%,rgba(1,25,54,0.80)_100%)] mt-6 md:mt-0">
              <Image
                src={CardImg1}
                alt={services[1].title}
               width={400}
                height={800}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold mb-1 playfair-font md:text-[32px] text-2xl">
                  {services[1].title}
                </h3>
                <p className="text-white text-sm md:text-base font-poppins font-medium">
                  {services[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="relative overflow-hidden shadow-md w-full md:w-[60%] rounded-[12px] bg-[linear-gradient(180deg,rgba(1,25,54,0.10)_0%,rgba(1,25,54,0.80)_100%)]">
              <Image
                src={CardImg3}
                alt={services[2].title}
               width={400}
                height={800}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold mb-1 playfair-font md:text-[32px] text-2xl">
                  {services[2].title}
                </h3>
                <p className="text-white text-sm md:text-base font-poppins font-medium">
                  {services[2].description}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden shadow-md w-full md:w-[40%] rounded-[12px] bg-[linear-gradient(180deg,rgba(1,25,54,0.10)_0%,rgba(1,25,54,0.80)_100%)] mt-6 md:mt-0">
              <Image
                src={CardImg4}
                alt={services[3].title}
                width={400}
                height={800}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold mb-1 playfair-font md:text-[32px] text-2xl">
                  {services[3].title}
                </h3>
                <p className="text-white text-sm md:text-base font-poppins font-medium">
                  {services[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
