import React from "react";
import x from "../assets/x.svg";

export default function StepHeader(props) {
  const { step } = props;
  return (
    <div className="py-3">
      <header className="flex px-3 mt-3 items-center gap-5 self-stretch">
        <a href="https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/login">
          <img src={x} />
        </a>
        <p className="text-base font-bold">Step {step} of 4</p>
      </header>
    </div>
  );
}
