import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Routes>
          <Route path="/" element="" />
          <Route path="/about" element="" />
          <Route path="/contact" element="" />
          {/* <Route path="/nicele-reyes-cv" element="" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
