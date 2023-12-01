import Avatar from "./components/Avatar";
import Button from "./components/Button";
import DatePicker from "./components/DatePicker";
import Fieldset from "./components/Fieldset";
import Tab from "./components/Tab";
import ComposeTweet from "./pages/compose-tweet/ComposeTweet";
import Login from "./pages/login/Login";
import Account1 from "./pages/login/Account1";
import Account2 from "./pages/login/Account2";
import Account3 from "./pages/login/Account3";
import Account4 from "./pages/login/Account4";
import HomeFeed from "./pages/home-feed/Home";
import UserProfile from "./pages/user-profile/UserProfile";
import EditProfile from "./pages/user-profile/EditProfile";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import { UserProvider } from "./contexts/user/UserProvider";
import { TweetProvider } from "./contexts/tweet/TweetProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/ComposeTweet",
    element: <ComposeTweet />,
  },
  {
    path: "/Account1",
    element: <Account1 />,
  },
  {
    path: "/Account2",
    element: <Account2 />,
  },
  {
    path: "/Account3",
    element: <Account3 />,
  },
  {
    path: "/Account4",
    element: <Account4 />,
  },
  {
    path: "/HomeFeed",
    element: <HomeFeed />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  {
    path: "/EditProfile",
    element: <EditProfile />,
  },
]);
function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <TweetProvider>
          <RouterProvider router={router} />
        </TweetProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
