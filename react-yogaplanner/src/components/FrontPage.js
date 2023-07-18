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
                        <h1>Lorem ipsum</h1>
                        <motion.h3 variants={titleAnim}>
                            Lorem ipsum dolor sit amet, consectetur adip
                        </motion.h3>
                    </div>
                    <motion.div 
                        variants={titleAnim}
                        className="ctas"
                    >
                        <button className="cta-main" onClick={() => {window.location.href='#Contact';}}>Contact</button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default FrontPage;
