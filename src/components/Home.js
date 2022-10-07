import React, { Suspense } from "react";

import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Earth } from "./earth";
import { HomeContent } from "./ContentOverlay";

const Home = () => {
    const CanvasContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    flexShrink: auto;
    `;

    return(
            
        <CanvasContainer>
            <HomeContent />
            <Canvas 
                // camera={{ position: [-9, 0, 0], fov: 60, isPerspectiveCamera: true}}
                // style={{
                // backgroundColor: 'black',
                // width: "100%",
                // height: "100%",
                // }}
                >
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </CanvasContainer>
       
    );
};
export default Home;