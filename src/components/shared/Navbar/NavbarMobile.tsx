"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type NavbarMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function NavbarMobile({ isOpen, onClose }: NavbarMobileProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close sidebar when clicking on a link
  const handleLinkClick = () => {
    onClose();
  };

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b">
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
            <span className="text-sm md:text-xl font-bold text-green-600 font-serif">
              Jimenez Plastering Inc.
            </span>
          </Link>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col p-4">
          <Link 
            href="/"
            className="py-3 text-gray-700 hover:text-green-600 transition-colors border-b border-gray-100"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            href="/about-us"
            className="py-3 text-gray-700 hover:text-green-600 transition-colors border-b border-gray-100"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link 
            href="/portfolios"
            className="py-3 text-gray-700 hover:text-green-600 transition-colors border-b border-gray-100"
            onClick={handleLinkClick}
          >
            Portfolios
          </Link>

          {/* Services dropdown */}
          <div className="border-b border-gray-100">
            <button 
              className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown 
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen ? "rotate-180" : ""
                )}
              />
            </button>

            {/* Services submenu */}
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                servicesOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pl-4 py-1 space-y-2">
                <Link 
                  href="/services-lath-&-plaster"
                  className="block py-2 text-gray-700 hover:text-green-600"
                  onClick={handleLinkClick}
                >
                  Lath & Plaster
                </Link>
                <Link 
                  href="/services-siding"
                  className="block py-2 text-gray-700 hover:text-green-600"
                  onClick={handleLinkClick}
                >
                  Siding
                </Link>
                <Link 
                  href="/services-efis"
                  className="block py-2 text-gray-700 hover:text-green-600"
                  onClick={handleLinkClick}
                >
                  EFIS
                </Link>
                <Link 
                  href="/services-veneer"
                  className="block py-2 text-gray-700 hover:text-green-600"
                  onClick={handleLinkClick}
                >
                  Veneer
                </Link>
              </div>
            </div>
          </div>

          {/* Contact button for mobile */}
          <div className="mt-4 pt-3">
            <div className="mb-4">
              <span className="text-gray-700 block mb-1">Call Us: </span>
              <a
                href="tel:928-634-9065"
                className="text-gray-700 font-medium hover:text-green-600 transition-colors"
                onClick={handleLinkClick}
              >
                928-634-9065
              </a>
            </div>
            <Link
              href="/contact-us"
              className="block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-center transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}