"use client";
import Button from "@/components/shared/buttons/button/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

// Day mapping (0–6)
const dayMap = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

// Session types with IDs
const sessionTypes = {
  Morning: 1,
  AfterNoon: 2,
  Evening: 3,
  Night: 4,
};

const SessionEditForm = ({ data, setIsOpen, query }) => {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const { hospital_id, doctor_id } = query || "";
  const { id, day, start_time, end_time, type, fee } = data || {};

  const [formData, setFormData] = useState({
    id: id || "",
    day: day ? dayMap[day] : "", // store numeric day id
    type: type ? sessionTypes[type] : "", // store numeric type id
    start_time: start_time || "",
    end_time: end_time || "",
    fee: fee || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDayChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      day: parseInt(e.target.value),
    }));
  };

  const handleSessionTypeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      type: parseInt(e.target.value), // always store ID
    }));
  };

  const handleClear = () => {
    setFormData({
      id: id || "",
      day: "",
      type: "",
      start_time: "",
      end_time: "",
      fee: "",
    });
  };

  const handleSubmit = async () => {
    setPending(true);
    if (
      formData.id == "" ||
      formData.day == "" ||
      formData.type == "" ||
      formData.start_time == "" ||
      formData.fee == "" ||
      formData.end_time == ""
    ) {
      toast.error(`Critical Data Missing !`);
      return false;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/assignments/${hospital_id}/${doctor_id}/edit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        toast.error(`Update Session Failed !`);
        return false;
      }

      setPending(false);
      toast.success(`Session Updated !`);
      router.refresh();
      return true;
    } catch (err) {
      setPending(false);
      console.error(`Update Session Failed ! , `, err);
      toast.error(`Update Session Failed !`);
      return false;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="p-4 mt-4 rounded-lg border shadow-md border-[#0560D9]/50"
      >
        {/* Top Strip */}
        <div className="w-full flex justify-between mb-4 items-center">
          <span className="text-2xl font-black uppercase text-gray-500">
            Edit Session
          </span>
          <Button
            title={"X"}
            bg={"bg-red-500 text-white py-1 hover:bg-red-600"}
            click={() => setIsOpen(false)}
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
              {Object.entries(dayMap).map(([dayName, dayId]) => (
                <option key={dayId} value={dayId}>
                  {dayName}
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
              name="type"
              value={formData.type}
              onChange={handleSessionTypeChange}
              className="bg-slate-100 rounded-md outline-none w-full px-2 py-2 border border-gray-300"
            >
              <option value="">Select session type</option>
              {Object.entries(sessionTypes).map(([label, id]) => (
                <option key={id} value={id}>
                  {label}
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
              name="end_time"
              value={formData.end_time}
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
            title={pending ? `Wait` : `Update Session`}
            bg={`bg-[#0460D9] hover:bg-[#0B4A9C] text-[#FFFFFF]`}
            pd={`px-4 py-2`}
            disabled={pending}
            click={handleSubmit}
          />
          <Button
            title={"Clear"}
            bg={" bg-red-700 text-white hover:bg-red-600"}
            pd={`px-4 py-2`}
            disabled={pending}
            click={handleClear}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SessionEditForm;
