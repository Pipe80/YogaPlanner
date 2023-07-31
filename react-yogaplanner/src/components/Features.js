import React from "react";

// Images
import YogaSequenceImage from "../assets/Yoga_sequence.jpeg";
import YogaClassImage from "../assets/Yoga_class.jpeg";

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
            id="Features"
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <div className="features-wrapper">
                <div className="image-container">
                    <img src={YogaSequenceImage} alt="Yoga Sequence" />
                </div>
                <div className="content">
                    <h2>Intuitive Sequence Creation</h2>
                    <p>
                    Seamlessly design personalized yoga sequences 
                    with our intuitive tool. Empower your teaching 
                    with harmonious poses and mindful transitions, 
                    leaving students feeling balanced and rejuvenated.
                    </p>
                </div>
            </div>
            <div className="features-wrapper class">
                <div className="content">
                    <h2>Elevate Student Experience</h2>
                    <p>
                    Enhance your classes with our powerful Yoga Sequence Planner. 
                    Craft graceful sequences tailored to various skill levels and 
                    intentions, fostering a profound sense of connection and 
                    growth for your students.
                    </p>
                </div>
                <div className="image-container">
                    <img src={YogaClassImage} alt="Yoga Class" />
                </div>
            </div>
        </motion.div>
    );
}
 
export default Features;
