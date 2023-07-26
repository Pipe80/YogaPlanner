import React from "react";
import "../styles/FrontPageStyles.css";
import Nav from "./SettingsNav";
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

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
                        <h2> 
                          <FontAwesomeIcon 
                            icon={faEnvelope} 
                            color="green" 
                            fontSize="30px"
                          />
                        </h2>
                        <h3 style={{color: 'green'}}>change your email</h3>
                        <h2> 
                          <FontAwesomeIcon 
                            icon={faGlobe} 
                            color="blue" 
                            fontSize="30px"
                          />
                        </h2>
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
