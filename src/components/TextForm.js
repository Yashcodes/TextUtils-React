import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("Uppercase function was clicked" + text);
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("This is the text value");
  //text = "New text"; // Wrong way to change the state
  //setText("New text"); // Correct way to change the state

  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
};

export default TextForm;
