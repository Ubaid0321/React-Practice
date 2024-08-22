import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    // console.log("Upper case was Clicked"+text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Coverted to UpperCase !", "sucess");
  };
  const handleLoClick = () => {
    // console.log("Upper case was Clicked"+text)
    let newtex1 = text.toLowerCase();
    setText(newtex1);
    props.showAlert("Coverted toLowerCase !", "sucess");
  };
  const handleOnchange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };
  const handleClear = () => {
    let newtext3 = "";
    setText(newtext3);
    props.showAlert("Cleared !", "sucess");
  };
  const handleCopyText = (color) => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied!", "sucess");
  };
  const handleRemoveExtraSpace = () => {
    var orignaltextElemennt = document.getElementById("mybox");
    let orignaltext = orignaltextElemennt.textContent;
    console.warn(orignaltext);
    const desiredResult = orignaltext.replace(/\s+/g, " ").trim();
    console.log(desiredResult);
    setText(desiredResult);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="classform-control"
            id="mybox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#373756",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnchange}
            cols="111"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRemoveExtraSpace}
        >
          Remove Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} Words and characters{text.length}
        </p>
        <p> {0.008 * text.split(" ").length} Minute Read</p>
        <h2>Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
