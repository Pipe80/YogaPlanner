import React from "react";
import "../styles/FrontPageStyles.css";

// Components 
import Nav from "./Nav";

// Animations
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";

const FrontPage = () => {
    return (
        <div className="frontpage">
            <Nav/>
            <div className="frontpage-container">
                <motion.div 
                    variants={titleAnim} 
                    initial="hidden"
                    animate="show"
                    className="frontpage-text"
                >
                    <div className="frontpage-title">
                        <h1>Discover Harmony in Every Sequence</h1>
                        <motion.h3 variants={titleAnim}>
                            Empower Your Practice with our Yoga Sequence Planner
                        </motion.h3>
                    </div>
                    <motion.div 
                        variants={titleAnim}
                        className="ctas"
                    >
                        <button className="cta-main" onClick={() => {window.location.href='#Contact';}}>Start planning</button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default FrontPage;
