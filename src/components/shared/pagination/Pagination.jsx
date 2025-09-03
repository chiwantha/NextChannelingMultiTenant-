"use client";
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const Pagination = ({ prop, searchParams }) => {
  const { page, pages } = prop;

  if (pages <= 1) return null;

  // helper: build href with preserved query params
  const createHref = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
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

  // Check if we need ellipsis at the beginning
  const showStartEllipsis = start > 2;
  // Check if we need ellipsis at the end
  const showEndEllipsis = end < pages - 1;

  return (
    <ShadcnPagination className="mt-4">
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          {page === 1 ? (
            <span className="px-3 py-1 rounded-md border bg-gray-200 text-gray-500 cursor-not-allowed">
              Previous
            </span>
          ) : (
            <PaginationPrevious href={createHref(page - 1)} />
          )}
        </PaginationItem>

        {/* First Page (if needed with ellipsis) */}
        {showStartEllipsis && (
          <>
            <PaginationItem>
              <PaginationLink href={createHref(1)}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {/* Page Numbers */}
        {pageNumbers.map((num) => (
          <PaginationItem key={num}>
            <PaginationLink href={createHref(num)} isActive={page === num}>
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last Page (if needed with ellipsis) */}
        {showEndEllipsis && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={createHref(pages)}>{pages}</PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next Button */}
        <PaginationItem>
          {page === pages ? (
            <span className="px-3 py-1 rounded-md border bg-gray-200 text-gray-500 cursor-not-allowed">
              Next
            </span>
          ) : (
            <PaginationNext href={createHref(page + 1)} />
          )}
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};

export default Pagination;
