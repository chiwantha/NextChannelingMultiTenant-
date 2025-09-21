"use client";
import React, { useState, useMemo } from "react";

const DataCardGrid = ({ children, itemsPerPage = 12 }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // 🔎 Filter children by checking text/props
  const filteredChildren = useMemo(() => {
    return React.Children.toArray(children).filter((child) => {
      // Turn props into string for searching
      const text = JSON.stringify(child.props).toLowerCase();
      return text.includes(search.toLowerCase());
    });
  }, [search, children]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredChildren.length / itemsPerPage) || 1;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedChildren = filteredChildren.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // ⏪ ⏩ Pagination handlers
  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="space-y-4">
      {/* Search box */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-lg"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset page on new search
        }}
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedChildren}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataCardGrid;
