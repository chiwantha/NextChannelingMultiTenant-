"use client";
import React from "react";
import CountSlot from "../countslot/CountSlot";
import Button from "@/components/shared/buttons/button/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

async function updateAssignmentState(hospital_id, doctor_id, state) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/assignments/${hospital_id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctor_id, state }),
      }
    );

    if (!res.ok) {
      console.error("Update Failed!");
      toast.error("Update Failed!");
      return false;
    }

    toast.success("Updated!");
    return true;
  } catch (err) {
    console.error("Update Failed! :", err);
    toast.error("Update Failed With Error!");
    return false;
  }
}

const DocAssignCard = ({ props }) => {
  const router = useRouter();

  const { id, name, specialization, sessions, slug, hospital_id, state } =
    props || {};

  const handleUpdate = async (newState) => {
    const ok = await updateAssignmentState(hospital_id, id, newState);
    if (ok) router.refresh();
  };

  return (
    <div
      className="rounded-lg shadow-md hover:bg-slate-50 border border-blue-500/20
     p-4 flex flex-col gap-2 hover:shadow-md duration-300
      transition hover:border-blue-500/50"
    >
      <div className="flex flex-col">
        <div className="truncate font-normal text-lg">{name || `name`}</div>
        <span className="text-xs text-gray-400">{specialization}</span>
      </div>
      <hr className="w-full mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="border-r ">
          <CountSlot title={"Id"} value={id} />
        </div>
        <div>
          <CountSlot title={"Sessions"} value={sessions} />
        </div>
      </div>
      <hr className="w-full mb-2" />
      <div className="flex gap-2">
        <Button
          bg="bg-[#4DB847] hover:bg-[#00A63E] text-white"
          title="Sessions"
          link={`/admin/assignments/${hospital_id}/${slug}`}
        />
        {state == 1 ? (
          <Button
            title="DeActive"
            bg="bg-red-500 hover:bg-red-600 text-white"
            click={() => handleUpdate(0)}
          />
        ) : (
          <Button title="Activate" click={() => handleUpdate(1)} />
        )}
      </div>
    </div>
  );
};

export default DocAssignCard;
