import React, { useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [roomid, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    console.log(id);
    setRoomId(id);
    toast.success("Successfully created!");
  };

  const joinRoom = () => {
    if (!roomid && !userName) {
      toast.error("RoomId and Username cannot be empty");
    } else if (!roomid) {
      toast.error("RoomId cannot be empty");
    } else if (!userName) {
      toast.error("Username cannot be empty");
    } else {
      navigate(`/editor/${roomid}`, {
        state: {
          userName,
        },
      });
    }
  };
  const handleKeyInput = (e) => {
    if (e.code === "Enter") {
      joinRoom();
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
        <h4 className="mainLabel">Paste Invitation Room Id</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room Id"
            value={roomid}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleKeyInput}
          ></input>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="inputBox"
            placeholder="User name"
            value={userName}
            onKeyUp={handleKeyInput}
          ></input>
          <button onClick={joinRoom} className="btn joinBtn">
            Join
          </button>
          <span className="createInfo">
            If you dont have an invite then create &nbsp;{" "}
            <a onClick={createRoom} href="" className="createNewBtn">
              New Room
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
