import { Link } from "react-router-dom";
import ProfileAvatar from "../assets/User avatar.png";
function PageAvatar() {
  return (
    <Link to="/UserProfile">
      <img
        src={ProfileAvatar}
        alt="Profile Picture"
        className="sticky w-9 rounded-full"
      />
    </Link>
  );
}

export default PageAvatar;
