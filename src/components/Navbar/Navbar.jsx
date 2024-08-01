import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from 'react-icons/im';


import logo from '../../assets/Images/logo.jpeg';
import "./Navbar.css";

const Navbar = ({ handleFeatureClick, handleourTeamClick }) => {
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features");
      const teamSection = document.getElementById("Ourteam");

      if (featuresSection && isElementInViewport(featuresSection)) {
        handleFeatureClick();
      }

      if (teamSection && isElementInViewport(teamSection)) {
        handleourTeamClick();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleFeatureClick, handleourTeamClick]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Check if current location is not the home page
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div className="container">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#Ourteam">Team</a>
          </li>
          <Link to="/Login" className="nav-buttons">Log in</Link>
          <Link to="/Signup" className="nav-buttons">Sign Up</Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
