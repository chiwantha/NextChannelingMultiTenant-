"use client";
import Button from "@/components/shared/buttons/button/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Day mapping
const dayMap = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

// Session type options
const sessionTypes = [
  { id: 1, value: "Morning" },
  { id: 2, value: "AfterNoon" },
  { id: 3, value: "Evening" },
  { id: 4, value: "Night" },
];

const SessionEditForm = ({ session_id, setIsOpen }) => {
  const [formData, setFormData] = useState({
    session_id,
    day: "",
    session_type: "",
    start_time: "",
    stop_time: "",
    fee: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDayChange = (e) => {
    const selectedDay = e.target.value;
    setFormData((prev) => ({
      ...prev,
      day: selectedDay,
      day_value: dayMap[selectedDay] || "",
    }));
  };

  const handleSessionTypeChange = (e) => {
    const selectedTypeId = parseInt(e.target.value);
    const selectedType = sessionTypes.find(
      (type) => type.id === selectedTypeId
    );
    setFormData((prev) => ({
      ...prev,
      session_type: selectedType ? selectedType.value : "",
      session_type_id: selectedTypeId,
    }));
  };

  const handleClear = () => {
    setFormData({
      session_id,
      day: "",
      session_type: "",
      start_time: "",
      stop_time: "",
      fee: "",
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="p-4 mt-4 rounded-lg border shadow-md border-[#0560D9]/50"
      >
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Strip */}
          <div className="w-full flex justify-between mb-4 items-center">
            <div>
              <span className="text-2xl font-black uppercase text-gray-500">
                Session /{" "}
                <span className={`text-[#0460D9]`}>
                  {formData.day || "Unknown"}
                </span>
              </span>
            </div>
            <Button
              title={"X"}
              bg={"bg-red-500 text-white py-1 hover:bg-red-600"}
              click={() => {
                setIsOpen(false);
              }}
            />
          </div>

          {/* Form Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Day Select */}
            <div className="flex flex-col space-y-1">
              <label className="pl-1 font-semibold text-sm text-gray-800">
                Day <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="day"
                value={formData.day}
                onChange={handleDayChange}
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
              >
                <option value="">Select a day</option>
                {Object.keys(dayMap).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            {/* Session Type Select */}
            <div className="flex flex-col space-y-1">
              <label className="pl-1 font-semibold text-sm text-gray-800">
                Session Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="session_type"
                value={formData.session_type_id || ""}
                onChange={handleSessionTypeChange}
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
              >
                <option value="">Select session type</option>
                {sessionTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.value}
                  </option>
                ))}
              </select>
            </div>

            {/* Time inputs */}
            <div className="flex flex-col space-y-1">
              <label className="pl-1 font-semibold text-sm text-gray-800">
                Start Time (24h) <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="time"
                name="start_time"
                value={formData.start_time}
                onChange={handleInputChange}
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="pl-1 font-semibold text-sm text-gray-800">
                Stop Time (24h) <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="time"
                name="stop_time"
                value={formData.stop_time}
                onChange={handleInputChange}
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
              />
            </div>

            {/* Fee input */}
            <div className="flex flex-col space-y-1 sm:col-span-2">
              <label className="pl-1 font-semibold text-sm text-gray-800">
                Fee <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="number"
                name="fee"
                value={formData.fee}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
                placeholder="eg :- 1500.00"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <Button
              title={"Update Session"}
              bg={`py-2 bg-[#0460D9] hover:bg-[#0B4A9C] text-[#FFFFFF]`}
            />
            <Button
              title={"Clear"}
              bg={"py-2 bg-red-700 text-white hover:bg-red-600"}
              click={handleClear}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SessionEditForm;
