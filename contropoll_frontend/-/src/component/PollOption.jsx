import React from 'react';

const PollOption = ({ text, percentage }) => {
  return (
    <div className="poll-option">
      <div className="option-text">{text}</div>
      <div className="option-bar" style={{ width: `${percentage}%` }}>{percentage}%</div>
    </div>
  );
};

export default PollOption;