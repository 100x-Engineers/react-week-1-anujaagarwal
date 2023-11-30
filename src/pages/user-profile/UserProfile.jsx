import ProfileHeader from "../../components/ProfileHeader";
import { TweetContext } from "../../contexts/tweet/TweetProvider";

import { useContext } from "react";
import Post from "../../components/Post";
import Footer from "../../components/Footer";
import AddIcon from "../../components/Icons/Add.icon";

function UserProfile() {
  const tweets = useContext(TweetContext);
  const tweetsData = [...tweets.userTweets].reverse();
  return (
    <div className="bg-neutral-1000 w-90 m-auto">
      <ProfileHeader />
      <main className="mb-16 flex-1 overflow-y-auto">
        <section>
          {tweetsData.map((tweet, index) => (
            <Post key={index} {...tweet} />
          ))}
        </section>
        <AddIcon
          onClick={() => {
            navigate("/ComposeTweet");
          }}
        />
      </main>
      <div className="inline-flex items-start -mt-10 mb-9 mr-5">
        <Footer page="home" />
      </div>
    </div>
  );
}

export default UserProfile;
