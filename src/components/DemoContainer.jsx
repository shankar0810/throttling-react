import React from 'react';
import DebouncedSearch from './DebouncedSearch';
import ThrottledResize from './ThrottledResize';

function DemoContainer() {
  return (
    <div>
      <h1>Debounce and Throttle Demo</h1>
      <div className="demo-section">
        <DebouncedSearch />
      </div>
      <div className="demo-section">
        <ThrottledResize />
      </div>
    </div>
  );
}

export default DemoContainer;