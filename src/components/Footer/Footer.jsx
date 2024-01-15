import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section cream-color">
      <div className="footer-container">
        <div className="f-container green-color">
          <div className="f-content">
            <h1>
              LET'S MAKE <br />
              SOMETHING GREAT !
            </h1>
            <button className="btn yellow-color">SAY H!</button>
            <img src="./logo.png" alt="" />
            <p>
              We are a digital agency <br />
              based on India.
            </p>
            <div className="img-container">
                <img src="./dp.png" alt="" />
            </div>
            <div className="f-end">
                <span>@SSEO Agency 2024. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
