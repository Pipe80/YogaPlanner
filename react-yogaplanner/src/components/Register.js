import React from "react";
import "../styles/RegisterStyles.css";
// import Nav from "./Nav";
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";
import Logo from "../assets/Logo.png";

const Register = () => {
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
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" className="input-field" />
            <label htmlFor="name">Name</label>
            <input type="text" id="email" placeholder="Name" className="input-field" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" className="input-field" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password again" className="input-field" />
            <button className="login-button">Sign up</button>
          </div>
         
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
