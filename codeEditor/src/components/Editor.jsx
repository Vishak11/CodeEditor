import React, { useEffect, useRef } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

const Editor = () => {
  const editorRef = useRef(null);
  useEffect(() => {
    async function init() {
      console.log("init function is running");
      editorRef.current = Codemirror.fromTextArea(
        document.getElementById("realTimeEditor"),
        {
          mode: { name: "javascript", json: true },
          theme: "dracula",
          autoClosetags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      ).setSize("100%",756);
      editorRef.current.on('change',(instance,changes)=>{
        console.log(changes)
      })
    }
    init();
  }, []);
  return <textarea  className="textEditor" id="realTimeEditor"></textarea>;
};

export default Editor;
