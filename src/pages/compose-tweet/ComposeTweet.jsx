import React from "react";
import x from "../../assets/x.svg";
import Button from "../../components/Button";
import TweetInput from "../../components/TweetInput";

export default function ComposeTweet() {
  return (
    <div className="bg-neutral-1000 text-neutral-50 w-90 m-auto">
      <div>
        <header className="flex justify-between py-3 px-4">
          <a href="https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/home-feed">
            <img src={x} />
          </a>
          <Button
            variant="primary"
            type="secondary"
            size="sm"
            children="Post"
          />
        </header>
        <main>
          <TweetInput />
        </main>
        <footer className="py-3 px-4 border-t border-solid border-neutral-800 mt-107">
          <p className="text-neutral-500 font-normal text-sm">
            <span>0</span>/280
          </p>
        </footer>
      </div>
    </div>
  );
}
