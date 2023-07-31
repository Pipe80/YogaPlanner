import React from "react";
import { Link } from "react-router-dom";
import "../styles/LoginStyles.css";
/* import Nav from "./Nav"; */
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";
import Logo from "../assets/Logo_test.png";

const Login = () => {
  return (
    <div className="login-page">
      {/* <Nav /> */}
      <motion.div 
        variants={titleAnim}
        initial="hidden"
        animate="show"
        className="loginpage-container"
      >
          <div className="frontpage-title">
              <img src={Logo} alt="YogaPlanner-logo" className="logo-login" />
          </div>
            <input type="text" id="email" placeholder="Email" className="input-field" />
            <input type="password" id="password" placeholder="Password" className="input-field" />
            <Link to="/dashboard">
                <button className="login-btn">Log In</button>
            </Link>
            <p className="forgot-password">Forgot your password?</p>
      </motion.div>
    </div>
  );
};

export default Login;
