import React from "react";
import SectionWrapper from "./higherorder/SectionWrapper";
import assets from "../assets";
import { SContainer } from "./higherorder/StyledComp";

const ErrorPage = () => {

    return(
        <SContainer>
            <SectionWrapper 
                title="404 Not Found"
                mockupImg={assets.notFound}
                banner='banner03'
                showBtn
                route="/"
                btnText="Home"
            />
        </SContainer>
    );
};
export default ErrorPage;