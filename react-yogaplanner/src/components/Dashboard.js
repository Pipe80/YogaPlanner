import React from "react";
import "../styles/AppStyles.css";
import { Link } from 'react-router-dom';

// Components 
import AppNav from "./AppNav";

const FrontPage = () => {
    return (
        <div className="dashboard">
            <AppNav />
            <div className="dashboard-container">
                <h2>Hello World</h2>
                <Link to="/yogaapp">
                    <button>+</button>
                </Link>
            </div>
        </div>
    );
}
 
export default FrontPage;
