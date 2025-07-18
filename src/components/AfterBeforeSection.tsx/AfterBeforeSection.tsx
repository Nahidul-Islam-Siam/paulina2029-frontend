"use client"
import card1 from "@/assets/cards/card1.jpg"
import card2 from "@/assets/cards/card2.jpg"
import card3 from "@/assets/cards/card3.jpg"
import card4 from "@/assets/cards/card4.jpg"
import card5 from "@/assets/cards/card5.jpg"
import card6 from "@/assets/cards/card6.jpg"
import card7 from "@/assets/cards/card7.jpg"
import card8 from "@/assets/cards/card8.jpg"
import BeforeAfterItem from "./before-after-item"

export default function BeforeAfterSection() {
  const beforeAfterItems = [
    {
      id: 1,
      beforeImg: card1,
      afterImg: card2,
      alt: "Home renovation before and after",
    },

    {
      id: 3,
      beforeImg: card3,
      afterImg: card4,
      alt: "Cabin renovation before and after",
    },

    {
      id: 5,
      beforeImg: card5,
      afterImg: card6,
      alt: "Home exterior before and after",
    },
    // {
    //   id: 6,
    //   beforeImg: card7,
    //   afterImg: card8,
    //   alt: "House renovation before and after",
    // },
  ]

  return (
    <section className="w-full md:py-16 py-8 px-4 md:px-8 relative overflow-hidden portfolio">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="md:mb-8 mb-4 sm:mb-12">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[1px] bg-emerald-600"></div>
            <p className="text-[#231F20] md:text-xl text-base font-semibold">Before & After</p>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 mb-4 max-w-2xl">
          Current Lath & Plaster Condition: What Needs Attention
        </h2>

        {/* Description */}
        <p className="text-stone-700 md:mb-10 mb-6 max-w-2xl text-justify">
          From repairs to full installations, Jammer Plastering Inc. provides expert lath and plaster services that
          enhance durability and aesthetics, ensuring long-lasting beauty for your home or business.
        </p>

        {/* Before/After Grid with Interactive Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterItems.map((item) => (
            <BeforeAfterItem key={item.id} beforeImg={item.beforeImg} afterImg={item.afterImg} alt={item.alt} />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D4A76A"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.5,-0.3C89,15.7,85.4,31.4,77.4,44.7C69.4,58,56.9,68.9,42.8,75.2C28.7,81.5,14.4,83.2,-0.2,83.5C-14.7,83.8,-29.4,82.8,-42.3,76.5C-55.2,70.2,-66.3,58.7,-74.6,45.1C-82.8,31.4,-88.2,15.7,-88.2,0C-88.2,-15.7,-82.8,-31.4,-74.4,-44.9C-66,-58.4,-54.6,-69.7,-41.2,-77.1C-27.8,-84.5,-13.9,-88.1,1,-89.8C15.9,-91.5,31.7,-93.3,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 left-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D4A76A"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.5,-0.3C89,15.7,85.4,31.4,77.4,44.7C69.4,58,56.9,68.9,42.8,75.2C28.7,81.5,14.4,83.2,-0.2,83.5C-14.7,83.8,-29.4,82.8,-42.3,76.5C-55.2,70.2,-66.3,58.7,-74.6,45.1C-82.8,31.4,-88.2,15.7,-88.2,0C-88.2,-15.7,-82.8,-31.4,-74.4,-44.9C-66,-58.4,-54.6,-69.7,-41.2,-77.1C-27.8,-84.5,-13.9,-88.1,1,-89.8C15.9,-91.5,31.7,-93.3,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  )
}
