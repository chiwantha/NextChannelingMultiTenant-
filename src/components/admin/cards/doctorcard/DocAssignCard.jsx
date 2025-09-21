import React from "react";
import CountSlot from "../countslot/CountSlot";
import Button from "@/components/shared/buttons/button/Button";

const DocAssignCard = ({ props }) => {
  const { id, name, specialization, sessions, slug, hospital_id, state } =
    props || [];
  return (
    <div
      className="rounded-lg shadow-md hover:bg-slate-50 border border-blue-500/20
     p-4 flex flex-col gap-2 hover:shadow-md duration-300
      transition hover:border-blue-500/50"
    >
      <div className="flex flex-col">
        <div className="truncate font-semibold text-xl">{name || `name`}</div>
        <span className="text-xs text-gray-400">{specialization}</span>
      </div>
      <hr className="w-full mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="border-r ">
          <CountSlot title={"Id"} value={id} />
        </div>
        <div className="">
          <CountSlot title={"Sessions"} value={sessions} />
        </div>
      </div>
      <hr className="w-full mb-2" />
      <div className="flex gap-2">
        <Button
          bg={`bg-[#4DB847] hover:bg-[#00A63E] text-white`}
          title="Sessions"
          link={`/admin/assignments/${hospital_id}/${slug}`}
        />
        {state == 1 ? (
          <Button
            title="DeActive"
            bg={`bg-red-500 hover:bg-red-600 text-white`}
          />
        ) : (
          <Button title="Acti" />
        )}
      </div>
    </div>
  );
};

export default DocAssignCard;
