import Image from "next/image";
import React from "react";
import SocialShare from "./SocialShare";
import LeftImg from "@/assets/service-img/left2.jpg";
import RightImg from "@/assets/service-img/right5.png";

const EifcSction = () => {
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
            <li className="hover:text-[#009245] transition-colors duration-300">
              Introduction
            </li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">
              Siding: A Strong, Protective Finish
            </li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">
              Identifying and Preventing Future Problems
            </li>
            <hr />
            <li className="hover:text-[#009245] transition-colors duration-300">
              Siding: The Smart Choice for Your Property
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
            Exterior Insulation and Finish Systems (EIFS): A Modern Cladding
            Solution
          </h2>
          <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            <span className="font-bold text-black">
              What Is EIFS?
              <br />
            </span>
            Exterior Insulation and Finish Systems (EIFS) are advanced,
            non-load-bearing cladding systems that provide exterior walls with
            an insulated, water-resistant, and aesthetically pleasing surface.
            Unlike traditional stucco, EIFS incorporates multiple layers to
            enhance thermal performance, moisture control, and design
            flexibility.
          </p>
        </div>

        <div>
          {/* <h2 className="text-2xl font-semibold mb-3 font-poppins">
            Key Components:
          </h2> */}
          {/* <p className="text-[#496187] leading-relaxed font-poppins font-[500] text-[16px]">
            Siding is the protective material applied to the outer walls of your
            home, designed to shield against the elements while enhancing its
            appearance. Our team ensures seamless application, offering a
            variety of materials to match your style and provide long-lasting
            protection.
          </p> */}

          <div className="space-y-4 font-poppins mb-2">
            <h3 className="text-lg font-bold mb-2">Key Components:</h3>
            {/* <p className="text-[#496187] text-[16px]">
              We ensure that your siding not only looks great but also functions
              as a barrier against the elements. During installation, we inspect
              for potential issues such as:
            </p> */}
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">
                Water-Resistive Barrier (WRB):
              </span>
              Applied over the exterior sheathing, this barrier prevents
              moisture infiltration, safeguarding the building structure.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Insulation Board: </span>
              Typically made from expanded polystyrene (EPS), extruded
              polystyrene (XPS), or mineral wool, this layer provides continuous
              thermal insulation, improving energy efficiency.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">
                Base Coat with Reinforcing Mesh:{" "}
              </span>
              A cementitious base coat is applied over the insulation board,
              embedding a fiberglass mesh that adds strength and crack
              resistance.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Finish Coat: </span>
              The outermost layer offers a durable, textured surface that can be
              customized in various colors and finishes to achieve the desired
              aesthetic.
            </p>
          </div>

          <div className="mt-2 space-y-4 font-poppins">
            <h3 className="text-lg font-bold mb-2">Benefits of EIFS:</h3>
            {/* <p className="text-[#496187] text-[16px]">
              We ensure that your siding not only looks great but also functions
              as a barrier against the elements. During installation, we inspect
              for potential issues such as:
            </p> */}
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">Energy Efficiency:</span>
              EIFS provides continuous insulation, eliminating thermal bridging
              and significantly improving a building’s energy efficiency. The
              system’s high R-value, typically between R-4 and R-5.6 per inch of
              insulation, helps reduce heating and cooling costs.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">
                Enhanced Moisture Control:{" "}
              </span>
              Modern EIFS includes advanced moisture management features, such
              as drainage planes and water-resistive barriers, which prevent
              water infiltration and manage moisture effectively. These features
              reduce the risk of mold growth and structural damage.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">
                Aesthetic Versatility:{" "}
              </span>
              EIFS can mimic a variety of finishes, including brick, stone, and
              stucco, offering architects and builders unparalleled design
              flexibility. The finish coats are available in numerous textures
              and colors, enabling customized and visually appealing facades.
            </p>
            <p className="text-[#496187] text-[16px]">
              <span className="font-bold text-black">
                Durability and Fire Resistance:{" "}
              </span>
              EIFS is known for its durability and fire resistance. The system’s
              components are designed to withstand weathering, impact, and fire,
              providing a safe and long-lasting cladding solution.
            </p>
          </div>
        </div>

        <div>
          <Image
            src={RightImg}
            alt="Img"
            width={500}
            height={400}
            className="w-full rounded-md my-4 object-cover"
          />
          <p className="mb-2 text-[#496187] font-poppins text-[16px]">
            <span className="font-bold text-lg text-black">
              Applications: <br />
            </span>
            EIFS is suitable for both residential and commercial construction
            projects. Its energy efficiency, design flexibility, and durability
            make it an ideal choice for various building types, including
            single-family homes, multi-family dwellings, office buildings.
          </p>
          <p className="text-[#496187] font-poppins text-[16px]">
            <span className="font-bold text-lg text-black">
              Why Choose Jimenez Plastering, Inc. for EIFS Installation?<br />
            </span>
            At Jimenez Plastering, Inc., we specialize in the installation of
            EIFS, combining over 30 years of expertise with a commitment to
            quality craftsmanship. Our team ensures that each EIFS application
            meets the highest standards of performance and aesthetics, providing
            you with a durable and energy-efficient exterior solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EifcSction;
