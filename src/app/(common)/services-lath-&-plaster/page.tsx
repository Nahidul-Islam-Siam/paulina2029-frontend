import BeforeAfterSection from "@/components/AfterBeforeSection.tsx/AfterBeforeSection";
import LathPlaster from "@/components/BlogLayout/LathPlaster";

import ReviewForm from "@/components/ReviewForm/ReviewForm";
// import ImageComparison from '@/components/AfterBeforeSection.tsx/ImageCompartion'
import HeroSection from "@/components/SmallHero/SmallHero";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Lath & Plaster"
        description="Jimenez Plastering Inc. provides expert lath and plaster services across Wisconsin and Northern Illinois. Whether you're restoring, remodeling, or building new, trust our team for durable, beautiful results."
        bgClass="about"
      />
      <LathPlaster />
      <BeforeAfterSection />
      {/* <ImageComparison /> */}

      <ReviewForm />
    </div>
  );
}
