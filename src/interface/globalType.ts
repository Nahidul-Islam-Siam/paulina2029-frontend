/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from "next/image";

export type TBlog = {
  _id: string;
  imageSrc: string | StaticImageData;
  author: string;
  date: string;
  title: string;
  description: string;
  readMoreLink: string;
};

export interface TService {
  image: string | StaticImageData;
  title: string;
  description: string;
}

export interface TBlogPost {
  _id: string; // Unique identifier for the blog post (MongoDB ObjectId)
  banner: string; // URL to the banner image
  category: string; // The category of the blog post (e.g., Technology)
  content: string; // The actual content or body of the blog post
  createdAt: string; // The date when the post was created, in ISO 8601 format
  title: string; // The title of the blog post
  updatedAt: string; // The date when the post was last updated, in ISO 8601 format

  __v: number; // Version key, typically used in MongoDB
  authorId: {
    _id: string; // Author's unique ID
    email: string; // Author's email
    username: string | undefined; // Author's username
    role: string; // Author's role (e.g., admin)
    profileImage: string; // URL to the author's profile image
    createdAt: string; // The date when the author was created, in ISO 8601 format
    updatedAt: string; // The date when the author was last updated, in ISO 8601 format
  } | null; // The author can be null or an object containing author details
}

export type id = {
  _id: string;
};
export type CardProps = {
  title: string;
  description: string;
  background: string;
  height: string;
  titleColor: string;
  textColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  icon?: React.ReactNode;
};

export type TestimonialProps = {
  name: string;
  email: string;
  comment: string;
  status: string;
  rating: number;
  message: string;
  createdAt: string; // ISO date string
  testimonial: string; // The testimonial text
};

export type Email = {
  email: string;
  time?: Date;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  author: string;
  date: string; // You may want to consider using Date type if you plan to work with date operations
  readTime: string;
  image: StaticImageData | string; // Assuming `blogs1` is an image file or URL as a string
  category: string;
  keyPoints: string[];
};
