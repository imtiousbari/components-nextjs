import React from 'react';
import SubmitButton from './SubmitButton';

const Post = () => {
  return (
    <div>
      {/* Your main content */}
      <h1>Welcome to my Next.js project!</h1>
      <p>Some content...</p>

      {/* Button to open form submit modal */}
      <SubmitButton />
    </div>
  );
};

export default Post;
