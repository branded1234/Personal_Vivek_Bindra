import React from "react";
import "./Card.css";
import {motion} from 'framer-motion'

const Card = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <section className="card-section cream-color">
      <div className="card-container green-color">
        <div className="c-left">
          <motion.img
            initial={{ left: "-450px" }}
            whileInView={{ left: "-515px" }}
            transition={transition}
            src="./card.png"
            alt=""
          />
        </div>
        <div className="c-right">
          <h4>
            We Create A Customized Approach For Business in <hr />
            Various Industries which Increase Sales, Maximize <hr />
            Customer Satisfaction, And Take The Guesswork Out Of <hr />
            Advertising On Digital Platforms.
          </h4>
          <button className="btn yellow-color">GET STARTED ➔</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
