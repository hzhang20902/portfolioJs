import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import eklutnaWide from '../assets/eklutnaWide.mp4';

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

    const Logo = styled.div`
    position: center;
    flex-direction: column;
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 45px;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-grow: 1;
    
`;

    const Slogan = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 1em;
    padding: 1em;
`;

    const UButton = styled.button`
    outline: none;
    border: none;
    background-color: rgba(13, 78, 217, 0.94);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
    padding: 8px 2em;
    margin-top: 3em;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 350ms ease-in-out;

    &:hover {
        background-color: transparent;
        border: 2px solid rgba(13, 78, 217, 0.94);
    }
`;

const Landing = () => {

    return (
       <TopSectionContainer>
        <div className="main">
        <div className="overlay"></div>
            <video src={eklutnaWide} autoPlay loop muted />
            <div className="content">
            <Slogan>
                Henry Zhang
            </Slogan>
            <div>
             <Slogan>
                Welcome to My Portfolio Hub
             </Slogan>
            </div>
            <Link to={"/home"} className="nav-link">
                <UButton>
                    Enter
                </UButton>
            </Link>
            
            </div>
        </div>
        </TopSectionContainer>
    )
}

export default Landing;