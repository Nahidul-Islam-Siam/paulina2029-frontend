"use client";
import { Pagination, PaginationProps } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface MyPaginationProps {
  currentPage: number; // The current page number
  totalBlogs: number; // The total number of blogs (for pagination calculation)
  defaultPageSize: number; // The number of items per page (pagination size)
}

const MyPagination: React.FC<MyPaginationProps> = ({
  currentPage,
  totalBlogs,

  defaultPageSize,
}) => {
  const router = useRouter();
  const onChange: PaginationProps["onChange"] = (page) => {
    router.push(`/blog?page=${page}`, undefined);
  };
  return (
    <div className="flex justify-center">
      <Pagination
        current={currentPage}
        onChange={onChange}
        total={totalBlogs}
        defaultPageSize={defaultPageSize} // Set the page size to match your limit
      />
    </div>
  );
};

export default MyPagination;
