// "use client"

// import Image from "next/image"
// import { useRef, useEffect, useState } from "react"

// export default function ImageComparison() {
//   const [sliderValue, setSliderValue] = useState(50)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const sliderRef = useRef<HTMLInputElement>(null)
//   const beforeImageRef = useRef<HTMLImageElement>(null)
//   const sliderLineRef = useRef<HTMLDivElement>(null)
//   const sliderIconRef = useRef<HTMLDivElement>(null)

//   // Handle slider input changes
//   const handleSliderChange = (value: number) => {
//     setSliderValue(value)
//     const valuePercent = `${value}%`

//     if (beforeImageRef.current) {
//       beforeImageRef.current.style.width = valuePercent
//     }
//     if (sliderLineRef.current) {
//       sliderLineRef.current.style.left = valuePercent
//     }
//     if (sliderIconRef.current) {
//       sliderIconRef.current.style.left = valuePercent
//     }
//   }

//   // Setup event listeners
//   useEffect(() => {
//     const slider = sliderRef.current
//     const container = containerRef.current

//     // Handle slider input
//     const handleSliderInput = (e: Event) => {
//       const target = e.target as HTMLInputElement
//       handleSliderChange(Number.parseInt(target.value, 10))
//     }

//     // Handle touch/mouse events for direct interaction
//     let isDragging = false

//     const calculateSliderPosition = (clientX: number) => {
//       if (!container) return

//       const rect = container.getBoundingClientRect()
//       const position = ((clientX - rect.left) / rect.width) * 100
//       const clampedPosition = Math.min(Math.max(position, 0), 100)

//       if (sliderRef.current) {
//         sliderRef.current.value = clampedPosition.toString()
//       }

//       handleSliderChange(clampedPosition)
//     }

//     const handleMouseDown = (e: MouseEvent) => {
//       isDragging = true
//       calculateSliderPosition(e.clientX)
//       document.body.style.cursor = "grabbing"
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isDragging) return
//       calculateSliderPosition(e.clientX)
//     }

//     const handleMouseUp = () => {
//       isDragging = false
//       document.body.style.cursor = "default"
//     }

//     const handleTouchStart = (e: TouchEvent) => {
//       isDragging = true
//       calculateSliderPosition(e.touches[0].clientX)
//     }

//     const handleTouchMove = (e: TouchEvent) => {
//       if (!isDragging) return
//       calculateSliderPosition(e.touches[0].clientX)
//     }

//     const handleTouchEnd = () => {
//       isDragging = false
//     }

//     // Add event listeners
//     if (slider) {
//       slider.addEventListener("input", handleSliderInput)
//     }

//     if (container) {
//       container.addEventListener("mousedown", handleMouseDown)
//       document.addEventListener("mousemove", handleMouseMove)
//       document.addEventListener("mouseup", handleMouseUp)

//       container.addEventListener("touchstart", handleTouchStart)
//       document.addEventListener("touchmove", handleTouchMove)
//       document.addEventListener("touchend", handleTouchEnd)
//     }

//     // Cleanup event listeners
//     return () => {
//       if (slider) {
//         slider.removeEventListener("input", handleSliderInput)
//       }

//       if (container) {
//         container.removeEventListener("mousedown", handleMouseDown)
//         document.removeEventListener("mousemove", handleMouseMove)
//         document.removeEventListener("mouseup", handleMouseUp)

//         container.removeEventListener("touchstart", handleTouchStart)
//         document.removeEventListener("touchmove", handleTouchMove)
//         document.removeEventListener("touchend", handleTouchEnd)
//       }
//     }
//   }, [])

//   return (
//     <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center animate-fade-in">
//       <div className="pt-16">
//         <div className="w-[90%] md:w-[750px] text-center pb-10 mx-auto">
//           <p className="text-xl text-[#192434]">Latest Fashion Demand</p>
//           <h2 className="text-4xl md:text-6xl text-[#192434] pb-6 font-bold uppercase mt-2">
//             Elegant{" "}
//             <span className="text-transparent" style={{ WebkitTextStroke: "1.3px #192434" }}>
//               Look
//             </span>
//           </h2>
//           <p className="text-xl text-[#192434]">
//             Our latest collection of fashion items offers something special for every occasion. Our festival and casual
//             outfits ensure you are prepared for anything.
//           </p>
//         </div>

//         <div className="w-[90%] mx-auto">
//           <div
//             ref={containerRef}
//             className="image_comparison max-w-full my-10 rounded-2xl overflow-hidden relative cursor-grab active:cursor-grabbing"
//             aria-label="Before and after image comparison slider"
//             role="slider"
//             aria-valuemin={0}
//             aria-valuemax={100}
//             aria-valuenow={sliderValue}
//           >
//             <div className="relative flex">
//               <Image
//                 ref={beforeImageRef}
//                 className="before_image absolute top-0 left-0 w-1/2 h-full object-cover object-left transition-all duration-300 ease-in-out"
//                 src="https://i.ibb.co/xGG0Z92/before-image.png"
//                 alt="Before image of fashion model"
//                 width={750}
//                 height={500}
//               />
//               <Image
//                 className="after_image w-full h-full object-cover object-left"
//                 src="https://i.ibb.co/XznmGt1/after-image.png"
//                 alt="After image of fashion model"
//                 width={750}
//                 height={500}
//               />

//               <div
//                 ref={sliderLineRef}
//                 className="slider-line absolute h-full w-1 bg-white left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out"
//                 aria-hidden="true"
//               ></div>

//               <div
//                 ref={sliderIconRef}
//                 className="slider-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 bg-white p-2 rounded-full z-10 transition-all duration-300 ease-in-out shadow-md hover:scale-110"
//                 aria-hidden="true"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="black"
//                   className="w-8 h-8"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
//                   />
//                 </svg>
//               </div>

//               <input
//                 ref={sliderRef}
//                 type="range"
//                 min="0"
//                 max="100"
//                 defaultValue="50"
//                 className="slider absolute inset-0 opacity-0 cursor-pointer z-20"
//                 aria-label="Adjust comparison slider"
//               />

//               <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
//                 Before
//               </div>
//               <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
//                 After
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
