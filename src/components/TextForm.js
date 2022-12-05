import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpperClick = () => {
    // console.log("Uppercase function was clicked" + text);
    setText(text.toUpperCase());
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("This is the text value");
  //text = "New text"; // Wrong way to change the state
  //setText("New text"); // Correct way to change the state

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="textArea" className="form-label">
            <h1 className="mt-5">{props.heading}</h1>
          </label>

          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textArea"
            rows="10"
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          Total time to read {text.split(" ").length} words is{" "}
          {0.08 * text.split(" ").length}
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
