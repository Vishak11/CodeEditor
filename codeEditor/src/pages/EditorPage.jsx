import React from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";
import { useLocation } from "react-router-dom";
const EditorPage = () => {
 
  const location = useLocation();
  const { username,userid } = location.state || {};
  
 
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img
              className="image-logo"
              src="/logo7-removebg-preview.png"
              alt="logo"
            />
          </div>
          <h3>Connected</h3>
          <div className="clientList">
           
              <Client userid={userid} username={username} />
            
          </div>
        </div>
        <button className="btn btnCopy">Submit Code</button>
        <button className="btn btnLeave">Log out</button>
      </div>

      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
