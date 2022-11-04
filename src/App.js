import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import styled from "styled-components";

import NavBar from "./components/navbar/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Profile from "./components/boards/Profile";
import BoardAdmin from "./components/boards/BoardAdmin";
import BoardModerator from "./components/boards/BoardModerator";
import ContactPage from "./components/ContactPage";
import NewRegister from "./components/NewRegister";
import NewLogin from "./components/NewLogin";
import ErrorPage from "./components/ErrorPage";
import AboutPage from "./components/AboutPage";
import GlobalPage from "./components/GlobalPage";


const CanvasContainer = styled.div`
width: 100%;
height: 100%;
background-color: black;
flexGrow: 1;
object-fit: cover;
`;

const App = () => {

  return (
    <CanvasContainer>
      <NavBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/projects" element={<Home/>} />
          <Route path="/login" state={true} element={<NewLogin/>} />
          <Route path="/register" element={<NewRegister/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/skills" element={<GlobalPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      
    </CanvasContainer>
    
  );
};

export default App;
