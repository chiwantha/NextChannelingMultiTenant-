"use client";
import Button from "@/components/buttons/button/Button";
import ChannelForm from "@/components/form/ChannelForm";
import { motion } from "framer-motion";
import { useState } from "react";

const SessionBar = ({ session_data }) => {
  const { id, day, start_time, end_time, type, fee } = session_data;
  const [isOpen, setIsOpen] = useState(false);

  // Create structured data for the session
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Medical Session on ${day}`,
    description: `${type} medical session available for booking`,
    openingHours: `${day} ${start_time.slice(0, 8)}`,
    medicalSpecialty: type,
    priceRange: `LKR ${fee}`,
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
      {/* Add structured data to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div
        className="relative w-full grid grid-cols-2 md:grid-cols-4
      rounded-lg shadow-md border bg-slate-50 border-gray-300
       hover:border-[#0460D9]/50 transition-colors duration-300 p-4
       space-y-4 md:space-y-0"
        role="region"
        aria-label={`Session details for ${day} at ${
          start_time ? start_time.slice(0, 8) : "00:00 - 00:00"
        }`}
      >
        {/* Left Indicator */}
        <span
          className={`bg-[#4CB847] hover:bg-[#00A63E] text-[#FFFFFF] absolute left-0 top-1/2 -translate-y-1/2 w-2 h-8 rounded-r `}
          aria-hidden="true"
        />

        {/* Day */}
        <div className="flex flex-col items-center justify-center border-gray-300 sm:border-r col-span-2 sm:col-span-1">
          <span
            className="text-lg font-extrabold text-gray-600"
            itemProp="openingHours"
          >
            {day ? day : "Day"}
          </span>
        </div>

        {/* Time */}
        <div className="flex flex-col items-center justify-center border-gray-300 border-r sm:border-0 md:border-r">
          <span className="text-sm font-medium text-gray-700">Time</span>
          <span
            className={`text-lg font-extrabold text-[#0460D9]`}
            itemProp="openingHours"
          >
            {start_time ? start_time.slice(0, 8) : "00:00 - 00:00"}
          </span>
          <span
            className="text-sm font-semibold text-gray-600"
            itemProp="medicalSpecialty"
          >
            {type ? type : "Session Type"}
          </span>
        </div>

        {/* Price */}
        <div className="flex flex-col items-center justify-center border-gray-300 sm:border-r">
          <span className="text-sm font-medium text-gray-700">Fee</span>
          <span
            className="text-lg font-bold text-gray-600"
            itemProp="priceRange"
          >
            {fee ? `LKR ${fee}` : "Rs 00.00"}
          </span>
        </div>

        {/* Book Now */}
        <div
          className="flex
         flex-col items-center justify-center col-span-2 mt-2 sm:mt-0 sm:col-span-1"
        >
          {isOpen ? (
            <Button
              title="Booking..."
              bg="bg-red-600 text-white px-2 py-1 hover:bg-red-700 rounded-lg
               cursor-not-allowed"
              aria-label="Booking in progress"
            />
          ) : (
            <Button
              title="Book Now"
              bg={`bg-[#4CB847] hover:bg-[#00A63E] text-[#FFFFFF] px-2 py-1 rounded-lg`}
              click={() => {
                setIsOpen(!isOpen);
              }}
              aria-label={`Book appointment for ${day} at ${
                start_time ? start_time.slice(0, 8) : "00:00 - 00:00"
              }`}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <ChannelForm session_id={id} day={day} setStatus={setIsOpen} />
      )}
    </motion.article>
  );
};

export default SessionBar;
