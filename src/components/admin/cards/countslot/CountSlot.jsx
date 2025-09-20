import React from "react";

const CountSlot = ({ value, title }) => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-2xl tracking-tighter font-semibold text-gray-600">
        {value || "0"}
      </span>
      <span className="text-gray-500 text-sm">{title || `Title`}</span>
    </div>
  );
};

export default CountSlot;
