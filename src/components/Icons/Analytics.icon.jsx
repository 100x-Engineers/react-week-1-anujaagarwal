import React from "react";
import Analytics from "../../assets/Frame 27042.png";

export default function ReachIcon({ count, ...rest }) {
  return (
    <>
      <button className="flex items-start gap-1.3" {...rest}>
        <img src={Analytics} alt="analytics" />
        <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">
          {count}
        </span>
      </button>
    </>
  );
}
