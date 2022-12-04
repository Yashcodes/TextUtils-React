import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container mb-3">
        <TextForm heading="Enter the text below to analyze it" />
      </div>
    </>
  );
}

export default App;
