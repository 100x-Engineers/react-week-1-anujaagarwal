import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

export default function Avatar(props) {
  const { imgUrl, username, handle, size = "m" } = props;
  const Size = {
    s: "w-9 h-9",
    m: "w-12 h-12",
    l: "",
  };
  return (
    <div className="flex w-90 py-2 px-4 items-start gap-4 border-b border-solid border-neutral-700 bg-neutral-1000">
      <img
        className={`${Size[size]} rounded-full shrink-0`}
        src={imgUrl}
        alt="User avatar"
      />
      <div>
        <div className="flex gap-2 items-center">
          <h2 className="text-base font-medium text-neutral-50">{username}</h2>
          <p className="text-neutral-500">{handle}</p>
        </div>
      </div>
    </div>
  );
}

// Define PropTypes
Avatar.propTypes = {
  imgUrl: PropTypes.string, // assuming imgUrl is a string URL
  username: PropTypes.string, // assuming username is a string
  handle: PropTypes.string, // assuming handle is a string
  size: PropTypes.string,
};
