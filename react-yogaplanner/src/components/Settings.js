import React from "react";
import "../styles/SettingStyle.css";
import Logo from "../assets/Logo.png";

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="settings-header">
        <img src={Logo} className="logo" alt="Logo" />
        <h2>Yogaplanner</h2>
        <div className="nav-buttons">
          <button className="settings-button">Settings</button>
          <button className="logout-button">Log Out</button>
        </div>
      </div>
      <div className="settings-content">
        <div className="left-sidebar">
          <div className="left-sidebar-content">
            <button className="back-button">Back</button>
            <button className="save-button">Save</button>
          </div>
        </div>
        <div className="settings-center">
          <div className="language-menu">{/* Language menu content */}</div>
          <div className="change-password-menu">{/* Change password menu content */}</div>
          <div className="change-email-menu">{/* Change email menu content */}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
