"use client";

import { useState, useEffect } from "react";
import bannerImage from "@/assets/home/bgHero1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import playbtn from "@/assets/home/PlayBtn.png";
import "./Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); 

  const BannerSlide = () => (
    <div
      className={`pt-10 md:pt-20 pb-20 md:pb-[250px] bg-cover h-full bg-center relative before:content-[''] before:absolute before:inset-0 before:z-[1]`}
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      <div className="container relative z-10 text-white px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.16)] backdrop-blur-[10px] rounded-[48px] px-3 md:px-4 py-1 md:py-2 mb-2 md:mb-2">
          <p className="poppins-font text-xs sm:text-sm md:text-xl font-normal md:font-semibold">
            Your Stucco Experts—Reliable, Proven, Trusted
          </p>
        </span>

        <h1 className="playfair-font font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[68px] leading-tight md:leading-[90px] mb-4 md:mb-4 max-w-4xl">
          YOUR DREAM <br /> HOME
        </h1>

        <p className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.16)] backdrop-blur-[10px] rounded-[48px] px-3 md:px-4 py-1 md:py-2 mb-2 md:mb-2 text-green-500">
          Trusted by over 300+ of the world`&lsquo;s leading brands
        </p>

        <div className="flex   items-center sm:items-center gap-4 mt-4 md:mt-8 pb-10">
          <Link href="/contact-us">
            <Button>Contact Us</Button>
          </Link>

          <button className="flex items-center gap-2 text-gray-800 font-semibold text-sm md:text-base py-3 px-6 rounded-[48px]">
            <Image src={playbtn} alt="Play Button" width={40} height={40} />
            See How It Works
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="relative">
      {mounted && (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="banner-swiper"
        >
          <SwiperSlide>
            <BannerSlide />
          </SwiperSlide>
          <SwiperSlide>
            <BannerSlide />
          </SwiperSlide>
        </Swiper>
      )}
    </main>
  );
};

export default Banner;
