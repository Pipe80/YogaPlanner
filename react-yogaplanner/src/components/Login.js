import React from "react";
import "../styles/LoginStyles.css";
import Nav from "./Nav"; // Make sure this import is correct
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";
import Logo from "../assets/Logo.png";

const Login = () => {
  return (
    <div className="login-page">
      <Nav />
      <div className="loginpage-container">
        <div className="login-page-bg"></div>
        <motion.div
          variants={titleAnim}
          initial="hidden"
          animate="show"
          className="login-text"
        >
          <div className="frontpage-title">
            <div className="logo-and-text">
              <img src={Logo} alt="YogaPlanner-logo" className="logo" />
              <h1>YogaPlanner</h1>
            </div>
          </div>
          <div className="login-form">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" className="input-field" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" className="input-field" />
            <button className="login-button">Log In</button>
          </div>
          <p className="forgot-password">Forgot your password?</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
