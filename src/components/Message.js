import { useRef, useEffect } from "react";
import "../styles/Message.sass";
import passed from "../img/passed.png";
import failed from "../img/failed.png";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const Message = ({
  feedback,
  setShowMessageToggle,
  getNewExpression,
  result,
}) => {
  const handleContinueBtn = () => {
    setShowMessageToggle(false);
    getNewExpression();
  };

  let domNode = useClickOutside(() => {
    setShowMessageToggle(false)
  });

  return (
    <div className="Message">
      <div className="Message-container" ref={domNode} >
        <img src={feedback === "Passed" ? passed : failed} alt="" />
        <p>
          {feedback === "Passed" ? "Congratulation! you passed" : "You failed"}
        </p>
        <div className="button-container">
          <button
            id="try-again-btn"
            onClick={() => setShowMessageToggle(false)}
          >
            Try again
          </button>
          <button id="continue-btn" onClick={() => handleContinueBtn()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
