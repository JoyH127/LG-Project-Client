import React from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/routues/Home";
import Footer from "./components/routues/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to={"/"}>Home</NavLink>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
