import React, { useState, useEffect } from "react";
import "../styles/NavStyles.css";

// Animations
import { motion } from "framer-motion";
import { navAnim } from "../styles/Animations";

// For logo import
import Logo from "../assets/Logo.png";

// Social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [active, setActive] = useState("nav-links");
  const [toggleIcon, setToggleIcon] = useState("burger-menu");

  useEffect(() => {
    setActive("nav-links"); // Start with nav-links closed
    setToggleIcon("burger-menu"); // Start with burger-menu icon
  }, []);

  const navToggle = () => {
    if (active === "nav-links") {
      setActive("nav-links"); // Close the mobile menu first

      // Delay applying "nav-active" class to mobile menu
      setTimeout(() => {
        setActive("nav-links nav-active");
      }, 500); // Adjust the delay time as needed
    } else {
      setActive("nav-links"); // Close the mobile menu
    }

    // Toggle Animation with Delay
    if (toggleIcon === "burger-menu") {
      setToggleIcon("burger-menu toggle");
    } else {
      setTimeout(() => {
        setToggleIcon("burger-menu");
      }, 500); // Adjust the delay time as needed
    }
  };

  return (
    <motion.nav variants={navAnim} initial="hidden" animate="show" className="navbar">
      <div className="logo">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <ul onClick={navToggle} className={active}>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <div className="socmedia">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} color="#000" fontSize="30px" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} color="#000" fontSize="30px" />
            </a>
          </li>
        </div>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </motion.nav>
  );
};

export default Nav;
