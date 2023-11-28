import React from "react";

export default function EditProfile() {
  return (
    <div>
      <div className="flex py-3 justify-between items-center self-stretch">
        <a href="https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/user-profile">
          <img src="../../../public/images/arrow-left.svg" />
        </a>
        <p className="text-base font-bold text-neutral-50 mr-40">
          Edit profile
        </p>
        <button
          className="font-bold bg-neutral-50 text-neutral-1000 backdrop-blur-xl rounded-3.2xl py-2 px-5 inline-flex  text-center w-22 h-8 text-sm hover:bg-neutral-200 disabled:bg-neutral-200 disabled:opacity-50"
          onclick="window.location.href='https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/user-profile'"
        >
          Save
        </button>
      </div>
      <img src="../../../public/images/image 18.png" className="w-90" />
      <div className="flex justify-center gap-3 -mt-24">
        <img src="../../../public/images/material-symbols_add-a-photo-outline.svg" />
        <img src="../../../public/images/x.svg" />
      </div>
      <img
        src="../../../public/images/User avatar.png"
        className="w-20 h-20 ml-2.5"
      />
      <img
        src="../../../public/images/material-symbols_add-a-photo-outline.svg"
        className="ml-10 -mt-14 w-6 h-6"
      />
      <fieldset className="flex w-88 h-14 py-4 px-3 items-center gap-2.5 rounded-esm ml-4 mt-8 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000">
        <legend className="text-neutral-500">Name</legend>
        <input
          type="text"
          defaultValue="anuja agarwal"
          className="bg-neutral-1000 outline-none text-neutral-50"
        />
      </fieldset>
      <fieldset className="h-24 flex w-88 py-4 px-3 items-center gap-2.5 rounded-esm ml-4 mt-5 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000">
        <legend className="text-neutral-500">Bio</legend>
        <textarea
          className="bg-neutral-1000 outline-none text-neutral-50 w-full"
          row={10}
          defaultValue={
            "Fullstack Engineer@100x Engineers, loves to read books and in building good habits."
          }
        />
      </fieldset>
      <fieldset className="flex w-88 h-14 py-4 px-3 items-center gap-2.5 rounded-esm ml-4 mt-4 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000">
        <legend className="text-neutral-500">Location</legend>
        <input
          type="text"
          placeholder="Location"
          className="bg-neutral-1000 outline-none text-neutral-700"
        />
      </fieldset>
      <fieldset className="flex w-88 h-14 py-4 px-3 items-center gap-2.5 rounded-esm ml-4 mt-4 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000">
        <legend className="text-neutral-500">Website</legend>
        <input
          type="text"
          placeholder="Website"
          className="bg-neutral-1000 outline-none text-neutral-700"
        />
      </fieldset>
    </div>
  );
}
