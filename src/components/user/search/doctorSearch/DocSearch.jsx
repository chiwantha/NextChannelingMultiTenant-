"use client";
import { useState, useRef } from "react";
import Button from "@/components/shared/buttons/button/Button";
import { Combobox } from "@/components/ui/combobox";
import { Specialization } from "@/constant";
import Link from "next/link";

const DocSearch = ({ doctorList, specializationList }) => {
  const comboRefdoc = useRef();
  const comboRefspec = useRef();
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const buildQueryString = () => {
    let query = "";
    if (selectedDoctor) query += `doc=${encodeURIComponent(selectedDoctor)}`;
    if (selectedSpecialization) {
      if (query) query += "&";
      query += `spec=${encodeURIComponent(selectedSpecialization)}`;
    }
    return query;
  };

  const handleClear = () => {
    setSelectedDoctor("");
    setSelectedSpecialization("");
    comboRefdoc.current.reset();
    comboRefspec.current.reset();
  };

  const isSearchEnabled = selectedDoctor || selectedSpecialization;
  const queryString = buildQueryString();
  const searchHref = queryString ? `/doctors?${queryString}` : "/doctors";

  return (
    <div className="rounded-lg py-4 px-2 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#0460D9]">
      {/* Doctor Name */}
      <div className="space-y-2">
        <div className="text-sm text-slate-100">Doctor name</div>
        <Combobox
          ref={comboRefdoc}
          items={
            doctorList || [
              { value: "0", label: "Hi" },
              { value: "1", label: "Hello" },
            ]
          }
          value={selectedDoctor}
          onChange={setSelectedDoctor}
        />
      </div>

      {/* Specialization Combobox */}
      <div className="space-y-2">
        <div className="text-sm text-slate-100">Specialization</div>
        <Combobox
          ref={comboRefspec}
          items={specializationList || Specialization}
          value={selectedSpecialization}
          onChange={setSelectedSpecialization}
        />
      </div>

      {/* Search and Clear Buttons */}
      <div className="flex gap-4 items-end md:col-span-1 sm:col-span-2">
        {/* Search Button with Link prefetch */}
        <Link
          href={searchHref}
          prefetch={true}
          className={`w-full ${
            !isSearchEnabled
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
        >
          <Button
            title={"Search"}
            bg={`bg-[#4CB847] hover:bg-[#00A63E] text-[#FFFFFF] text-center font-normal py-2 w-full`}
            disabled={!isSearchEnabled}
          />
        </Link>

        {/* Clear Button with Link prefetch */}
        <Link href="/doctors" prefetch={true} className="w-full">
          <Button
            title={"Clear Filters"}
            bg={"bg-red-400 text-center text-white font-normal py-2 w-full"}
            click={handleClear}
          />
        </Link>
      </div>
    </div>
  );
};

export default DocSearch;
