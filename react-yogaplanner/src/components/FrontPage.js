import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/FrontPageStyles.css";

// Components 
import Nav from "./Nav";

// Animations
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";

const FrontPage = () => {
    return (
        <div className="frontpage">
            <Nav />
            <div className="frontpage-container">
                <motion.div
                    variants={titleAnim}
                    initial="hidden"
                    animate="show"
                    className="frontpage-text"
                >
                    <div className="frontpage-title">
                        <h1>Harmony in Every Move</h1>
                        <motion.h4 variants={titleAnim}>
                            Empower Your Practice with our Yoga Sequence Planner
                        </motion.h4>
                    </div>
                    <motion.div
                        variants={titleAnim}
                        className="ctas"
                    >
                        <Link to="/login">
                            <button>Start planning</button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default FrontPage;
