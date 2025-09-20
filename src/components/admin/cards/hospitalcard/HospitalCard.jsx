import React from "react";
import CountSlot from "../countslot/CountSlot";
import Button from "@/components/shared/buttons/button/Button";

const HospitalCard = ({ props }) => {
  const { name, id, hostname, values } = props || [];
  return (
    <div
      className="rounded-lg shadow-md bg-white border border-blue-500/20
     p-4 flex flex-col gap-4 hover:shadow-md duration-300
      transition hover:border-blue-500/50"
    >
      <div className="flex flex-col  items-start">
        <h2 className="text-xl font-semibold text-[#0560D9]">
          {name || "Hospital Name"}
        </h2>
        <span className="text-slate-400">{hostname || `www.example.lk`}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="border-r">
          <CountSlot title={`Doctors`} value={values.doctors} />
        </div>
        <div className="md:border-r">
          <CountSlot title={`Sessions`} value={values.sessions} />
        </div>
        <div className="border-r">
          <CountSlot title={`Out-Sessions`} value={values.outsessions} />
        </div>
        <div className="">
          <CountSlot title={`Sale`} value={values.sale} />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      <div className="flex gap-4 items-center">
        <Button
          link={`/admin/assignments/${id || 10}`}
          title="View"
          bg={`bg-[#4DB847] hover:bg-[#00A63E] text-white`}
          pd={`px-4 py-1`}
        />
      </div>
    </div>
  );
};

export default HospitalCard;
