import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentsSection = () => {
  return (
    <section className="comments-section">
      <h3>Comments</h3>
      <Comment username="abcduser" text="who tf voted for cristiano!!" />
      <Comment username="abcduser" text="who tf voted for cristiano!!" />
      <Comment username="abcduser" text="who tf voted for cristiano!!" />
      <CommentInput />
    </section>
  );
};

export default CommentsSection;