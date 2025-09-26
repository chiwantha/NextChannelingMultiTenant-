"use client";
import { MdEdit } from "react-icons/md";
import { HiBoltSlash, HiBolt } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import Button from "@/components/shared/buttons/button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SessionActions = ({ session_info, query, setIsOpen, IsOpen }) => {
  const router = useRouter();
  const [pending, setPending] = useState({
    edit: false,
    activate: false,
    deactivate: false,
    delete: false,
  });

  const { id, day, start_time, end_time, type, fee, state } =
    session_info || "";

  const { hospital_id, doctor_id } = query || "";

  const handleState = async (action, state) => {
    setPending((prev) => ({ ...prev, [action]: true }));
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/assignments/${hospital_id}/${doctor_id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: id,
            state: state,
            action: action,
          }),
        }
      );

      if (!res.ok) {
        return false;
      }

      clearPending();
      router.refresh();
      return res.json();
    } catch (err) {
      console.error("Update State Failed !");
      clearPending();
      return false;
    }
  };

  const clearPending = () => {
    setPending({
      edit: false,
      activate: false,
      deactivate: false,
      delete: false,
    });
  };

  return (
    <div
      className="flex 
          items-center justify-center col-span-2 mt-2 gap-2 sm:mt-0 sm:col-span-1"
    >
      {state ? (
        <div className="flex gap-2">
          <Button
            title={<MdEdit />}
            bg={`bg-[#0460D9] hover:bg-[#0B4A9C] text-white px-2 py-1
                 rounded-lg  text-xl
                 ${pending.edit && `animate-pulse cursor-not-allowed`}`}
            pd={`px-2 py-2`}
            disabled={IsOpen}
            click={() => {
              setIsOpen(true);
            }}
          />
          <Button
            title={<HiBoltSlash />}
            bg={`bg-orange-500 text-white px-2 py-1 hover:bg-orange-600
                 rounded-lg  text-xl
                 ${pending.deactivate && `animate-pulse cursor-not-allowed`}`}
            pd={`px-2 py-2`}
            click={() => {
              handleState(`deactivate`, 0);
            }}
            disabled={pending.deactivate}
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            title={<HiBolt />}
            bg={`bg-green-500 text-white px-2 py-1 hover:bg-green-600
                rounded-lg  text-xl 
                ${pending.activate && `animate-pulse cursor-not-allowed`}`}
            pd={`px-2 py-2`}
            click={() => {
              handleState(`activate`, 1);
            }}
            disabled={pending.activate}
          />
          <Button
            title={<MdDelete />}
            bg={`bg-red-500 text-white px-2 py-1 hover:bg-red-600
                rounded-lg  text-xl
                ${pending.delete && `animate-pulse cursor-not-allowed`}`}
            pd={`px-2 py-2`}
            click={() => {
              handleState(`delete`, 0);
            }}
            disabled={pending.delete}
          />
        </div>
      )}
    </div>
  );
};

export default SessionActions;
