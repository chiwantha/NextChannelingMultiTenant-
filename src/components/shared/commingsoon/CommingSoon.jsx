"use client";
import Button from "@/components/shared/buttons/button/Button";
import { usePathname } from "next/navigation";

const CommingSoon = () => {
  const path = usePathname();
  return (
    <div className="flex-col flex gap-4">
      <div className="text-2xl font-bold italic animate-pulse">
        <div className="text-[#0560D9]">{path}</div>
        Comming Soon !
      </div>
      <Button link={"/"} title="Back To Home" pd={`px-4 py-2 w-fit`} />
    </div>
  );
};

export default CommingSoon;
