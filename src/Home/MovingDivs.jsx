import React, { useEffect, useState } from 'react';
import './MovingDivs.css';

const MovingDivs = () => {
  const [divs, setDivs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now(); // unique ID
      setDivs(prev => [...prev, id]);

      // Remove div after animation (5s)
      setTimeout(() => {
        setDivs(prev => prev.filter(divId => divId !== id));
      }, 5000);
    }, 1000); // Every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {divs.map(id => (
        <div key={id} className="moving-div">
          🚀
        </div>
      ))}
    </div>
  );
};

export default MovingDivs;