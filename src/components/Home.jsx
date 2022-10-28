import React from "react";
import { HomeContent } from "./ContentOverlay";
import styled from "styled-components";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    padding-top: 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;

const Home = () => {


    return(
        <TopSectionContainer>
           
            <HomeContent />
           
        </TopSectionContainer>
    );
};
export default Home;