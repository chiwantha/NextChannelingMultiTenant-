"use client";
import { useRef, useState } from "react";
import Button from "@/components/shared/buttons/button/Button";
import { Combobox } from "@/components/ui/combobox";
import { Specialization } from "@/constant";
import { useRouter } from "next/navigation";

const DocSearch = ({ doctorList, specializationList }) => {
  const router = useRouter();
  const comboRefdoc = useRef();
  const comboRefspec = useRef();
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const handleSearch = () => {
    if (!selectedDoctor && !selectedSpecialization) return;

    let query = "";
    if (selectedDoctor) query += `doc=${encodeURIComponent(selectedDoctor)}`;
    if (selectedSpecialization) {
      if (query) query += "&";
      query += `spec=${encodeURIComponent(selectedSpecialization)}`;
    }

    // alert(`Query: ${query}`);
    // Here you can push it to router or fetch results using the query
    router.push(`/doctors?${query}`);
  };

  const handleClear = () => {
    setSelectedDoctor("");
    setSelectedSpecialization("");
    comboRefdoc.current.reset();
    comboRefspec.current.reset();
    router.push("/doctors");
  };

  const isSearchEnabled = selectedDoctor || selectedSpecialization;

  return (
    <div
      className={`
       rounded-lg py-4 px-2 shadow-md grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#0460D9]`}
    >
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
        <Button
          title={"Search"}
          bg={`bg-[#4CB847] hover:bg-[#00A63E] text-[#FFFFFF]
             text-center font-normal py-2 w-full ${
               !isSearchEnabled ? "opacity-50 cursor-not-allowed" : ""
             }`}
          click={handleSearch}
          disabled={!isSearchEnabled}
        />
        <Button
          title={"Clear Filters"}
          bg={"bg-red-400 text-center text-white font-normal py-2 w-full"}
          click={handleClear}
        />
      </div>
    </div>
  );
};

export default DocSearch;
