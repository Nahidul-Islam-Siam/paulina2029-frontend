import BeforeAfterSection from "@/components/AfterBeforeSection.tsx/AfterBeforeSection";
import EifcSction from "@/components/BlogLayout/EifcSction";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import HeroSection from "@/components/SmallHero/SmallHero";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection
        title="EFIC"
        description="Exterior insulation and finish system is a general class of non-load bearing building cladding systems that provides exterior walls with an insulated, water-resistant, finished surface in an integrated composite material system."
        bgClass="about"
      />
      <EifcSction />
      <BeforeAfterSection />
      {/* <ImageComparison /> */}

      <ReviewForm />
    </div>
  );
}
