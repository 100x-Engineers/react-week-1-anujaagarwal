import React from "react";

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Days = Array.from({ length: 31 }, (_, index) => index + 1);
const currentYear = new Date().getFullYear();
const startYear = 1980;
const Years = Array.from(
  {
    length: currentYear - startYear + 1,
  },
  (_, index) => startYear + index
);

export default function DatePicker({ handleInputChange }) {
  return (
    <div className="flex">
      <fieldset className="flex w-44 h-14 py-4 px-3 items-center gap-2.5 rounded-esm mt-8 mx-3 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000 focus-within:border-twitter-blue">
        <legend className="text-neutral-500">Month</legend>
        <select
          onChange={(e) => {
            handleInputChange("month", e.target.value);
          }}
          className="bg-neutral-1000 focus:outline-none w-19"
        >
          {Months.map((month, i) => (
            <option key={i} className="bg-neutral-1000">
              {month}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className="flex w-20 h-14 py-4 px-3 items-center gap-2.5 rounded-esm mt-8 mx-3 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000 focus-within:border-twitter-blue">
        <legend className="text-neutral-500">Day</legend>

        <select
          onChange={(e) => {
            handleInputChange("day", e.target.value);
          }}
          className="bg-neutral-1000 outline-none w-8"
        >
          {Days.map((day, i) => (
            <option key={i} className="bg-neutral-1000">
              {day}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className="flex w-20 h-14 py-4 px-3 items-center gap-2.5 rounded-esm mt-8 mx-3 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000 focus-within:border-twitter-blue">
        <legend className="text-neutral-500">Year</legend>

        <select
          onChange={(e) => {
            handleInputChange("year", e.target.value);
          }}
          className="bg-neutral-1000 outline-none w-20"
          defaultValue={currentYear}
        >
          {Years.map((year, i) => (
            <option key={i} value={year}>
              {year}
            </option>
          ))}
        </select>
      </fieldset>
    </div>
  );
}
