import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import NavBar from "./components/navbar/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Map from "./components/map/Map";
import Profile from "./components/Profile";
import BoardAdmin from "./components/BoardAdmin";
import BoardModerator from "./components/BoardModerator";
import BoardUser from "./components/BoardUser";

import Register from "./components/Register";
import NewLogin from "./components/NewLogin";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "./components/earth/index";

import styled from "styled-components";




const App = () => {
  const CanvasContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    flexGrow: 1;
    object-fit: cover;
    `;

  return (
    <CanvasContainer>
    <NavBar />

        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/login" element={<NewLogin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
        </Routes>
  
      <Canvas 
        camera={{ position: [-9, 0, 0], fov: 60, isPerspectiveCamera: true}}
        style={{
        backgroundColor: 'black',
        width: "100%",
        height: "100vh",
        "object-fit": 'cover',
      }}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <OrbitControls />
      </Canvas>
    
    </CanvasContainer>
  );
};

export default App;
