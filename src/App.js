import React from "react";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Feed/>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
