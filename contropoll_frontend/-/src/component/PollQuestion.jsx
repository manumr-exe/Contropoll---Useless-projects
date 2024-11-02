import React from 'react';
import PollOption from './PollOption';

const PollQuestion = () => {
  return (
    <section className="question">
      <h2>Q1. Who is the worst?</h2>
      <PollOption text="Lionel Messi" percentage={70} />
      <PollOption text="Cristiano Ronaldo" percentage={90} />
    </section>
  );
};

export default PollQuestion;