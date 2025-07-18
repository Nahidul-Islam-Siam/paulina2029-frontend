import BeforeAfterSection from "@/components/AfterBeforeSection.tsx/AfterBeforeSection";
import Siding from "@/components/BlogLayout/Siding";

import ReviewForm from "@/components/ReviewForm/ReviewForm";
import HeroSection from "@/components/SmallHero/SmallHero";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Siding"
        description="Jimenez Plastering Inc. provides expert lath and plaster services across Wisconsin and Northern Illinois. Whether you're restoring, remodeling, or building new, trust our team for durable, beautiful results."
        bgClass="about"
      />
      <Siding />
      <BeforeAfterSection />
      {/* <ImageComparison /> */}

      <ReviewForm />
    </div>
  );
}
