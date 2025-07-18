"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"

import { StaticImageData } from "next/image"

interface BeforeAfterItemProps {
  beforeImg: string | StaticImageData
  afterImg: string | StaticImageData
  alt: string
}

export default function BeforeAfterItem({ beforeImg, afterImg, alt }: BeforeAfterItemProps) {
  const [sliderValue, setSliderValue] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLInputElement>(null)
  const beforeImageRef = useRef<HTMLDivElement>(null)
  const sliderLineRef = useRef<HTMLDivElement>(null)
  const sliderIconRef = useRef<HTMLDivElement>(null)

  // Handle slider input changes
  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    const valuePercent = `${value}%`

    if (beforeImageRef.current) {
      beforeImageRef.current.style.width = valuePercent
    }
    if (sliderLineRef.current) {
      sliderLineRef.current.style.left = valuePercent
    }
    if (sliderIconRef.current) {
      sliderIconRef.current.style.left = valuePercent
    }
  }

  // Setup event listeners
  useEffect(() => {
    const slider = sliderRef.current
    const container = containerRef.current

    // Handle slider input
    const handleSliderInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      handleSliderChange(Number.parseInt(target.value, 10))
    }

    // Handle touch/mouse events for direct interaction
    let isDragging = false

    const calculateSliderPosition = (clientX: number) => {
      if (!container) return

      const rect = container.getBoundingClientRect()
      const position = ((clientX - rect.left) / rect.width) * 100
      const clampedPosition = Math.min(Math.max(position, 0), 100)

      if (sliderRef.current) {
        sliderRef.current.value = clampedPosition.toString()
      }

      handleSliderChange(clampedPosition)
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      calculateSliderPosition(e.clientX)
      document.body.style.cursor = "grabbing"
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      calculateSliderPosition(e.clientX)
    }

    const handleMouseUp = () => {
      isDragging = false
      document.body.style.cursor = "default"
    }

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true
      calculateSliderPosition(e.touches[0].clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      calculateSliderPosition(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
      isDragging = false
    }

    // Add event listeners
    if (slider) {
      slider.addEventListener("input", handleSliderInput)
    }

    if (container) {
      container.addEventListener("mousedown", handleMouseDown)
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)

      container.addEventListener("touchstart", handleTouchStart)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", handleTouchEnd)
    }

    // Cleanup event listeners
    return () => {
      if (slider) {
        slider.removeEventListener("input", handleSliderInput)
      }

      if (container) {
        container.removeEventListener("mousedown", handleMouseDown)
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)

        container.removeEventListener("touchstart", handleTouchStart)
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative rounded-lg overflow-hidden h-48 cursor-grab active:cursor-grabbing"
      aria-label={`Before and after comparison: ${alt}`}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={sliderValue}
    >
      <div className="relative w-full h-full">
        {/* Before Image (will be clipped) */}
        <div
          ref={beforeImageRef}
          className="absolute top-0 left-0 h-full z-10 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ width: "50%" }}
        >
          <Image
            src={beforeImg || "/placeholder.svg"}
            alt={`Before - ${alt}`}
            width={400}
            height={300}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-stone-800 text-white text-xs px-2 py-1 rounded">Before</div>
        </div>

        {/* After Image (full width, behind the before image) */}
        <Image
          src={afterImg || "/placeholder.svg"}
          alt={`After - ${alt}`}
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-stone-800 text-white text-xs px-2 py-1 rounded">After</div>

        {/* Slider Line */}
        <div
          ref={sliderLineRef}
          className="absolute h-full w-0.5 bg-white left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 ease-in-out"
          aria-hidden="true"
        ></div>

        {/* Slider Handle */}
        <div
          ref={sliderIconRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-full z-30 shadow-md hover:scale-110 transition-all duration-300 ease-in-out"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-stone-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>

        {/* Hidden Range Input for Accessibility */}
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="absolute inset-0 opacity-0 cursor-pointer z-40 w-full h-full"
          aria-label="Adjust comparison slider"
        />
      </div>
    </div>
  )
}
