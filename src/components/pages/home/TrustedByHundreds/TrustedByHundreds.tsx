import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import building from "@/assets/building.png";
import { Button } from "@/components/ui/button";

export default function AboutUsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative rounded-lg">
            <Image
              src={building}
              alt="Modern stucco home with blue sky"
              width={800}
              height={600}
              className="h-[350px] sm:h-[550px] lg:h-full w-full md:object-cover rounded-md"
            />

            {/* Overlay Card - Responsive positioning only */}
            <div
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-6 lg:bottom-12 lg:-right-8 xl:bottom-16 xl:-right-10 bg-white bg-opacity-100 p-3 sm:p-4 md:p-5 rounded-lg shadow-lg text-center z-10 w-[110px] sm:w-[140px] md:w-[180px]  lg:w-[200px]"
              style={{
                backgroundImage: "url('/images/minicard.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "100%",
              }}
            >
              <p className="text-[10px] sm:text-xs text-[#496187] font-bold font-playfair">
                Established in
              </p>
              <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black font-poppins">
                1998
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[1px] bg-emerald-600"></div>
                <p className="text-[#231F20] text-base sm:text-lg md:text-xl font-semibold">
                  About Us
                </p>
              </div>
              <h3 className="mt-1 text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-snug">
                The Jimenez Plastering Difference
              </h3>
            </div>

            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] text-justify leading-relaxed">
              <b>Jimenez Plastering Inc.</b> Founded in 1998 • Cottonwood, AZ •
              Serving Northern Arizona. Established in 1998 by{" "}
              <b>Gonzalo Jimenez,</b> Jimenez Plastering is a family-owned
              plastering and stucco company rooted in generations of
              craftsmanship serving Northern Arizona. Backed by over{" "}
              <b>30 years of combined experience,</b> with Gonzalo himself
              bringing more than <b>25 years</b> to the trade, we have become
              the trusted choice for residential custom homes and commercial
              build-outs.
            </p>

            <h4 className="font-bold text-base sm:text-lg md:text-xl">
              What Sets Us Apart
            </h4>

            <ul className="space-y-4 text-sm sm:text-base md:text-[16px] text-justify">
              {[
                {
                  title: "Decades of Proven Skill",
                  desc: `Founded by Gonzalo Jimenez—who continues to lead as President—our company draws on four generations of plastering expertise`,
                },
                {
                  title: "Precision-Focused Craftsmanship",
                  desc: `Fully licensed (ROC #172206 K‑36), we pride ourselves on exacting workmanship and tailored exterior systems designed specifically for Northern Arizona’s climate`,
                },
                {
                  title: "Broad-Range Exterior Finishes",
                  desc: `Specializing in one- and three-coat stucco systems, EFIS, stone veneer, siding, and lath & plaster—ideal for custom homes, commercial sites, and institutional projects.`,
                },
                {
                  title: "Trusted and Local",
                  desc: `Headquartered in Cottonwood with two local locations, we're the preferred plastering contractor in the region, with a solid reputation for professionalism and attention to detail.`,
                },
                {
                  title: "Licensed & Bonded",
                  desc: `Arizona-registered with ROC license #172206 K‑36, our team meets all state requirements for licensing, insurance, and quality standards`,
                },
              ].map(({ title, desc }, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#16A34A]" />
                  <div>
                    <span className="text-gray-700 font-bold">
                      {title} <br />
                    </span>
                    {desc}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <Link href="/contact-us" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto text-sm sm:text-base px-4 py-2">
                  Contact Us
                </Button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-sm sm:text-base px-4 py-2"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
