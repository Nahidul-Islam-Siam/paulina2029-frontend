import HappenBanner from "@/components/cards/HappenBanner/cards/HappendBaner";
import ContactPage from "@/components/ContactUs/ContactUs";
import Banner from "@/components/pages/home/banner/Banner";
import PortfolioSwiper from "@/components/pages/home/Our-Portfolio/Portfolio";
import OurService from "@/components/pages/home/OurService/OurService";
import TrustedByHundreds from "@/components/pages/home/TrustedByHundreds/TrustedByHundreds";
import TestimonialSection from "@/components/Testimonial/Testimonial";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
};

const Home = () => {
  return (
    <>
      <Banner />
      <TrustedByHundreds />
      <OurService />
      {/* <HappenBanner /> */}
      <TestimonialSection />
      <PortfolioSwiper />
      <ContactPage />
    </>
  );
};

export default Home;
