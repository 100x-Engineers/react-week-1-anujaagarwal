import React from "react";
import { useContext } from "react";
import Cover from "../assets/image 17.png";
import ProfileAvatar from "../assets/User avatar.png";
import { UserContext } from "../contexts/user/UserProvider";
import LinkIcon from "../assets/Link Icon.svg";
import { Link } from "react-router-dom";
import Calender from "../assets/Calendar Icon.svg";
import Button from "../components/Button";

export default function ProfileHeader() {
  const { formData } = useContext(UserContext);
  return (
    <div>
      <header>
        <img src={Cover} />
      </header>
      <div className="inline-flex justify-center items-center gap-40 ml-5">
        <img src={ProfileAvatar} className="w-16 h-16 -mt-10" />
        <div className="rounded-full w-22">
          <Link to="/EditProfile">
            <Button
              variant="outline"
              type="secondary"
              size="md"
              children="Edit Profile"
            />
          </Link>
        </div>
      </div>
      <h1 className="text-neutral-50 text-xl font-bold ml-5">
        {formData.name}
      </h1>
      <p className="text-sm font-normal text-neutral-500 ml-5">
        {formData.username}
      </p>
      <p className="text-base font-normal text-neutral-50 ml-5 mt-4">
        {formData.bio}
      </p>
      <div className="gap-5 flex ml-5 mt-4">
        <div className="flex">
          <img src={LinkIcon} />
          <a
            rel="noreferrer"
            target="_blank"
            href={formData.website}
            className="text-twitter-blue"
          >
            resume
          </a>
        </div>
        <div className="flex">
          <img src={Calender} />
          <p className="text-neutral-500 text-base font-normal">
            Joined August 2018
          </p>
        </div>
      </div>
      <div className="gap-5 flex ml-5 mt-4">
        <div className="flex gap-1">
          <p className="text-neutral-50">217</p>
          <a className="text-neutral-500">Following</a>
        </div>
        <div className="flex gap-1">
          <p className="text-neutral-50">118</p>
          <a className="text-neutral-500">Followers</a>
        </div>
      </div>
    </div>
  );
}
