import React, { useState, useEffect } from 'react';
import useThrottle from '../hooks/useThrottle';

function ThrottledResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const throttledWindowSize = useThrottle(windowSize, 3000);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Throttled Resize</h2>
      <p>Actual size: <span className="highlight">{windowSize.width} x {windowSize.height}</span></p>
      <p>Throttled size: <span className="highlight">{throttledWindowSize.width} x {throttledWindowSize.height}</span></p>
    </div>
  );
}

export default ThrottledResize;