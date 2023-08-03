import React from "react";
import "../styles/RegisterStyles.css";
// import Nav from "./Nav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { titleAnim } from "../styles/Animations";
import Logo from "../assets/Logo.png";

const ForgotPassword = () => {
  return (
    <div className="register-page">
      {/* <Nav /> */}
      <div className="registerpage-container">
        {/* <div className="login-page-bg"></div> */}
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
          <div className="register-form">
           <p>Forgot your password?</p>
        <input type="email" id="email" placeholder="Email" className="input-field" />
        <Link to="/signup"> <button className="login-btn">Send</button>
            </Link>  
          </div>
         
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;
