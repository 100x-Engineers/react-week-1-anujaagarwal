import React from "react";
import { TweetContext } from "../../contexts/tweet/TweetProvider";

export default function Home() {
  const tweet = useContext(TweetContext);
  return (
    <div>
      <div>
        <header className="flex gap-32">
          <img
            src="../../../public/images/User avatar.png"
            className="w-9 h-9 my-3 ml-4"
          />
          <img
            src="../../../public/images/100x.svg"
            className="w-14 h-5 my-3 mr-4"
          />
        </header>
        <div className="flex w-90 h-14 pt-5 pr-20 pl-20 justify-center items-center gap-40 border-y border-solid border-neutral-700 bg-neutral-1000">
          <div>
            <p className="text-base font-medium text-neutral-400">Foryou</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-base font-medium text-neutral-400">Following</p>
            <div className="w-14 h-1 rounded-3.2xl bg-twitter-blue" />
          </div>
        </div>
        <main>
          <div className="flex w-90 py-2 px-4 items-start gap-4 border-b border-solid border-neutral-700">
            <img src="../../../public/images/User avatar3.png" />
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="text-base font-medium text-neutral-50">
                  Saurav Agarwal
                </h2>
                <p className="text-neutral-500">@sauravagarwal 10h</p>
              </div>
              <div>
                <p className="text-neutral-50 text-base font-normal leading-normal">
                  Don't wish for it, work for it.
                </p>
              </div>
              <div className="flex py-3 justify-between items-center self-stretch mt-8">
                <div className="flex">
                  <img src="../../../public/images/comment.svg" />
                  <p className="text-neutral-500">11</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Group 26840.png" />
                  <p className="text-neutral-500">278</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/heart.svg" />
                  <p className="text-neutral-500">1,869</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Frame 27042.png" />
                  <p className="text-neutral-500">99.5K</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Vector.svg" />
                  <p className="text-neutral-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-90 py-2 px-4 items-start gap-4 border-b border-solid border-neutral-700">
            <img src="../../../public/images/User avatar 2.png" />
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="text-base font-medium text-neutral-50">
                  Kanishka Burnwal
                </h2>
                <p className="text-neutral-500">@kanishka2042 10h</p>
              </div>
              <div>
                <p className="text-neutral-50 text-base font-normal leading-normal">
                  i've seen people absolutely despise auto layout in figma but i
                  think it's a lifesaver- 1. tidies everything nice and compact
                  2. makes responsive design effortless 3. no manual adjustments
                  post any tweaks 4. saves a tonnn of time sorry, but will stay
                  an auto layout maxi all life.
                </p>
              </div>
              <div className="flex py-3 justify-between items-center self-stretch mt-8">
                <div className="flex">
                  <img src="../../../public/images/comment.svg" />
                  <p className="text-neutral-500">11</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Group 26840.png" />
                  <p className="text-neutral-500">278</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/heart.svg" />
                  <p className="text-neutral-500">1,869</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Frame 27042.png" />
                  <p className="text-neutral-500">99.5K</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Vector.svg" />
                  <p className="text-neutral-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-90 py-2 px-4 items-start gap-4 border-b border-solid border-neutral-700">
            <img src="../../../public/images/User avatar1.png" />
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="text-base font-medium text-neutral-50">
                  Anuja Agarwal
                </h2>
                <p className="text-neutral-500">@anujaagarwal 10h</p>
              </div>
              <div>
                <p className="text-neutral-50 text-base font-normal leading-normal">
                  Writing gets easier after the first sentence. Lifting gets
                  easier after the first set. People think and think and think
                  until they finally decide to act. Their attention shifts from
                  internal to external, and the difficulty they created in their
                  mind vanishes.
                </p>
              </div>
              <div className="flex py-3 justify-between items-center self-stretch mt-8">
                <div className="flex">
                  <img src="../../../public/images/comment.svg" />
                  <p className="text-neutral-500">11</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Group 26840.png" />
                  <p className="text-neutral-500">278</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/heart.svg" />
                  <p className="text-neutral-500">1,869</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Frame 27042.png" />
                  <p className="text-neutral-500">99.5K</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Vector.svg" />
                  <p className="text-neutral-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-90 py-2 px-4 items-start gap-4 border-b border-solid border-neutral-700">
            <img src="../../../public/images/User avatar1.png" />
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="text-base font-medium text-neutral-50">
                  Anuja Agarwal
                </h2>
                <p className="text-neutral-500">@anujaagarwal 10h</p>
              </div>
              <div>
                <p className="text-neutral-50 text-base font-normal leading-normal">
                  Habits makes a person.
                </p>
              </div>
              <div className="flex py-3 justify-between items-center self-stretch mt-8">
                <div className="flex">
                  <img src="../../../public/images/comment.svg" />
                  <p className="text-neutral-500">11</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Group 26840.png" />
                  <p className="text-neutral-500">278</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/heart.svg" />
                  <p className="text-neutral-500">1,869</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Frame 27042.png" />
                  <p className="text-neutral-500">99.5K</p>
                </div>
                <div className="flex">
                  <img src="../../../public/images/Vector.svg" />
                  <p className="text-neutral-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-start -mt-10 ml-84">
            <a href="https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/compose-tweet">
              <img
                src="../../../public/images/Add.svg"
                className="bg-twitter-blue p-4 rounded-3.2xl"
              />
            </a>
          </div>
          <a href="https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/compose-tweet"></a>
        </main>
        <a href="https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/compose-tweet">
          <footer className="flex justify-center items-center gap-10 px-6 py-4 border-t border-solid border-neutral-800">
            <img src="../../../public/images/Home selected.svg" />
            <img src="../../../public/images/Group1.svg" />
          </footer>
        </a>
      </div>
      <a href="https://100x-engineers.github.io/layouts-assignment-anujaagarwal/src/layouts/compose-tweet"></a>
    </div>
  );
}