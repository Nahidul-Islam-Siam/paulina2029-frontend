"use client";

import Image from "next/image";
import { FC } from "react";

import Logo from "@/assets/logo/logo.png";
import Link from "next/link";
import Apartment from "@/components/icons/Apartment";
import Call2 from "@/components/icons/Call2";
import Email2 from "@/components/icons/Email2";

const Footer: FC = () => {
  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Portfolios", path: "/portfolios" },
    { name: "Services", path: "#" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Give a Review", path: "/reviews" },
  ];

  // Service links data - Updated with all 4 sub-services
  const serviceLinks = [
    { name: "Lath & Plaster", path: "/services-lath-&-plaster" },
    {
      name: "EFIS (Exterior Insulation Finishing System)",
      path: "/services-efis",
    },
    { name: "Veneer Plastering", path: "/services-veneer" },
    { name: "Siding Installation", path: "/services-siding" },
  ];

  return (
    <footer className="footer text-white py-8 sm:py-12 bg-gray-900 relative">
      {/* Background elements (removed empty divs) */}

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16 text-sm text-gray-200">
          {/* Company Info Column */}
          <div className="w-full md:w-1/3 flex flex-col items-start text-left space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <Image
                src={Logo}
                alt="Jimenez Logo"
                width={60}
                height={68}
                className="w-12 sm:w-14 md:w-16"
              />
              <h2 className="inline text-xl sm:text-2xl text-white playfair-font font-bold">
                Jimenez Plastering Inc.
              </h2>
            </div>
            <p className="text-[#97A4BA] font-poppins text-sm sm:text-base font-normal text-justify">
              We&apos;ll ensure your gutters function flawlessly and enhance the
              overall look of your London home or business.
            </p>
          </div>

          {/* Navigation and Services Columns */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col md:flex-row items-start justify-start gap-4 sm:gap-6 text-left">
              {/* Navigation Links */}
              <div className="w-full md:w-1/2 space-y-1 sm:space-y-2">
                <h3 className="font-semibold text-white text-base sm:text-lg font-poppins">
                  Navigation
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {navLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.path}
                        className="hover:text-white text-[#97A4BA] font-poppins text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links - Updated with all 4 sub-services */}
              <div className="w-full md:w-1/2 space-y-1 sm:space-y-2">
                <h3 className="font-semibold text-white text-base sm:text-lg font-poppins">
                  Services
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {serviceLinks.map((service, idx) => (
                    <li key={idx}>
                      <Link
                        href={service.path}
                        className="hover:text-white poppins-font text-[#97A4BA] text-sm sm:text-base"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="w-full md:w-1/3 space-y-3 sm:space-y-4 flex flex-col items-start text-left">
            <h3 className="font-semibold text-white text-base sm:text-lg xl:text-xl font-poppins">
              Get In Touch With us Today
            </h3>
            <div className="flex items-start gap-2 sm:gap-3">
              <Apartment />
              <p className="text-[#97A4BA] text-sm sm:text-base font-poppins">
            Cottonwood, AZ
                <br />
              Northern Arizona
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Call2 />
              <a
                href="tel:9286349065"
                className="text-[#97A4BA] text-sm sm:text-base hover:text-white font-poppins"
              >
                928-634-9065
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Email2 />
              <a
                href="mailto:Jimenezplastering@gmail.com"
                className="text-[#97A4BA] text-sm sm:text-base break-all hover:text-white font-poppins"
              >
                Jimenezplastering@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
