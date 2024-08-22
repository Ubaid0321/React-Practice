// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setmode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "sucess");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success  ");
    }
  };
  return (
    <>
      {/* <Navbar  title="TEXT_UTILLS" abouttext = "About Text-Utills"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm
            heading="Enter The Text To Analyze Below "
            mode={mode}
            showAlert={showAlert}
          />
          } />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Alert alert={alert} />
      </div>










    </>
  );
}
export default App;
