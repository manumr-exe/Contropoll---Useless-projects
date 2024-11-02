import React from 'react';

const CommentInput = () => {
  return (
    <div className="comment-input">
      <label htmlFor="username">Name yourself</label>
      <input type="text" id="username" placeholder="Your name..." />
      <textarea placeholder="Comment your thoughts..."></textarea>
      <button>Submit Comment</button>
    </div>
  );
};

export default CommentInput;