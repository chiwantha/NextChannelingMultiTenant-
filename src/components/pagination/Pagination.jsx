"use client";
import Link from "next/link";

const Pagination = ({ prop, searchParams }) => {
  const { page, pages } = prop;

  if (pages <= 1) return null;

  // helper: build href with preserved query params
  const createHref = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage); // replace or add page
    return `?${params.toString()}`;
  };

  // sliding window
  let start = Math.max(1, page - 1);
  let end = start + 2;

  if (end > pages) {
    end = pages;
    start = Math.max(1, end - 2);
  }

  const pageNumbers = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Prev */}
      <Link
        href={createHref(page - 1)}
        className={`px-3 py-1 rounded-md border ${
          page === 1
            ? "pointer-events-none bg-gray-200 text-gray-500"
            : "hover:bg-gray-100"
        }`}
      >
        Prev
      </Link>

      {/* Page Numbers */}
      {pageNumbers.map((num) => (
        <Link
          key={num}
          href={createHref(num)}
          className={`px-3 py-1 rounded-md border ${
            page === num
              ? "bg-blue-500 text-white border-blue-500"
              : "hover:bg-gray-100"
          }`}
        >
          {num}
        </Link>
      ))}

      {/* Next */}
      <Link
        href={createHref(page + 1)}
        className={`px-3 py-1 rounded-md border ${
          page === pages
            ? "pointer-events-none bg-gray-200 text-gray-500"
            : "hover:bg-gray-100"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
