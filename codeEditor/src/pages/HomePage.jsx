import React, { useEffect, useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [uuid, setUuid] = useState();
  const navigate = useNavigate();

  const createRegister = () => {
    navigate(`/register`);
  };

  const logIn = () => {
  const id = uuidv4();
  setUuid(id); 

  console.log(id);

  if (!password && !userName) {
    toast.error("password and Username cannot be empty");
  } else if (!password) {
    toast.error("password cannot be empty");
  } else if (!userName) {
    toast.error("Username cannot be empty");
  } else {
    toast.success("Login successful");
    navigate(`/editor`, { state: { username: userName, userid: id } });
  }
};
  const handleKeyInput = (e) => {
    if (e.code === "Enter") {
      logIn();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="image-logo"
          src="/logo7-removebg-preview.png"
          alt="logo"
        />
        <h4 className="mainLabel">
          Please enter username and password to continue
        </h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleKeyInput}
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="inputBox"
            placeholder="Password"
            value={password}
            onKeyUp={handleKeyInput}
          ></input>
          <button onClick={logIn} className="btn joinBtn">
            Login
          </button>
          <span className="createInfo">
            If you are a new user &nbsp;{" "}
            <a onClick={createRegister} href="" className="createNewBtn">
              Click here
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>add some text</h4>
      </footer>
    </div>
  );
};

export default HomePage;
