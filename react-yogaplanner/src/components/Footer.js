import React from "react";

// Animations
import { motion } from "framer-motion";
import { scrollReveal } from '../styles/Animations';
import { useScroll } from "../styles/UseScroll";
import "../styles/FrontPageStyles.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const [element, controls] = useScroll();

    return (
        <motion.footer
            className="footer"
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
        <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
        </div>
        <p className="yoga-planner">&copy; 2023 Yoga Planner</p>
        </motion.footer>
    );
};

export default Footer;
