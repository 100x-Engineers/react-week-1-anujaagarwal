import Post from "../../components/Post";

// import Toast from "../../components/Toast";
import AddIcon from "../../components/Icons/Add.icon";

// import NewTweet from "../../components/NewTweetButton";
import PageHeader from "../../components/PageHeader";
import Tab from "../../components/Tab";
import PageAvatar from "../../components/PageAvatar";
import Footer from "../../components/Footer";
import { TweetContext } from "../../contexts/tweet/TweetProvider";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const tweets = useContext(TweetContext);
  const tweetsData = [...tweets.userTweets].reverse();
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-1000 w-90 m-auto">
      <header className="top-0 flex w-full flex-col items-center bg-neutral-1000">
        <section className="flex w-full items-center border-b border-neutral-700 px-4 pt-3">
          <PageAvatar />
          <PageHeader />
        </section>
      </header>
      <Tab />
      <main className="flex w-full flex-col pb-64">
        <section>
          {tweetsData.map((tweet, index) => (
            <Post key={index} {...tweet} />
          ))}
        </section>

        {/* <Toast message="Copied to clipboard." /> */}

        <AddIcon
          onClick={() => {
            navigate("/ComposeTweet");
          }}
        />
        <Footer page="home" />
      </main>
    </div>
  );
}

export default Home;
