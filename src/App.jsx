import "./App.css";
import Header from "./components/Header";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import React from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  // const [section1Ref, section1InView] = useInView({ threshold: 0.5 });
  // const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  return (
    <div className="App">
      {/* <Router> */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="container">
        <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <About currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      {/* <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element="" />
          {/* <Route path="/nicele-reyes-cv" element="" /> }
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
