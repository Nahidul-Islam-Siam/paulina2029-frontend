"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Swiper as SwiperType } from "swiper"

const PortfolioSection = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  const portfolioItems = [
    {
      title: "Custom Home Plastering",
      image: "/portCard/portCard1.jpg",
    },
    {
      title: "Stucco & Exterior Cladding",
       image: "/portCard/portCard2.jpg",
    },
    {
      title: "Luxury Home Finishes",
       image: "/portCard/portCard3.jpg",
    },
    {
      title: "Commercial Projects",
        image: "/portCard/portCard4.jpg",
    },
    {
      title: "Specialty Finishes",
      image: "/portCard/portCard5.jpg",
    },
    {
      title: "Interior Plastering",
      image: "/portCard/portCard6.jpg",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:py-16 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-emerald-600"></div>
            <p className="text-[#231F20] md:text-xl text-base font-semibold">Our Portfolio</p>
          </div>
          <h2 className="md:text-[40px] text-3xl font-bold text-[#231F20] mb-4">
            Delivering Excellence in Every Project
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-4">
            <p className="text-[#496187] max-w-2xl md:mb-6 md:text-base text-sm text-justify">
              With over 30 years of experience, Jimenez Plastering delivers high-quality, long-lasting finishes for
              luxury residences and large-scale commercial developments across Arizona. Our licensed and insured team
              specializes in stucco, EIFS, stone veneer, and custom plastering—applying industry best practices and
              climate-adapted techniques to ensure beautiful, durable results. Depend on Jimenez Plastering for superior
              craftsmanship, reliable service, and finishes built to endure.
            </p>
            <Link href="/portfolios">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Explore Our Portfolio</Button>
            </Link>
          </div>
        </div>

        {/* Portfolio Swiper */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="text-emerald-600 w-6 h-6" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="text-emerald-600 w-6 h-6" />
          </button>

          {/* Swiper */}
          <div className="px-6 sm:px-16">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !w-4 !h-4 !bg-gray-300",
                bulletActiveClass: "swiper-pagination-bullet-active !border-[3px] !border-emerald-600 !bg-transparent",
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
              }}
              modules={[Navigation, Pagination]}
              className="!pb-16"
            >
              {portfolioItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg overflow-hidden shadow group relative bg-white h-full">
                    <div className="aspect-w-4 aspect-h-3 w-full">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                        style={{
                          height: "clamp(250px, 30vw, 500px)",
                          maxHeight: "500px",
                        }}
                      />
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 p-4 m-2 text-white text-center backdrop-blur-sm bg-black/30 rounded-lg">
                      <h3 className="font-semibold md:text-xl text-lg">{item.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullets {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 1rem;
        }
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background-color: #ddd;
          opacity: 1;
          border-radius: 9999px;
        }
        .swiper-pagination-bullet-active {
          background-color: transparent;
          border: 3px solid #059669;
        }
      `}</style>
    </section>
  )
}

export default PortfolioSection
