import React from "react";
import "./Learning.css";
import { motion } from "framer-motion";

const Learning = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <section className="l-section green-color">
      <div className="l-container">
        <div className="l-content cream-color">
          <img src="./work-2.png" alt="" />
          <h1>FULL-POTENTIAL MARKETING SERVICE</h1>
          <img src="./l-content.png" alt="" />
        </div>
      </div>
      <motion.div
        initial={{ top: "166rem" }}
        whileInView={{ top: " 182rem" }}
        transition={transition}
        className="image-container"
      >
        <img src="./l-img.png" alt="" />
      </motion.div>
    </section>
  );
};

export default Learning;
