import React from "react";
import "../styles/LoginStyles.css";
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo_test.png";

const SignUn = () => {
  return (
    <div className="login-page">
      <motion.div 
        variants={titleAnim}
        initial="hidden"
        animate="show"
        className="loginpage-container"
      >
          <div className="frontpage-title">
            <div className="logo-and-text">
              <img src={Logo} alt="YogaPlanner-logo" className="logo" />
            </div>
          </div>
            <input type="text" id="name" placeholder="Name" className="input-field" />
            <input type="text" id="email" placeholder="Email" className="input-field" />
            <input type="password" id="password" placeholder="Password" className="input-field" />
            <input type="passwordAgain" id="passwordAgain" placeholder="Password again" className="input-field" />
            <Link to="/"> <button className="login-btn">Sign Up</button>
            </Link>                                       
        </motion.div>
    </div>
  );
};

export default SignUn;
