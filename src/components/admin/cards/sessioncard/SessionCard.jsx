"use client";
import { useState } from "react";
import SessionActions from "./actions/SessionActions";
import SessionEditForm from "../../form/sessions/edit/SessionEditForm";

const SessionCard = ({ session_data, hospital_id, doctor_id }) => {
  const [isOpen, setisOpen] = useState(false);

  const { id, day, start_time, end_time, type, fee, state } =
    session_data || "";

  return (
    <div className="space-y-4">
      <div
        className="relative w-full 
      rounded-lg shadow-md border bg-slate-50/50 border-gray-300
       hover:border-[#0460D9]/50 transition-colors duration-300 p-4
       space-y-4 md:space-y-0"
      >
        {/* Left Indicator */}
        <span
          className={`bg-[#4CB847] hover:bg-[#00A63E] text-[#FFFFFF] absolute left-0 top-1/2 -translate-y-1/2 w-2 h-8 rounded-r `}
          aria-hidden="true"
        />

        {/* Session Data */}
        <div className="grid grid-cols-2 md:grid-cols-4">
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

          {/* Session Actions */}
          <SessionActions
            session_info={session_data}
            query={{
              hospital_id,
              doctor_id,
            }}
            setIsOpen={setisOpen}
            IsOpen={isOpen}
          />
        </div>
      </div>

      {isOpen && <SessionEditForm session_id={id} setIsOpen={setisOpen} />}
    </div>
  );
};

export default SessionCard;
