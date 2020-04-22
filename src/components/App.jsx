import React, { useState } from "react";

function App() {
  var content = "Hello";
  const [headingContent, setHeading] = useState(content);
  const [isMouseOver, setBackgroundColor] = useState(false);

  function changeHeading() {
    setHeading("Submitted");
  }

  function changeMouseOverColor() {
    setBackgroundColor(true);
  }

  function changeMouseOutColor() {
    setBackgroundColor(false);
  }
  return (
    <div className="container">
      <h1>{headingContent}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={changeMouseOverColor}
        onMouseOut={changeMouseOutColor}
        onClick={changeHeading}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
