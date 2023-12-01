import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowLeft from "../../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Cover from "../../assets/image 18.png";
import X from "../../assets/x.svg";
import Camera from "../../assets/material-symbols_add-a-photo-outline.svg";
import UserAvatar from "../../assets/User avatar.png";
import { UserContext } from "../../contexts/user/UserProvider";
import Fieldset from "../../components/Fieldset";

export default function EditProfile() {
  const { formData, setFormData } = useContext(UserContext);
  const [localFormData, setLocalFormData] = useState({ ...formData });
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setLocalFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSave = () => {
    setFormData(localFormData);
    navigate("/UserProfile");
  };

  return (
    <div className=" bg-neutral-1000 w-90 m-auto">
      <div className="flex py-3 justify-between items-center self-stretch">
        <Link to="/UserProfile">
          <img src={ArrowLeft} />
        </Link>
        <p className="text-base font-bold text-neutral-50 mr-40">
          Edit profile
        </p>
        {/* <button
          className="font-bold bg-neutral-50 text-neutral-1000 backdrop-blur-xl rounded-3.2xl py-2 px-5 inline-flex  text-center w-22 h-8 text-sm hover:bg-neutral-200 disabled:bg-neutral-200 disabled:opacity-50"
          onclick="window.location.href='https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/user-profile'"
        >
          Save
        </button> */}
        <Button
          variant="default"
          size="sm"
          type="black"
          children="Save"
          onClick={handleSave}
        />
      </div>
      <img src={Cover} className="w-90" />
      <div className="flex justify-center gap-3 -mt-24">
        <img src={Camera} />
        <img src={X} />
      </div>
      <img src={UserAvatar} className="w-20 h-20 ml-2.5" />
      <img src={Camera} className="ml-10 -mt-14 w-6 h-6" />
      {/* <fieldset className="flex w-88 h-14 py-4 px-3 items-center gap-2.5 rounded-esm ml-4 mt-8 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000">
        <legend className="text-neutral-500">Name</legend>
        <input
          type="text"
          defaultValue="anuja agarwal"
          className="bg-neutral-1000 outline-none text-neutral-50"
        />
      </fieldset> */}
      <Fieldset
        text="Name"
        type="text"
        inputValue={localFormData.name}
        onInputChange={(value) => handleInputChange("name", value)}
      />
      {/* <fieldset className="h-24 flex w-88 py-4 px-3 items-center gap-2.5 rounded-esm ml-8 mr-8 mt-5 border border-solid border-neutral-500 text-neutral-500 bg-neutral-1000">
        <legend className="text-neutral-500">Bio</legend>
        <textarea
          className="bg-neutral-1000 outline-none text-neutral-50 w-full"
          row={10}
          cols={80}
          onChange={(value) => handleInputChange("bio", value)}
          value={formData.bio}
        />
      </fieldset> */}
      <Fieldset
        text="Bio"
        inputValue={localFormData.bio}
        onInputChange={(value) => handleInputChange("bio", value)}
        type="text"
      />
      <Fieldset
        text="Location"
        type="text"
        inputValue={localFormData.location}
        onInputChange={(value) => handleInputChange("location", value)}
      />
      <Fieldset
        text="Website"
        type="text"
        inputValue={localFormData.website}
        onInputChange={(value) => handleInputChange("website", value)}
      />
    </div>
  );
}
