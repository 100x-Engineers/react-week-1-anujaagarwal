import React from "react";
import add from "../../assets/Add.svg";
export default function AddIcon({ onClick }) {
  return (
    <>
      <div className="flex justify-end self-stretch">
        <button className=" bg-twitter-blue inline-flex fixed  bottom-18 p-4 mr-4.3 rounded-full items-end z-10">
          <img className="w-6 h-6" src={add} alt="add icon" onClick={onClick} />
        </button>
      </div>
    </>
  );
}
