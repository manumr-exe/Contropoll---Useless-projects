import React from 'react';

const Comment = ({ username, text }) => {
  return (
    <div className="comment">
      <p><strong>{username}</strong> {text}</p>
    </div>
  );
};

export default Comment;