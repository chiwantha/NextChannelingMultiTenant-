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
      <div className="px-2 pt-2 pb-4 rounded-lg shadow-md space-y-2 bg-[#0460D9]">
        <label htmlFor="id" className="text-sm text-slate-100">
          <span>Search</span>
        </label>
        <input
          id="search"
          type="search"
          placeholder="name / specialization / sessions / id"
          className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset page on new search
          }}
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredChildren.length > 0 ? (
          paginatedChildren
        ) : (
          <div className="w-full flex justify-center items-baseline  col-span-1 sm:col-span-2 md:col-span-3 text-center text-gray-400">
            No Doctors Found !
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredChildren.length > 0 && (
        <div className="flex justify-center md:justify-start items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`px-4 py-1 border rounded-lg ${
              page === 1
                ? `bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800`
                : `bg-[#0560D9] text-white border-[#0560D9] hover:bg-[#0452b9] hover:text-white`
            }`}
          >
            Prev
          </button>
          <span className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`px-4 py-1 border rounded-lg ${
              page === totalPages
                ? `bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800`
                : `bg-[#0560D9] text-white border-[#0560D9] hover:bg-[#0452b9] hover:text-white`
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DataCardGrid;
