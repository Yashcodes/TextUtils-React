import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpperClick = () => {
    // console.log("Uppercase function was clicked" + text);
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const [text, setText] = useState("");
  //text = "New text"; // Wrong way to change the state
  //setText("New text"); // Correct way to change the state

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="textArea" className="form-label">
            <h1 className="mt-3">{props.heading}</h1>
          </label>

          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textArea"
            rows="10"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(35 38 42)",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>

        <p>
          Total time to read{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words is{" "}
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
