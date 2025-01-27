import React from 'react';
import './statsCounter.css';
import happyImage from "./happyC.png";
import stats from '../stats';
import CounterItem from '../happyClient/HappyClient';

const StatsCounter = () => {
  
  return (
    <section className="stats-counter">
      <div className="container">
        <div className="stats-wrapper">
          <div className="stats-image">
            <img src={happyImage} alt="Happy clients" />
          </div>
          <div className="stats-content">
            {stats.map((stat, index) => (
              <CounterItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;