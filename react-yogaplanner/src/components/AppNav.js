import React  from "react";
import { Link } from 'react-router-dom';
import "../styles/NavStyles.css";

// For logo import
import Logo from "../assets/Logo_test.png";

const AppNav = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
           <Link to="/settings">
              Settings
            </Link>
        </li>
        <li>
            <Link to="/">
              <button>Log out</button>
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
