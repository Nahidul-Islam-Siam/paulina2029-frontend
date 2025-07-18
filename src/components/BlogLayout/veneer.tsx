import Image from "next/image";
import React from "react";
import SocialShare from "./SocialShare";
import LeftImg from "@/assets/service-img/left-img.png";
import RightImg from "@/assets/service-img/right3.png";

const veneer = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 my-10 px-4 lg:px-0">
      {/* Left Side */}
      <div className="w-full md:w-[40%] flex flex-col gap-4">
        <Image
          src={LeftImg}
          alt="Img"
          width={500}
          height={500}
          className="rounded-md border border-green-600 object-contain"
        />
        <div className="bg-[#01193605] py-4 px-4 mb-2 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-3 font-poppins">
            Table of Contents
          </h2>
          <ul className="list-none text-[#231F20] font-bold space-y-3">
            <li className="hover:text-[#009245] transition-colors duration-300">Introduction</li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">Veneer: Superior Aesthetic and Protection</li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">Identifying and Preventing Future Problems</li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">Veneer: The Smart Choice for Your Home</li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">The Jimenez Plastering Advantage</li>
          </ul>
        </div>
        <SocialShare />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[60%] flex flex-col gap-10 mt-6 md:mt-0 text-justify">
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4 font-playfair leading-snug">
            Veneer: Superior Aesthetic and Protection
          </h2>
          <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            Veneer is a thin, decorative layer of stone applied to exterior
            surfaces to give them the natural beauty of stone without the weight
            or cost. Our skilled team applies veneer with precision, creating a
            seamless, sophisticated finish that enhances both the visual appeal
            and durability of your home.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 font-poppins">
            Identifying and Preventing Future Problems{" "}
          </h2>
          <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            We ensure that the veneer system we install is durable and secure.
            We inspect for potential issues such as:
          </p>

          <div className="mt-6 space-y-4 font-poppins">
            <h3 className="text-2xl font-bold mb-2">
              Identifying and Preventing Future Problems
            </h3>
            <p className="text-[#496187] text-[16px]">
              A proper lath and plaster system doesn&#39;t just look great — it
              protects your home. When we work on your property, we also inspect
              for early signs of issues like:
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Water Damage:</span>
              Preventing moisture from seeping into your walls.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Loose Panels: </span>
              Ensuring secure attachment to maintain protection.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Water Damage: </span>
              Ensuring the material remains intact through weather changes.
            </p>
            <p className="text-[#496187] text-[16px]">
              We take a proactive approach to ensure your siding remains in top
              condition for years to come.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">
            Veneer: The Smart Choice for Your Home
          </h1>
          <Image
            src={RightImg}
            alt="Img"
            width={500}
            height={400}
            className="w-full rounded-md my-4 object-cover"
          />
          <p className="mb-2 text-[#496187] font-poppins text-[16px]">
            While other materials may offer short-term solutions, veneer
            provides exceptional long-term value:
          </p>
          <ul className="list-none space-y-2 text-[16px] text-[#496187] font-poppins">
            <li>
              <span className="font-bold text-black">Durability:</span> Choose
              from a variety of natural stones and textures to complement your
              style.
            </li>
            <li>
              <span className="font-bold text-black">
                Lightweight Protection:
              </span>{" "}
              Veneer adds beauty without the added weight of full stone
              cladding.
            </li>
            <li>
              <span className="font-bold text-black">Durability:</span> With
              proper care, veneer systems last for decades, adding value to your
              property
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-5 mb-4">
            The Jimenez Plastering Advantage
          </h4>
          <p className="text-[#496187] font-poppins text-[16px]">
            At Jimenez Plastering Inc., we combine craftsmanship with modern
            materials to deliver superior veneer installations. Our experienced
            team is committed to providing the highest quality service, ensuring
            your home or business is protected with both elegance and strength.{" "}
            <br />
            We take pride in creating work that&#39;s as solid as it is striking — work you&#39;ll be proud to show off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default veneer;
