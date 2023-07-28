import React from "react";
import Nav from "./SettingsNav";
import { motion } from "framer-motion";
import { titleAnim } from "../styles/Animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';

import "../styles/SettingStyle.css";

const Settings = () => {
    return (
        <div className="settings">
            <Nav/>
            <div className="settings-container">
       {/*          <div className="left-sidebar">
                    <div className="left-sidebar-content">
                        <button className="back-button">Back</button>
                        <button className="save-button">Save</button>
                    </div>
                </div> */}

                <motion.div 
                    variants={titleAnim} 
                    initial="hidden"
                    animate="show"
                    className="frontpage-text"
                >
                    <div className="frontpage-title">
                        <div className="icon-text-pair">                       
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    color="#692D51"
                                    font-size="20px"
                                />
                            <h6 style={{color: '#692D51'}}>Change your email</h6>
                        </div>
                        <div className="icon-text-pair">
                            <FontAwesomeIcon
                                    icon={faLock}
                                    color="#692D51"
                                    font-size="20px"
                                />
                   
                            <h6 style={{color: '#692D51'}}>Notifications</h6>
                        </div>
                
                        <div className="icon-text-pair">
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    color="#692D51"
                                    font-size="20px"
                                />
                            <h6 style={{color: '#692D51'}}>
                            Terms of use & Privacy notices</h6>
                        </div>
                        <div className="icon-text-pair">
                                <FontAwesomeIcon 
                                    icon={faLock} 
                                    color="#692D51"
                                    font-size="20px"
                                />                          
                            <h6 style={{color: '#692D51'}}>Change your password</h6>
                        </div>
                        <div className="icon-text-pair">
                                <FontAwesomeIcon 
                                    icon={faGlobe} 
                                    color="#692D51" 
                                    font-size="20px"
                                />

                            <h6 style={{color: '#692D51'}}>FI/EN</h6>
                        </div>
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
