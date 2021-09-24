import { useState } from "react";
import "../styles/Register.sass";
import arrow from "../img/arrow.png";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState();
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  function handleSubmit() {
    localStorage.setItem("username", username || "Guest");
    history.push("/expressions");
  }
  return (
    <div className="Register">
      <div className="md-container">
        <img
          id="backButton"
          src={arrow}
          alt="Back button"
          onClick={handleClick}
        />
        <div className="center">
          <div className="form-container">
            <p>Register</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name..."
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
