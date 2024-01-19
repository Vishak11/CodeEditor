import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = () => {
    if (!userName || !password || !confirmPassword) {
      toast.error("Fields cannot be empty");
    } else if (password != confirmPassword) {
      toast.error("passwords are not matching");
    } else {
        toast.success("Registered successfully")
      navigate(`/`);
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
        <h4 className="mainLabel">Please enter the details to register</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="inputBox"
            placeholder="Password"
            value={password}
          ></input>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="text"
            className="inputBox"
            placeholder="Confirm Password"
            value={confirmPassword}
          ></input>

          <button onClick={registerUser} className="btn joinBtn">
            Register
          </button>
        </div>
      </div>
      <footer>
        <h4>add some text</h4>
      </footer>
    </div>
  );
};

export default Register;
