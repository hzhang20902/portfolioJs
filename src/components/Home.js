import React from "react";
import { HomeContent, AuthContent } from "./ContentOverlay";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const TopSectionContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;

const Home = () => {
    const location = useLocation();

    return(
        <TopSectionContainer>
            <HomeContent />
            {!location.state && (<AuthContent />)}
        </TopSectionContainer>
    );
};
export default Home;