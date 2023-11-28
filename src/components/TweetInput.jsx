import React from "react";
import Useravatar from "../assets/User avatar.png";
import PropTypes from "prop-types";

TweetInput.propTypes = {
  tweet: PropTypes.string.isRequired,
  setTweet: PropTypes.func.isRequired,
};

export default function TweetInput({ tweet, setTweet }) {
  return (
    <div className="flex ml-4 gap-3">
      <img src={Useravatar} className="w-9 h-9" />
      <textarea
        cols={28}
        rows={10}
        placeholder="What's happening?"
        className="bg-neutral-1000 focus:outline-none text-neutral-50"
        value={tweet}
        onChange={(e) => {
          setTweet(e.target.value);
        }}
      />
    </div>
  );
}
