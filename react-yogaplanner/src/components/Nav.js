import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "../styles/NavStyles.css";

// Animations
import { motion } from "framer-motion";
import { navAnim } from "../styles/Animations";

// For logo import
import Logo from "../assets/Logo_test.png";

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
    <motion.nav 
      variants={navAnim} 
      initial="hidden" 
      animate="show" 
      className="navbar"
    >
      <div className="logo">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <ul onClick={navToggle} className={active}>
        <li>
          <a href="#Features">Features</a>
        </li>
        <li>
          <a href="#Faq">FAQ</a>
        </li>
        <div className="buttons">
          <li>
            <Link to="/signup">
                <button className="sign-button" >Sign Up</button>
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <button className="login-button">Log In</button>
            </Link>
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
