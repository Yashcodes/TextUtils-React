import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [modeTxt, setModeTxt] = useState("Dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeTxt("Light");
      document.body.style.backgroundColor = "rgb(27 28 30)";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setModeTxt("Dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        modeTxt={modeTxt}
      />

      <div className="container mb-3">
        <TextForm heading="Enter the text below to analyze it" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
