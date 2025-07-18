"use client";

import { useGetAllFeedbacksQuery } from "@/redux/api/feedbacksApi";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  rating: number;
  quote: string;
  text: string;
  avatar?: string;
  author: string;
  date: string;
}

const ReviewCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { data } = useGetAllFeedbacksQuery(undefined);

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-2 sm:gap-3 h-auto">
      
      {/* Stars */}
      <div className="flex">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-semibold text-sm sm:text-base md:text-lg text-justify md:text-left line-clamp-2">
        {`"${testimonial.quote}"`}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-xs sm:text-sm font-normal text-justify md:text-left line-clamp-3">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-2 sm:gap-3 pt-1 mt-auto">
        <div className="rounded-full overflow-hidden w-8 h-8 sm:w-10 sm:h-10 border border-gray-100">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.author}
            width={40}
            height={40}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <p className="font-medium text-xs sm:text-sm md:text-base">{testimonial.author}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
