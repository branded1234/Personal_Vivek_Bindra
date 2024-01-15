import React from "react";
import "./Stats.css";
import NumberCounter from 'number-counter'

const Stats = () => {
  return (
    <section id="stats-section" className="stat-section cream-color">
      <div className="stat-container">
        <div className="item-1 green-color">
          <div className="circle"><NumberCounter start={65} end={78} delay='4' /> %</div>
          <h4>Strategy</h4>
        </div>
        <div className="item-2 ">
          <img src="./stat-hero.png" alt="" />
        </div>
        <div className="item-3 bluish-color">
          <div className="circle"><NumberCounter start={80} end={95} delay='4' /> %</div>
          <h4>Audience</h4>
        </div>
        <div className="item-4 blackish-color">
          <h2>
            KEYWORD, RESEARCH <br />
            STRATEGY, SURVEY & <br />
            ANALYTICS
          </h2>
          <img src="./hero.png" alt="" />
        </div>
        <div className="item-5 brown-color">
          <div className="circle"><NumberCounter start={62} end={75} delay='4' /></div>
          <h4>Keyword</h4>
        </div>
      </div>
    </section>
  );
};

export default Stats;
