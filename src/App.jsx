import "./App.css";
import Header from "./components/Header";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <div className="App">
      {/* <Router> */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="container">
        <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <About />
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
