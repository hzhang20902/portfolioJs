import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './index.css';

import NavBar from "./components/navbar/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardAdmin from "./components/boards/BoardAdmin";
import BoardModerator from "./components/boards/BoardModerator";
import BoardUser from "./components/boards/BoardUser";
import Register from "./components/Register";
import NewLogin from "./components/NewLogin";



const App = () => {

  return (
    <div>
    <NavBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<NewLogin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
        </Routes>
    </div>
  );
};

export default App;
