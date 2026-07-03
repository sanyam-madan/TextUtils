import React, { useState } from "react";

export default function Texthtmlform(props) {
  function BtnClicked1() {
    let UpperText = text.toUpperCase();
    setText(UpperText);
    props.showAlert("converted to UpperCase", "Success")
  }
  function Changed(event) {
    setText(event.target.value);
  }
  function BtnClicked2() {
    let LowerText = text.toLowerCase();
    setText(LowerText);
    props.showAlert("converted to LowerCase", "Success")
  }
  function BtnClicked3() {
    setText("");
    props.showAlert("All Cleared", "Success")
  }
  
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking", "Success")
  };
  const cancelSpeech = () => {
    speechSynthesis.cancel();
    props.showAlert("canceling speaking", "Success")
  };
  function HandleReverse() {
    let reverse = text.split("").reverse().join("");
    setText(reverse);
    props.showAlert("converted to Reverse", "Success")
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard ", "Success")
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("removed all extra spaces ", "Success")
}

  const [text, setText] = useState("enter here");
  return (
    <>
      <div className="container " style={{ color: props.mode== 'light'? 'black': 'white'}} >
        <h2>{props.Heading}</h2>
        {/* <h6 onClick= {BtnClicked}></h6> */}
        {/* <label htmlfor="MyBox" className="form-label"></label> */}
        <textarea
          className="form-control"data-bs-theme= {props.mode}
          id="MyBox"
          rows="5"
          value={text}
          onChange={Changed}
        ></textarea>
        <button className="btn btn-primary" onClick={BtnClicked1} id="btn1">
          {" "}
          Convert to Upper Case{" "}
        </button>
        <button className="btn btn-primary" onClick={BtnClicked2} id="btn2">
          {" "}
          Convert to Lower Case{" "}
        </button>
        <button className="btn btn-primary" onClick={BtnClicked3} id="btn3">
          {" "}
          Clear All{" "}
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button
          type="submit"
          className="btn btn-danger mx-2"
          onClick={cancelSpeech}
        >
          Stop Speach
        </button>
        <button id="btn5" className="btn btn-dark" onClick={HandleReverse}>
          {" "}
          Reverse
        </button>
        <button id="btn6" className="btn btn-dark" onClick={handleCopy}>
          {" "}
          Copy Text 
        </button>
        <button id="btn7" className="btn btn-dark" onClick={handleExtraSpaces}>
          {" "}
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode== 'light'? 'black': 'white'}}   >
        <b>
          <h3>Your Text Summary </h3>
        </b>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes needed to read this </p>
        <h2>Preview</h2>
        <p>{text.length>0? text:" KUCH LIKH TOH KAM SE KAM"}</p>
      </div>
    </>
  );
}
