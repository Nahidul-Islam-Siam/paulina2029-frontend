import Image from "next/image";
import React from "react";
import SocialShare from "./SocialShare";
import LeftImg from "@/assets/service-img/left-img.png";
import RightImg from "@/assets/service-img/right.png";

const LathPlaster = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 my-10 px-4 lg:px-0">
      {/* Left Side */}
      <div className="w-full md:w-[40%] flex flex-col gap-4">
        <Image
          src={LeftImg}
          alt="Img"
          width={500}
          height={400}
          className="rounded-md border border-green-600 object-cover"
        />
        <div className="bg-[#01193605] py-4 px-4 mb-2 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-3 font-poppins">
            Table of Contents
          </h2>
          <ul className="list-none text-[#231F20] font-bold space-y-3">
            <li className="hover:text-[#009245] transition-colors duration-300">
              Introduction
            </li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">
              A Superior Finish, Every Time
            </li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">
              Identifying and Preventing Future Problems
            </li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">
              Lath & Plaster: The Smart Choice
            </li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">
              The Jimenez Plastering Advantage
            </li>
          </ul>
        </div>
        <SocialShare />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[60%] flex flex-col gap-10 mt-6 md:mt-0 text-justify">
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4 font-playfair leading-snug">
            Lath & Plaster: Lasting Beauty and Strength for Your Home
          </h2>
          <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            Keeping your home&apos;s exterior strong and beautiful starts with
            the right materials. When it comes to durability and design
            flexibility, lath and plaster remain a trusted choice. At Jimenez
            Plastering Inc., we deliver expert craftsmanship that stands the
            test of time. Here&apos;s why homeowners and builders across
            Wisconsin and Northern Illinois choose us.
          </p>
        </div>

        <div className="px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 font-poppins">
            Why Choose Jimenez Plastering, Inc.?
          </h2>

          <p className="text-[#496187] text-sm sm:text-base md:text-[17px] leading-relaxed font-medium font-poppins">
            At Jimenez Plastering, Inc., we are committed to delivering
            exceptional craftsmanship and personalized service in every project.
            Here's why homeowners and builders across Arizona trust us:
          </p>

          <div className="mt-5 sm:mt-6 space-y-4 font-poppins">
            <p className="text-[#496187] text-sm sm:text-base md:text-[17px]">
              <span className="text-black font-bold">Proven Expertise:</span>{" "}
              With over 25 years in the plastering industry and a family legacy
              spanning more than 30 years, we bring unparalleled experience to
              each project.
            </p>

            <p className="text-[#496187] text-sm sm:text-base md:text-[17px]">
              <span className="text-black font-bold">
                Comprehensive Services:
              </span>{" "}
              We specialize in both interior and exterior plastering, offering
              solutions such as one-coat and three-coat systems, EIFS, stone
              veneer, and custom finishes tailored to your needs.
            </p>

            <p className="text-[#496187] text-sm sm:text-base md:text-[17px]">
              <span className="text-black font-bold">Quality Assurance:</span>{" "}
              We utilize systems developed over decades that are cost-effective,
              durable, and designed to withstand Arizona's unique climate
              conditions.
            </p>

            <p className="text-[#496187] text-sm sm:text-base md:text-[17px]">
              <span className="text-black font-bold">
                Client-Focused Approach:
              </span>{" "}
              Our team prioritizes clear communication and transparent guidance,
              ensuring that your vision is realized with precision and care.
            </p>

            <p className="text-[#496187] text-sm sm:text-base md:text-[17px]">
              <span className="text-black font-bold">
                Licensed and Insured:
              </span>{" "}
              As a fully licensed and insured company (ROC #172206 K-36), we
              adhere to the highest industry standards, providing peace of mind
              throughout your project.
            </p>

            <Image
              src={RightImg}
              alt="Custom Plastering Example"
              width={500}
              height={400}
              className="w-full rounded-md my-4 object-cover"
            />

            <p className="text-black text-sm sm:text-base md:text-[17px] font-medium">
              Choose <b>Jimenez Plastering Inc.</b> for your next project and
              experience the difference that dedication and expertise can make.
            </p>
          </div>
        </div>

        {/* <div>
          <h1 className="text-xl font-bold mb-2">
            Lath & Plaster: The Smart Choice
          </h1>
          <Image
            src={RightImg}
            alt="Img"
            width={500}
            height={400}
            className="w-full rounded-md my-4 object-cover"
          />
          <p className="mb-2 text-[#496187] font-poppins text-[16px]">
            While other finishes may seem quicker, they often can&rsquo;t match
            the long-term value of lath and plaster:
          </p>
          <ul className="list-none space-y-2 text-[16px] text-[#496187] font-poppins mb-2">
            <li>
              <span className="font-bold text-black">Better Insulation:</span>{" "}
              Keeps your home cooler in summer, warmer in winter.
            </li>
            <li>
              <span className="font-bold text-black">Customizable Design:</span>{" "}
              Choose from endless textures, finishes, and architectural styles.
            </li>
            <li>
              <span className="font-bold text-black">
                Incredible Longevity:
              </span>{" "}
              With proper care, lath and plaster can last generations.
            </li>
          </ul>
          <p className="mb-2 text-[#496187] font-poppins text-[16px]">
            When quality matters, lath and plaster is the solution trusted by
            builders for centuries.
          </p>
          <h4 className="text-lg font-semibold mt-5 mb-4">
            The Jimenez Plastering Advantage
          </h4>
          <p className="text-[#496187] font-poppins text-[16px]">
            Our experienced team brings a hands-on approach to every project. We
            use top-grade materials, proven techniques, and an eye for detail to
            ensure your exterior is not only beautiful but also protected for
            years to come. <br />
            We take pride in creating work that&rsquo;s as solid as it is
            striking &mdash; work you&rsquo;ll be proud to show off.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LathPlaster;
