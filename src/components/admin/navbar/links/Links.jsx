"use client";
import Button from "@/components/shared/buttons/button/Button";
import { useSidebar } from "@/context/SidebarContext";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NavLinks = () => {
  const [IsSubMenu, setIsSubMenu] = useState(false);
  const { toggleSidebar } = useSidebar();
  return (
    <div className="">
      <span
        className="text-[#0460D9] sm:hidden text-2xl font-bold"
        onClick={() => {
          setIsSubMenu(!IsSubMenu);
          toggleSidebar();
        }}
      >
        {IsSubMenu ? <IoClose /> : <FaBars />}
      </span>
      <div className="sm:flex gap-2 items-center hidden">
        <Button title="Hi Admin" />
      </div>
    </div>
  );
};

export default NavLinks;
