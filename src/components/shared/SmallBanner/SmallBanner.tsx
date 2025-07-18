'use client'
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import Image from "next/image"; // Importing Image component from Next.js
import React, { FC } from "react";

interface SmallBannerProps {
  backgroundImage: string | StaticImageData;
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SmallBanner: FC<SmallBannerProps> = ({
  backgroundImage,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName
}) => {
  
  const imageUrl =
    typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full h-full">
   
        <Image
          src={imageUrl}
          alt="Banner Image"
          layout="fill" 
          objectFit="cover" 
          className="absolute top-0 left-0 z-0"
        />

        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"
          style={{
            background: `linear-gradient(90deg, rgba(0, 0, 0, 0.50) 41.73%, rgba(0, 0, 0, 0.00) 100%)`
          }}
        ></div>

     
        <div className="relative z-20 py-12 container">
          {title && (
            <h1
              className={cn(
                "text-white text-xl xs:text-3xl md:text-4xl font-extrabold mb-2 md:mb-4",
                titleClassName
              )}
            >
              {title}
            </h1>
          )}
          {description && (
            <p
              className={cn("text-white text-sm sm:text-base font-medium", descriptionClassName)}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
