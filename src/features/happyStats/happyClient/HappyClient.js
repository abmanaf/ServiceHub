import React, { useState, useEffect } from 'react';
import "./happyClient.css"
const CounterItem = ({ end, duration, title, description }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let startTime;
      let animationFrame;
  
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);
  
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
  
      animationFrame = requestAnimationFrame(animate);
  
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration]);
  
    return (
      <div className="stats-item">
        <span className="counter">{count}</span>
        <p>
          <strong>{title}</strong> {description}
        </p>
      </div>
    );
  };
  
  export default CounterItem;