import "../styles/Expressions.sass";
import axios from "axios";
import { useEffect, useState } from "react";
import Message from "../components/Message.js";

function Expressions() {
  const [firstInt, setFirstInt] = useState(0);
  const [secondInt, setSecondInt] = useState(0);
  const [operator, setOperator] = useState("");
  const [expressionURL, setExpressionURL] = useState("");
  const [userInput, setUserInput] = useState(undefined);
  const [result, setResult] = useState(0);
  const [showMessageToggle, setShowMessageToggle] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    getNewExpression();
    setUsername(localStorage.getItem("username"));
  }, []);

  // Fire assignOperator function if operator variable changes
  useEffect(() => {
    assignOperator();
    handleMessage();
  }, [operator, result]);

  const assignOperator = () => {
    switch (operator) {
      case "+":
        setExpressionURL(`${firstInt}%2B${secondInt}`);
        break;
      case "-":
        setExpressionURL(`${firstInt}-${secondInt}`);
        break;
      case "*":
        setExpressionURL(`${firstInt}*${secondInt}`);
        break;
      case "/":
        setExpressionURL(`${firstInt}%2F${secondInt}`);
        break;
      default:
        break;
    }
  };

  const [feedback, setFeedback] = useState("");

  const getResult = async () => {
    await axios
      .get(`http://api.mathjs.org/v4/?expr=${expressionURL}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((error) => console.log(error));
    handleMessage();
    setShowMessageToggle(true);
  };

  const handleMessage = () => {
    if (+userInput === result) {
      setFeedback("Passed");
    } else {
      setFeedback("Failed");
    }
  };

  const generateRandomInt = () => {
    // Returns a random integer from 0 to 10:
    return Math.floor(Math.random() * 11);
  };

  const generateRamdonOperator = () => {
    const operators = ["+", "-", "/", "*"];
    const randomOperator = Math.floor(Math.random() * operators.length);
    return operators[randomOperator];
  };

  const getNewExpression = () => {
    setFirstInt(generateRandomInt());
    setSecondInt(generateRandomInt());
    setOperator(generateRamdonOperator());
    setUserInput("");
  };

  const expressionToSolve = `${firstInt}${operator}${secondInt}=`;

  return (
    <div className="Expressions">
      <p className="welcome">Welcome {username}</p>
      <div className="Expressions-container">
        <h1>Math expressions</h1>
        <div className="task">
          <p>{expressionToSolve}</p>
          <input
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            autoFocus
          />
        </div>
        <div className="buttons-container">
          <button id="tryAnother" onClick={getNewExpression}>
            Try another
          </button>
          <button id="submit" onClick={() => getResult()}>
            Submit
          </button>
        </div>
      </div>
      {showMessageToggle && (
        <Message
          feedback={feedback}
          setShowMessageToggle={setShowMessageToggle}
          getNewExpression={getNewExpression}
          result={result}
        />
      )}
      <img src="" alt="" />
    </div>
  );
}

export default Expressions;
