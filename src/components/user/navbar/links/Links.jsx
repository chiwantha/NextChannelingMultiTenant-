"use client";
import Button from "@/components/shared/buttons/button/Button";
import Link from "next/link";

import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    title: "My Appointments",
    path: "/appointments",
    description: "View and manage your medical appointments",
  },
  {
    title: "Visit Main Website",
    path: "https://www.kchord.com/",
    description: "Visit our main corporate website",
    external: true,
  },
];

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="relative flex items-center">
      {/* Desktop Links */}
      <div className="sm:flex hidden items-center gap-5">
        {navlinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`text-[#0460D9] hover:text-[#044ba8]  ${
              path == link.path ? `font-bold` : `font-normal`
            }`}
            aria-label={link.description}
            title={link.description}
            {...(link.external
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
          >
            {link.title}
          </Link>
        ))}
        <div className="sm:flex gap-2 items-center hidden">
          <Button
            title="Sign In"
            link="/signin"
            aria-label="Sign in to your account"
          />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="text-[#0460D9] sm:hidden text-2xl font-bold"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <IoClose /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 sm:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile Menu Content */}
      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 h-screen flex items-center justify-center flex-col
      w-3/4 border-l border-slate-400/50 transition-transform duration-300 ease-in-out sm:hidden
      space-y-4
      ${
        isOpen ? `translate-x-0` : `translate-x-full`
      } bg-gradient-to-br from-white to-blue-50`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <button
          className="text-pink-400 absolute top-3 right-3 text-3xl self-end focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <IoClose />
        </button>
        {navlinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`text-[#0460D9] hover:text-[#044ba8]  ${
              path == link.path ? `font-bold` : `font-medium`
            }`}
            aria-label={link.description}
            title={link.description}
            onClick={() => setIsOpen(false)}
            {...(link.external
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
          >
            {link.title}
          </Link>
        ))}
        <Button
          title="Sign In"
          link="/signin"
          aria-label="Sign in to your account"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default Links;
