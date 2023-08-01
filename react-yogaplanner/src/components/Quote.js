import React from "react";

// Animations & styles
import { motion } from "framer-motion";
import { scrollReveal } from '../styles/Animations';
import { useScroll } from "../styles/UseScroll";
import "../styles/FrontPageStyles.css";

const Features = () => {

    // Scroll animation
    const [element, controls] = useScroll();

    return (
        <motion.div
            className="quote-container"
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <div className="quote-wrapper">
                <h3 className="quote-content">
                    Happiness is the highest form of health
                </h3>
                <h4 className="quote-content">
                    ~ Dalai Lama
                </h4>
            </div>
        </motion.div>
    );
}
 
export default Features;
