import React from "react";
import "../styles/FrontPageStyles.css";
import Nav from "./SettingsNav";
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";
import { FaGlobe, FaRegEnvelope } from 'react-icons/fa';

const Settings = () => {
    return (
        <div className="settings">
            <Nav/>
            <div className="settings-container">

            <div className="left-sidebar">
                    <div className="left-sidebar-content">
                        <button className="back-button">Back</button>
                        <button className="save-button">Save</button>
                    </div>
                </div>

                <motion.div 
                    variants={titleAnim} 
                    initial="hidden"
                    animate="show"
                    className="frontpage-text"
                >
                    <div className="frontpage-title">

                        <h3>FI/EN</h3>
                        <h2><FaRegEnvelope style={{color: 'green'}}/></h2>
                        <h3 style={{color: 'green'}}>change your email</h3>
                        <h2><FaGlobe style={{color: 'blue'}}/></h2>
                        <h3 style={{color: 'blue'}}>change your password</h3>
                        <motion.h3 variants={titleAnim}>
                           Change your password
                        </motion.h3>
                    </div>
                    <motion.div 
                        variants={titleAnim}
                        className="ctas"
                    >
                    </motion.div>
                </motion.div>
                
            </div>
        </div>
    );
}
 
export default Settings;
