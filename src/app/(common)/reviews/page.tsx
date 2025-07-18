import ReviewForm from '@/components/ReviewForm/ReviewForm'
import HeroSection from '@/components/SmallHero/SmallHero'
import Testimonials2 from '@/components/Testimonial/Testimonials2'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
      title="Reviews"
      description="Founded in 1998 by Gonzalo Jimenez with generations of plasterers before him. Jimenez Plastering is a family run corporation serving Northern Arizona since 1998.Specializing in large scale residential and commercial projects in lath and plastering. Jimenez Plastering has been the trusted and preferred stucco contractor in Northern Arizona. 
"
      bgClass="review" 
    />
<div className='bg-[#F8FCFA'>
<Testimonials2 />
</div>

<ReviewForm />
    </div>
  )
}
