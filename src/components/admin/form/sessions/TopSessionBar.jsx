"use client";

import Button from "@/components/shared/buttons/button/Button";
import { useState } from "react";
import SessionAdminForm from "./edit-new/SessionAdminForm";

const TopSessionBar = ({ profile, query }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, specialization } = profile || "";
  return (
    <div>
      <div
        className=" pb-2 w-full flex justify-between
          items-center border-b"
      >
        <div className=" space-y-1  flex flex-col">
          <h3
            className="uppercase leading-5 text-lg sm:text-lg 
          font-semibold text-gray-700 "
            itemProp="name"
          >
            {name}
          </h3>
          <p
            className="uppercase text-xs sm:text-sm text-gray-500 tracking-wide"
            itemProp="medicalSpecialty"
          >
            {specialization}
          </p>
        </div>

        <Button
          title="New Session"
          pd={`px-4 py-2`}
          bg={`hover:bg-[#00A63E] bg-[#4CB847] text-[#FFFFFF]`}
          click={() => {
            setIsOpen(true);
          }}
          disabled={isOpen}
        />
      </div>

      {isOpen && (
        <SessionAdminForm
          query={query}
          action={`Create`}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default TopSessionBar;
