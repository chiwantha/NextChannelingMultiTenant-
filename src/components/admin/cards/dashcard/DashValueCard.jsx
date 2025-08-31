import Image from "next/image";
import Link from "next/link";

const DashValueCard = ({
  title = "Card",
  value = "0000",
  link,
  icon,
  dashDefault,
}) => {
  return (
    <div className="relative flex flex-col items-start overflow-hidden rounded-lg border border-gray-300 bg-slate-50 px-4 py-6 shadow-md">
      {/* Title */}
      <span className="font-medium text-gray-500">{title}</span>

      {/* Value */}
      <span className="mt-[-5px] text-5xl font-semibold text-gray-600">
        {value ?? "0000"}
      </span>

      {/* Link / Placeholder */}
      {link ? (
        <Link
          href={link ? "" : ""}
          className="mt-0.5 text-xs font-bold text-[#0463DF]/90 hover:text-[#202342]"
        >
          See More
        </Link>
      ) : (
        <span className="mt-0.5 text-xs font-bold text-[#0463DF]/90">----</span>
      )}

      {/* Icon */}
      <div className="absolute right-[-40px] top-0 h-full aspect-square opacity-40 mask-l-from-0.5">
        <Image
          src={icon || dashDefault}
          alt="card-icon"
          fill
          sizes="(max-width: 768px) 50px, (max-width: 1200px) 80px, 100px"
          className="object-contain opacity-40"
        />
      </div>
    </div>
  );
};

export default DashValueCard;
