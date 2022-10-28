import React from "react";
import styled from "styled-components";
import SectionWrapper from "./higherorder/SectionWrapper";
import assets from "../assets";

const TopSectionContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;

const ErrorPage = () => {


    return(
        <TopSectionContainer>
        <>
            <SectionWrapper 
                title="404 Not Found"
                mockupImg={assets.notFound}
                banner='banner03'
            />
        </>
        </TopSectionContainer>
    );
};
export default ErrorPage;