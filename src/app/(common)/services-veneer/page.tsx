import BeforeAfterSection from "@/components/AfterBeforeSection.tsx/AfterBeforeSection";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import Veneer from "@/components/BlogLayout/veneer";
import HeroSection from "@/components/SmallHero/SmallHero";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Veneer"
        description="Jimenez Plastering Inc. provides expert veneer services across Wisconsin and Northern Illinois. Whether you’re restoring, remodeling, or building new, our team delivers decorative, durable finishes that stand the test of time."
        bgClass="about"
      />
      <Veneer />
      <BeforeAfterSection />
      {/* <ImageComparison /> */}

      <ReviewForm />
    </div>
  );
}
