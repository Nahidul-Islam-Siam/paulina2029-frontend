'use client';

import React, { useState, useMemo } from 'react';
import ReviewCard from '../cards/ReviewCards/ReviewCard';
import { useGetAllFeedbacksQuery } from '@/redux/api/feedbacksApi';

// Define the Testimonial type
type FeedbackItem = {
  rating?: number;
  title?: string;
  message?: string;
  name?: string;
  createdAt?: string;
  avatar?: string;
};

export interface Testimonial {
  rating: number;
  quote: string;
  text: string;
  author: string;
  date: string;
  avatar: string;
}

// Static fallback testimonials
const realTestimonials = [
  {
    rating: 5,
    quote: "Professional, courteous, and attentive",
    text: "We were extremely pleased with the plastering work Jimenez Plastering did for us! They got our job ready and on the schedule quickly. Our project manager kept us informed throughout the entire process.",
    author: "David London NW3",
    date: "September 12, 2022",
    avatar: "/assets/a1.png",
  },
  // Add more static testimonials as needed
];

const itemsPerPage = 8;

export default function Testimonials2() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useGetAllFeedbacksQuery(undefined);

  // Random avatar fallback options
  const randomAvatars = [
    "/assets/a1.png",
    "/assets/a2.png",
    "/assets/a3.png",
    "/assets/a4.jpg",
    "/assets/a5.jpg",
     "/assets/a6.jpg",
     "/assets/a7.jpg",
  ];

  // Map API data to testimonial shape or use fallback
  const testimonials = useMemo(() => {
    if (data?.data && data.data.length > 0) {
      return data.data.map((item: FeedbackItem, index: number) => ({
        rating: item.rating ?? 5,
        quote: item.title ?? "",
        text: item.message ?? "",
        author: item.name ?? "Anonymous",
        date: item.createdAt
          ? new Date(item.createdAt).toLocaleDateString()
          : "Unknown date",
        avatar: item.avatar ?? randomAvatars[index % randomAvatars.length], // Select random avatar
      }));
    }
    return realTestimonials;
  }, [data]);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const paginatedTestimonials = testimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  if (isLoading) {
    return <p className="text-center py-10">Loading testimonials...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-600">Failed to load testimonials.</p>;
  }

  if (testimonials.length === 0) {
    return <p className="text-center py-10">No testimonials found.</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20 bg-opacity-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
        {paginatedTestimonials.map((testimonial: Testimonial, index: number) => (
          <div key={index} className="h-full">
            <ReviewCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
