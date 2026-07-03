import React from "react";
import { useState } from "react";

export default function About() {
  // function DarkMode(){
  //   console.log("clicked dark")
  //   let page = document.getElementById("kala")
  //   page.style.backgroundColor= 'black'
  // }
  const [MyStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btnText, setBtnText] = useState("Enable Light Mode")
  function HandleDark() {
    console.log("clicked")
    if (MyStyle.backgroundColor == "white") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode")
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark Mode")
    }
  }
  return (
    <div className="accordion" style={MyStyle} id="accordionExample">
      <h1 className="mx-3">About Us</h1>
      <div className="accordion-item" style={MyStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            style={MyStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the first item’s accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It’s also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={MyStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            style={MyStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={MyStyle}>
            <strong>This is the second item’s accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It’s also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={MyStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            style={MyStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={MyStyle}>
            <strong>This is the third item’s accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It’s also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <button className="btn btn-dark" onClick={HandleDark}>
        {" "}
        {btnText}
      </button>
    </div>
  );
}
