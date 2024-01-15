import React, { useState } from "react";
import "./Work.css";
import { WorkData } from "../../data/WorkData";
import { motion } from "framer-motion";

const Work = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const wlength = WorkData.length;

  return (
    <section id="work-section" className="work-section cream-color">
      <div className="work-container">
        <hr />
        <div className="w-container">
          <div className="w-left">
            <motion.img
              key={selected}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={transition}
              src={WorkData[selected].image}
              alt=""
            />
          </div>
          <div className="w-right">
            <motion.h1
              key={selected}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={transition}
            >
              {WorkData[selected].heading}
            </motion.h1>
            <div>
              <motion.p
                key={selected}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={transition}
              >
                {WorkData[selected].description}
              </motion.p>
            </div>
            <div className="arrows">
              <img
                onClick={() => {
                  selected === 0
                    ? setSelected(wlength - 1)
                    : setSelected((prev) => prev - 1);
                }}
                src="./leftArrow.png"
                alt=""
              />
              <img
                onClick={() => {
                  selected === wlength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                src="./rightArrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Work;
