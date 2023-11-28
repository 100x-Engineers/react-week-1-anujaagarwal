import React from "react";

export default function Tab({ name, onClick }) {
  return (
    <>
      <button
        className="flex flex-col items-center justify-center gap-y-4 group font-Inter text-base not-italic leading-1.2  font-medium text-neutral-50 group-focus:text-neutral-400"
        onClick={onClick}
      >
        {name}
        <div className="bg-twitter-blue w-14 h-0.4 rounded-4xl hidden group-focus:flex" />
      </button>
    </>
  );
}
