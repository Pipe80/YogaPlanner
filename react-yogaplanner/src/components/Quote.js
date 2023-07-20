import React from "react";
import "../styles/QuoteStyles.css";

// Animations
import { motion } from "framer-motion";
import { scrollReveal } from '../styles/Animations';
import { useScroll } from "../styles/UseScroll";

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
                <h2 className="content">
                    Happiness is the highest form of health
                </h2>
                <h3 className="content">
                    ~ Dalai Lama
                </h3>
            </div>
        </motion.div>
    );
}
 
export default Features;
