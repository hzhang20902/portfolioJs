import React from "react";
import { HomeContent } from "./ContentOverlay";
import styled from "styled-components";

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

const Home = () => {

    return(
        <TopSectionContainer>
            <HomeContent />
        </TopSectionContainer>
    );
};
export default Home;