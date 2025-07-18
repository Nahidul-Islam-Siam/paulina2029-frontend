"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReviewCard from "../cards/ReviewCards/ReviewCard";
import { useGetAllFeedbacksQuery } from "@/redux/api/feedbacksApi";
import { useMemo } from "react";
import { Spin } from "antd";

// Replace with your avatar images stored under /public/assets/avatars/
const randomAvatars = [
  "/assets/a1.png",
  "/assets/a2.png",
  "/assets/a3.png",
  "/assets/a4.jpg",
  "/assets/a5.jpg",
];

// Define the Testimonial type to match the shape expected by ReviewCard
interface Testimonial {
  rating: number;
  quote: string;
  text: string;
  author: string;
  date: string;
  avatar: string;
  createdAt?: Date;
}

type FeedbackItem = {
  rating?: number;
  title?: string;
  message?: string;
  name?: string;
  createdAt?: string;
  avatar?: string;
};

export default function TestimonialSection() {
  const { data, isLoading, error } = useGetAllFeedbacksQuery(undefined);

  // Map API data to the shape expected by ReviewCard, limit to max 8
  const testimonials = useMemo(() => {
    if (!data?.data || data.data.length === 0) return [];

    return data.data.slice(0, 8).map((item: FeedbackItem, index: number) => ({
      rating: item.rating || 5,
      quote: item.title || "",
      text: item.message || "",
      author: item.name || "Anonymous",
      date: item.createdAt
        ? new Date(item.createdAt).toLocaleDateString()
        : "",
      avatar:
        item.avatar ||
        randomAvatars[index % randomAvatars.length] ||
        "/assets/a1.png",
    }));
  }, [data]);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p>There was an error fetching testimonials. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#E6F4EC4D] ">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 bg-opacity-30">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-emerald-600"></div>
              <p className="text-[#231F20] text-lg sm:text-xl font-semibold">
                Testimonials
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-900 max-w-2xl leading-tight sm:leading-snug md:leading-[120%]">
                We&apos;re the Plastering Experts in Northern Arizona You Can Trust
              </h2>
              <p className="text-[#496187] mt-4 sm:mt-5 max-w-3xl text-xl md:text-base font-poppins text-justify">
                Jimenez Plastering, with over 30 years of experience, delivers reliable, high-quality plastering services for residential and commercial projects across Arizona.
              </p>
            </div>
            <Button>
              <Link href={"/reviews"}>See All Reviews</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
          {testimonials.length === 0 ? (
            <p className="text-center py-10">No testimonials found.</p>
          ) : (
            testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={index} className="h-full">
                <ReviewCard testimonial={testimonial} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
