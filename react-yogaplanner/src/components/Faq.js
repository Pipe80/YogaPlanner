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
      question: "How do I start?",
      answer: "Create a account and start using it today.",
    },
    {
      question: "What is YogaPlanner?",
      answer: "YogaPlanner is a app for yoga teachers.",
    },
    {
      question: "Is it easy to learn?",
      answer: "There are different levels for beginners and so on.",
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
