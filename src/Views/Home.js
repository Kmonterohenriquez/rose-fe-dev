import React from "react";
import logo from "../img/logo.png";
import "../styles/Home.sass";
import expressionsIcon from "../img/expressionsIcon.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  return (
    <div className="Home md-container">
      <div id="header">
        <img id="logo" src={logo} alt="MathExpressions logo" />
        <nav>
          <ul>
            <li>Login</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>
      <div className="info-container">
        <h1>
          Welcome to
          <br /> MathExpressions
        </h1>
        <p>Where kids can master their math skills.</p>
        <button type="button" onClick={handleClick}>
          <img src={expressionsIcon} alt="" /> Start
        </button>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Home;
