// import  favicon from "../public/favicon.svg"
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./components/Extracss.css";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [mode1, setMode1] = useState("dark");
  const [darkMode, setDarkMode] = useState("Enable Dark Mode");
  function toggleDark() {
    if (mode == "light") {
      setMode("dark");
      setDarkMode("Enable Light Mode");
      setMode1("light");
      showAlert("dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
      document.title = " TextUtils-Dark Mode";
    } else {
      setMode("light");
      setDarkMode("Enable Dark Mode");
      setMode1("dark");
      showAlert("light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
      document.title = " TextUtils-light Mode";
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
    <Router>

      <div id="kala">
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          toggleDark={toggleDark}
          darkMode={darkMode}
          mode1={mode1}
        />
        <Alert alert={alert} />
         <div className="container">
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm Heading="Enter here to use the features" mode={mode} showAlert={showAlert} />} />
      </Routes>
    </div>
      </div>
          </Router>
    </>
  );
}

export default App;
