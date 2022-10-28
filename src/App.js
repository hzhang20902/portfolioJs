import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Routes, Route, useLocation } from "react-router-dom";

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
import { Earth } from './components/earth';
import { Rings } from "./components/higherorder/Loader";


const CanvasContainer = styled.div`
width: 100%;
height: 100%;
background-color: black;
flexGrow: 1;
object-fit: cover;
`;

const App = () => {
  const location = useLocation();

  return (
    <CanvasContainer>
      <NavBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" state={true} element={<NewLogin/>} />
          <Route path="/register" element={<NewRegister/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        {location.state && (<Canvas 
        camera={{ position: [0, 0, 40], fov: 50, isPerspectiveCamera: true}}
        style={{
        backgroundColor: 'black',
        width: "100%",
        objectFit: 'cover'}}
        >
        <Suspense fallback={<Rings size='125' speed='0.5'/>}>
          <Earth />
        </Suspense>
        <OrbitControls />
      </Canvas>)}

      
    </CanvasContainer>
    
  );
};

export default App;
