import React, { useState } from "react";
import Tab from "./Tab";

export default function Navbar() {
  const [active, setActive] = useState("");

  const onClick = (e) => {
    setActive(e.currentTarget.textContent);
  };

  return (
    <>
      <nav className="flex justify-center ">
        <div className="flex box-border self-stretch h-14.5 pt-5  pb-0 px-20 justify-center items-center flex-shrink-0 gap-x-40 border-b border-solid border-neutral-700 w-96.5 overflow-x-visible">
          <Tab name="For&nbsp;you" onClick={onClick} />
          <Tab name="Following" onClick={onClick} />
        </div>
      </nav>
    </>
  );
}
