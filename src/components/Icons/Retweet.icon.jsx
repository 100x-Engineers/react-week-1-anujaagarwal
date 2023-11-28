import React from "react";

export default function RetweetIcon({ count, ...rest }) {
  return (
    <>
      <button className="flex justify-center items-center gap-1.3" {...rest}>
        <svg
          className="w-4.2 h-3.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 15"
          fill="none"
        >
          <path
            d="M2.90298 1.46063L0.746094 3.61754M2.90298 1.46063L5.05988 3.61754M2.90298 1.46063L2.90298 10.6958C2.90298 12.2662 4.17605 13.5393 5.74646 13.5393L10.6678 13.5393"
            stroke="#737373"
            strokeWidth="1.42174"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.433 13.5394L18.5898 11.3825M16.433 13.5394L14.2761 11.3825M16.433 13.5394L16.433 4.30417C16.433 2.73376 15.1599 1.46069 13.5895 1.46069L8.66811 1.46069"
            stroke="#737373"
            strokeWidth="1.42174"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral-500">
          {count}
        </span>
      </button>
    </>
  );
}
