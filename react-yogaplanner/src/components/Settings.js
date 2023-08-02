import React from "react";
import AppNav from "./AppNav";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faLock, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import "../styles/SettingStyle.css";

const Settings = () => {
    return (
        <div className="settings">
            <AppNav/>
            <div className="settings-container">
                <div className="settings-wrapper">              
                    <FontAwesomeIcon 
                        icon={faEnvelope} 
                        color="#692D51"
                        width="30px"
                    />
                    <span style={{color: '#692D51'}}>
                        Change your email
                    </span>
                </div>
                <div className="settings-wrapper">
                    <FontAwesomeIcon
                        icon={faInfo}
                        color="#692D51"
                        width="30px"
                    />
                    <span style={{color: '#692D51'}}>Notifications</span>
                </div>
                <div className="settings-wrapper">
                    <FontAwesomeIcon 
                        icon={faInfoCircle} 
                        color="#692D51"
                        width="30px"
                    />
                    <span style={{color: '#692D51'}}>
                        Terms of use & Privacy notices
                    </span>
                </div>
                <div className="settings-wrapper">
                    <FontAwesomeIcon 
                        icon={faLock} 
                        color="#692D51"
                        width="30px"
                    />                          
                    <span style={{color: '#692D51'}}>Change your password</span>
                </div>
                <div className="settings-wrapper">
                    <FontAwesomeIcon 
                        icon={faGlobe} 
                        color="#692D51" 
                        width="30px"
                    />
                    <span style={{color: '#692D51'}}>FI/EN</span>
                </div>
            </div>
        </div>
    );
};
 
export default Settings;
