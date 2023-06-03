import React from 'react';
import GetInTouch from './GetInTouch';

const Homepage = () => {
  return (
    <div>
      {/* Your main content */}
      <h1>Welcome to my Next.js project!</h1>
      <p>Some content...</p>

      {/* Button to open form submit modal */}
      <GetInTouch />
    </div>
  );
};

export default Homepage;
