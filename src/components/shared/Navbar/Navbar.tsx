"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="w-full py-4 border-b border-gray-100 bg-white sticky top-0 z-30">
        <div className="container w-full mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/logo.png"
                alt="Jimenez Plastering Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-green-600 font-serif">
              Jimenez Plastering Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap items-center gap-x-2 lg:gap-x-6">
            <Link
              href="/"
              className="text-sm sm:text-base lg:text-lg text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-[#CBCBCB] hidden sm:inline">|</span>

            <Link
              href="/about-us"
              className="text-sm sm:text-base lg:text-lg text-gray-700 hover:text-green-600 transition-colors"
            >
              About Us
            </Link>
            <span className="text-[#CBCBCB] hidden sm:inline">|</span>

            <Link
              href="/portfolios"
              className="text-sm sm:text-base lg:text-lg text-gray-700 hover:text-green-600 transition-colors"
            >
              Portfolios
            </Link>
            <span className="text-[#CBCBCB] hidden sm:inline">|</span>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-sm sm:text-base lg:text-lg text-gray-700 hover:text-green-600 transition-colors focus:outline-none"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md border border-gray-100 rounded-md min-w-[200px] z-20 animate-fadeIn">
                  <Link
                    href="/services-lath-&-plaster"
                    className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Lath & Plaster
                  </Link>
                  {/* <Link
                    href="/services-siding"
                    className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Siding
                  </Link> */}
                  <Link
                    href="/services-efis"
                    className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    EFIS
                  </Link>
                  <Link
                    href="/services-veneer"
                    className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  >
                    Veneer
                  </Link>
                </div>
              )}
            </div>
          </nav>

         
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden lg:block">
              <span className="text-sm md:text-base text-gray-700">Call Us: </span>
              <a
                href="tel:928-634-9065"
                className="text-sm md:text-base text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                928-634-9065
              </a>
            </div>
            <Link
              href="/contact-us"
              className="whitespace-nowrap bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md transition-colors font-medium"
            >
              Contact Us
            </Link>

            
            <button
              className="md:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

    
      <NavbarMobile
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
