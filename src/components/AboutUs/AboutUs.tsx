"use client";

import Image from "next/image";
// import HeroBanner from "@/assets/about/about-hero.jpg"; 
import HistoryImg from "@/assets/about/image2.jpg";
import GoalImg from "@/assets/about/image9.jpg";
import HeroSection from "../SmallHero/SmallHero";
import ContactPage from "../ContactUs/ContactUs";

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="About Us"
        description="Founded in 1998 by Gonzalo Jimenez with generations of plasterers before him. Jimenez Plastering is a family-run corporation serving Northern Arizona since 1998. Specializing in large-scale residential and commercial projects in lath and plastering. Jimenez Plastering has been the trusted and preferred stucco contractor in Northern Arizona."
        bgClass="about"
      />

      <section className="md:py-16 py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 md:gap-8 gap-6 items-center">
            <div className="order-2 md:order-1">
              <Image
                src={HistoryImg}
                alt="Commercial building with plastering work"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[1px] bg-emerald-600"></div>
                <p className="text-[#231F20] md:text-xl text-base font-semibold">
                  History
                </p>
              </div>
              <h2 className="md:text-3xl text-2xl font-bold md:mb-6 mb-4 text-justify">
                Jimenez Plastering, Inc. – History Summary
              </h2>
              <div className="space-y-4 text-gray-600 text-justify">
                <p>
                  Founded In 1998, by Gonzalo Jimenez, Jimenez Plastering, Inc.
                  emerged from a legacy of plastering expertise—marking 25 years
                  of dedicated service built on a family tradition spanning over
                  four decades.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Starting with small-scale residential projects, Gonzalo and
                  his team expanded their scope through the early 2000s. Over
                  the past 25 years, the company has evolved into a trusted
                  full-scale provider of luxury custom homes and commercial
                  developments across Northern Arizona.{" "}
                </p>{" "}
                <p>
                  {" "}
                  During this time, Jimenez Plastering has developed core
                  expertise in stucco and plaster finishing techniques—ranging
                  from one-coat and three-coat systems to advanced EIFS and
                  stone veneer—while refining durable, climate-resistant methods
                  tailored to Arizona’s environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="py-6 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-[1px] bg-emerald-600"></div>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-[#231F20]">
                  Our Goal
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-justify mb-3 md:mb-5">
                Mission Statement:
              </h2>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base md:text-[17px] text-justify leading-relaxed">
                <p>
                  To deliver exceptional, custom-plastered exteriors
                  characterized by precision, durability, and a steadfast
                  commitment to client satisfaction.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-justify mt-6 mb-3 md:mt-8 md:mb-5">
                Strategic Goals:
              </h2>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base md:text-[17px] text-justify leading-relaxed">
                <p>
                  Jimenez Plastering, Inc. aims to continuously learn, improve,
                  and test new products to provide a positive quality experience
                  along with quality products to clients for the years to come.
                  The company's strategy focuses on building on its strengths
                  and remaining focused on the values that have built the
                  company to where it is now by putting clients' interests first
                  and providing proper guidance to them and the community.
                </p>
              </div>
            </div>

            <div>
              <Image
                src={GoalImg}
                alt="Custom home with quality plastering"
                width={500}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactPage />
    </main>
  );
}
