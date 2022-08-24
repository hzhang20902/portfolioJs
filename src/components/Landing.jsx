import React from "react";
import styled from "styled-components";
import eklutnaWide from '../assets/eklutnaWide.mp4';




    const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background-color: #1700dd82;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 99;
    
`;

    const Logo = styled.div`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 45px;
`;

const Landing = () => {

    return (
       <TopSectionContainer>
        <div className="main">
        <div className="overlay"></div>
            <video src={eklutnaWide} autoPlay loop muted />
            <div className="content">
            <Logo>
                Welcome
            </Logo>
            </div>
        </div>
        </TopSectionContainer>
    )
}

export default Landing;