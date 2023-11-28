import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [userTweets, setUserTweets] = useState(MockTweets);

  return (
    <TweetContext.Provider value={{ userTweets, setUserTweets }}>
      {children}
    </TweetContext.Provider>
  );
};

TweetProvider.propTypes = {
  children: PropTypes.node,
};

const MockTweets = [
  {
    id: "1",
    name: "Anuja Agarwal",
    username: "anujaagarwal",
    postedAt: 1699355379971,
    tweetText: "Hiring for frontend dev",
    comments: 11,
    retweets: 269,
    likes: 1869,
    reach: 99,
    isLiked: false,
    isRetweeted: false,
  },
  {
    id: "2",
    name: "Anuja Agarwal",
    username: "anujaagarwal",
    postedAt: 1699363303000,
    tweetText: "100x Engineer",
    comments: 11,
    retweets: 299,
    likes: 189,
    reach: 99,
    isLiked: false,
    isRetweeted: false,
  },
];
