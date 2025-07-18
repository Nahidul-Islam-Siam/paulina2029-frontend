import BeforeAfterSection from "@/components/AfterBeforeSection.tsx/AfterBeforeSection";
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import HeroSection from "@/components/SmallHero/SmallHero";

import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection
        title="Portfolios"
        description="At Jimenez Plastering Inc., we deliver high-quality plastering and exterior services. From historic restorations to new builds, our work showcases durability, beauty, and precision."
        bgClass="about"
      />
      <PortfolioCard/>
      <BeforeAfterSection />
      <ReviewForm />
    </div>
  );
}
