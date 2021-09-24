import React from "react";

const Message = ({ feedback, handleShowMessageToggle, result }) => {
  return (
    <div>
      <p>{feedback} {result}</p>
      <button>Try again</button>
      <button onClick={() => handleShowMessageToggle()}>Continue</button>
    </div>
  );
};

export default Message;
