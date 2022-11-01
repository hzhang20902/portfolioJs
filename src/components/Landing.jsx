import { React, Suspense } from "react";
import styled from "styled-components";
import assets from "../assets";
import { LandingContent } from "./ContentOverlay";
import { Canvas } from "@react-three/fiber";
import WavingModel from "./avatar/WavingModel";
import { OrbitControls } from "@react-three/drei";
import { ThreeDots } from "./higherorder/Loader";
import { Link } from "react-router-dom";
import { MainButton, MainContainer } from "./higherorder/StyledComp";

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
        <MainContainer>
            <div className="main">
                <div className="overlay"></div>
                <video src={assets.lake} autoPlay loop muted />
                <div className='content fadeRightMini'>
                    <Logo>
                        Welcome to My Portfolio Hub
                    </Logo>   
                    <Link to={"/about"} style={{zIndex: '1'}}>
                    <MainButton>
                        Enter
                    </MainButton>
                    </Link>
                    <Slogan>
                        by Henry Zhang
                    </Slogan>

                    <div className="content">
                    <Canvas 
                        camera={{ position: [1, 0, 13], fov: 20 }}
                        style={{width: "100%", height: '70%', objectFit: 'cover'}}>
                        <Suspense fallback={<ThreeDots size='25'/>}>
                            <pointLight color='#f6f3ea' position={[6, 12, 15]} intensity={1.8}  />
                            <WavingModel position={[-0.93,-1.3,.6]}/>
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
        </MainContainer>
  
    )
}

export default Landing;  

