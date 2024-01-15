import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <section id="hero-section" className="hero-section cream-color">
      <div className="h-large">
        <h1>
          I THINK YOUR <hr />
          BUSINESS FIND SEO <hr />
          SOLUTION...
        </h1>
        <motion.img
        initial={{right: "200px"}}
          whileInView={{ right: "400px" }}
          transition={transition}
          src="./hero.png"
          alt=""
        />
      </div>
      <div className="h-small">
        <h3>
          WE CREATE A CUSTOMIZED APPROACH <hr />
          FOR BUSINESS IN VARIOUS INDUSTRUES <hr />
          WHICH INCREASE SALES, MAXIMIZE <hr />
          CUSTOMER SATISFACTION.
        </h3>
        <button className="yellow-color">SEE OUR ALL SERVICE</button>
        <a href="">HOW IT WORKS</a>
      </div>
    </section>
  );
};

export default Hero;
