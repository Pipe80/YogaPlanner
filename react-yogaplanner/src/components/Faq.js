import React, { useState } from "react";

// Animations & styles
import { motion, LayoutGroup } from "framer-motion";
import { scrollReveal } from '../styles/Animations';
import { useScroll } from "../styles/UseScroll";
import "../styles/FrontPageStyles.css";

// Footer component
import Footer from './Footer';

const FaqSection = () => {

  const [element, controls] = useScroll();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How Do I Start?",
      answer: "Lorem ipsum dolor sit amet.",
    },
    {
      question: "Daily Schedule",
      answer: "Lorem ipsum dolor sit amet.",
    },
    {
      question: "Different Payment Methods",
      answer: "Lorem ipsum dolor sit amet.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.div
      id="Faq"
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h3>Frequently Asked Questions</h3>
      <LayoutGroup>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            className="question"
            onClick={() => toggleFaq(index)}
          >
            <motion.h6 layout>{faq.question}</motion.h6>
            {activeIndex === index && (
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            )}
            <div className="faq-line"></div>
          </motion.div>
        ))}
      </LayoutGroup>
      <Footer/>
    </motion.div>
  );
};

export default FaqSection;
