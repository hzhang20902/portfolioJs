import React from "react";
import styled from "styled-components";
import SectionWrapper from "./hero/SectionWrapper";
import assets from "../assets";

const TopSectionContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
`;

const ErrorPage = () => {


    return(
        <TopSectionContainer>
            <SectionWrapper 
                title="404 Not Found"
                mockupImg={assets.notFound}
                reverse
            />
        </TopSectionContainer>
    );
};
export default ErrorPage;