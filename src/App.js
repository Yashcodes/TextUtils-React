import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [modeTxt, setModeTxt] = useState("Dark");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeTxt("Light");
      document.body.style.backgroundColor = "rgb(27 28 30)";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled!", "success");
      document.title = "TextUtils - Dark Mode"
    } else {
      setMode("light");
      setModeTxt("Dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled!", "success");
      document.title = "TextUtils - Light Mode"
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null)
    }, 1000);
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
      
      <Alert alert={alert} />

      <div className="container mb-3">
        <TextForm heading="Enter the text below to analyze it" mode={mode} showAlert = {showAlert} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
