import React from "react";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
