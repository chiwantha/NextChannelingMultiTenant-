"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AppointmentSearch = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    // This code runs only on the client side
    const storedQuery = localStorage.getItem("appoimentNumber");
    if (storedQuery) {
      setSearchQuery(JSON.parse(storedQuery));
      router.push(`/appointments?phone=${JSON.parse(storedQuery)}`);
    }
  }, []);

  const validate = (parameter) => {
    // Check if parameter is a string and not empty/null
    if (!parameter || typeof parameter !== "string") {
      toast.warning("Incorrect Mobile No.");
      return false;
    }

    // Regex: starts with 0, followed by exactly 9 digits (total 10 digits)
    const slPhoneRegex = /^0\d{9}$/;

    if (!slPhoneRegex.test(parameter)) {
      toast.warning("Incorrect Mobile No.");
      return false;
    }

    return true; // valid number
  };

  const handleSearch = () => {
    if (!validate(searchQuery)) return;
    router.push(`/appointments?phone=${searchQuery}`);
    // toast.info(searchQuery);
  };

  return (
    <div
      className={`w-full grid grid-cols-4 p-2 py-4 gap-4
          bg-[#0560D9]
        shadow-md rounded-lg`}
    >
      <div className="sm:col-span-3 col-span-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-1 col-span-2">
          <label className="pl-1 font-semibold text-sm text-slate-200">
            Search With Contact No <span className="text-red-500">*</span>
          </label>
          <input
            required
            maxLength={200}
            type="search"
            name="contact"
            value={searchQuery}
            className="bg-white rounded-md outline-none w-full px-2 py-2"
            placeholder="eg :- 0788806670"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-end sm:col-span-1 col-span-4">
        <button
          className={`bg-[#4CB847] hover:bg-[#00A63E] text-white text-center font-normal py-2 w-full rounded-md ${
            isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSearch}
          disabled={isPending}
        >
          {isPending ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default AppointmentSearch;
