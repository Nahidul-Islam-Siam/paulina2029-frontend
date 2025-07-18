
import React from "react";
import trustedTraderImage from "@/assets/trustedTrader.png";
import thumbWithImage from "@/assets/thumbWithLove.png";
import ImageWithFallBackSystem from "@/components/ui/ImageWithFallBackSystem/ImageWithFallBackSystem";

const TrustedTrader = () => {
  return (
  <div className="container mb-10 md:mb-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 my-10 lg:my-32">
      <div className=" lg:h-44 flex flex-col justify-between">
        <p className="mb-2 text-2xl lg:text-4xl font-extrabold lg:max-w-[500px] text-blue-primary text-start">
          London Gutter Clean Ltd Recommended by
        </p>
        <div className="flex items-center gap-2">
          <ImageWithFallBackSystem
            imageSrc={thumbWithImage}
            alt="trusted trader image"
            className="h-10 w-10"
          />
          <div>
            <p className="text-xl font-bold">Recommended</p>
            <p className="text-gray-light text-sm font-medium">
              By 100% Customer
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <ImageWithFallBackSystem
          imageSrc={trustedTraderImage}
          alt="trusted trader image"
          className="h-44 w-56"
        />
      </div>
      <div className=" lg:h-44 flex flex-col justify-between lg:items-end">
        <p className="text-2xl lg:text-4xl font-extrabold lg:max-w-[520px] text-blue-primary lg:text-end mb-2">
          Which? Trusted Traders customer reviews summary
        </p>
        <div className="flex items-center gap-5">
          <div>
            <h5 className="text-xl font-bold text-red-600">5.0</h5>
            <p className="text-gray-light text-sm font-medium">
              Customer Service
            </p>
          </div>
          <div className="border h-10 border-gray-light"></div>
          <div>
            <h5 className="text-xl font-bold text-red-600">5.0</h5>
            <p className="text-gray-light text-sm font-medium">
            Quality
            </p>
          </div>
          <div className="border h-10 border-gray-light"></div>
          <div>
            <h5 className="text-xl font-bold text-red-600">5.0</h5>
            <p className="text-gray-light text-sm font-medium">
            Value
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-transparent via-red-600 to-transparent w-full h-[2px]">

    </div>
  </div>
  );
};

export default TrustedTrader;
