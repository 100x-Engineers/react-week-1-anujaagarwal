import { Link } from "react-router-dom";
import HomeActive from "../assets/Home selected.svg";
import HomeInactive from "../assets/Home.svg";
import ProfileActive from "../assets/group1 fill.svg";
import ProfileInactive from "../assets/Group1.svg";
import PropTypes from "prop-types"; // ES6

Footer.propTypes = {
  page: PropTypes.oneOf(["home", "profile"]).isRequired,
};

function Footer({ page }) {
  return (
    <footer className="fixed bottom-0 flex w-90 m-auto items-center justify-center gap-10 border-t border-neutral-800 bg-neutral-1000 px-6 py-1.1rem">
      <Link to="/HomeFeed">
        <img
          alt="home-button"
          src={page === "home" ? HomeActive : HomeInactive}
        />
      </Link>
      <Link to="/UserProfile">
        <img
          alt="profile-button"
          src={page === "profile" ? ProfileActive : ProfileInactive}
        />
      </Link>
    </footer>
  );
}

export default Footer;
