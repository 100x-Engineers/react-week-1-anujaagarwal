import React from "react";
import Avatar from "./Avatar";
import CommentIcon from "./Icons/Comment.icon";
import RetweetIcon from "./Icons/Retweet.icon";
import ShareIcon from "./Icons/Share.icon";
import AnalyticsIcon from "./Icons/Analytics.icon";
import LikesIcon from "./Icons/Likes.icon";

export default function Post({
  Meta: { comments, reposts, likes, views },
  Post: {
    id,
    text,
    postedAt,
    postedBy: { userid, userName, userFullName, userImage },
  },
}) {
  return (
    <div className="text-neutral-50 bg-neutral-1000">
      <div className="flex w-107 h-56 mt-8 ml-8 py-2 px-4 items-start gap-4 border-b border-solid border-neutral-700">
        {/* <img src="../images/User avatar1.png" />
        <div>
          <div className="flex gap-0.5 items-center">
            <h2 className="text-base font-medium text-neutral-50">
              Anuja Agarwal
            </h2>
            <p className="text-neutral-500">@anujaagarwal 10h</p>
          </div> */}
        <Avatar
          imgUrl={userImage}
          userHandle={userName}
          userName={userFullName}
          size="m"
        />
        <div>
          <p className="text-neutral-50 text-base font-normal leading-normal">
            {text.text}
          </p>
        </div>
        <div className="flex py-3 justify-between items-center self-stretch mt-8">
          <CommentIcon count={comments} />
          <RetweetIcon count={reposts} />
          <LikesIcon />
          <AnalyticsIcon count={views} />

          <ShareIcon />
        </div>
      </div>
    </div>
  );
}
