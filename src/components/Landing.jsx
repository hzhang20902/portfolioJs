import React from "react";
import { Suspense } from "react";
import styled from "styled-components";
import assets from "../assets";
import { LandingContent } from "./ContentOverlay";
import { Canvas } from "@react-three/fiber";
import WavingModel from "./WavingModel";
import { OrbitControls } from "@react-three/drei";
import { ThreeDots } from "./Loader";

    const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
`;

    const Slogan = styled.div`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 2.5em;
    padding: 1em;
    text-shadow: 5px 9px 50px black;
    
`;

    const Logo = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 1em;
    padding: 1em;
    text-shadow: 5px 9px 50px black;
`;


const Landing = () => {
    return (
        <TopSectionContainer>
            <div className="main">
                <div className="overlay"></div>
                <video src={assets.lake} autoPlay loop muted />
                <div className='content fadeRightMini'>
                    <Logo>
                        Welcome to My Portfolio Hub
                    </Logo>   
                    <Slogan>
                        by Henry Zhang
                    </Slogan>

                    <div className="content">
                    <Canvas 
                        camera={{ position: [1, 0, 13], fov: 20 }}
                        style={{width: "100%", height: '70%', objectFit: 'cover'}}>
                        <Suspense fallback={<ThreeDots size='25'/>}>
                            <pointLight color='#f6f3ea' position={[6, 12, 15]} intensity={1.8}  />
                            <WavingModel position={[-0.75,-1.5,.6]}/>
                        </Suspense>
                        <OrbitControls 
                            enableZoom={false}
                            enablePan={false}
                        />
                    </Canvas>
                    </div>
                </div>
            <LandingContent />
           
            </div>
        </TopSectionContainer>
  
    )
}

export default Landing;  

