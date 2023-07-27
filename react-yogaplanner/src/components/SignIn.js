import React from "react";
import "../styles/LoginStyles.css";
/* import Nav from "./Nav"; */
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";
import Logo from "../assets/Logo_test.png";

const SignIn = () => {
  return (
    <div className="login-page">
      {/* <Nav /> */}
      <div className="loginpage-container">
        {/* <div className="login-page-bg"></div> */}
        <motion.div
          variants={titleAnim}
          initial="hidden"
          animate="show"
          className="login-text"
        >
          <div className="frontpage-title">
            <div className="logo-and-text">
              <img src={Logo} alt="YogaPlanner-logo" className="logo-login" />
            </div>
          </div>
          <div className="login-form">
            {/* <label htmlFor="email">Email</label> */}
            <input type="text" id="name" placeholder="Name" className="input-field" />
            <input type="text" id="email" placeholder="Email" className="input-field" />
            {/* <label htmlFor="password">Password</label> */}
            
            <input type="password" id="password" placeholder="Password" className="input-field" />
            <input type="passwordAgain" id="passwordAgain" placeholder="Password again" className="input-field" />
            <button className="login-btn">Log In</button>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
