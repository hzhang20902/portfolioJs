import { React } from "react";
import styled from "styled-components";
import assets from "../assets";
import { LandingContent } from "./ContentOverlay";
import { Link } from "react-router-dom";
import { MainButton, MainContainer } from "./higherorder/StyledComp";

    const Logo = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 1em;
    padding: 1em;
    text-shadow: 5px 9px 50px black;
`;

const LandingButton = styled(MainButton)`
    border: 2px solid transparent;
`

const Landing = () => {
    return (
        <MainContainer>
            <div className="main">
                <div className="overlay"></div>
                <video src={assets.lake} autoPlay loop muted/>
                <div className='content fadeRightMini'>
                    <Logo>
                        Welcome to My Portfolio Hub
                    </Logo>   
                    <Link to={"/about"} style={{zIndex: '1'}}>
                    <LandingButton style={{minWidth: '8.5em'}}>
                        About
                    </LandingButton>
                    </Link>
                    <Link to={"/projects"} style={{zIndex: '1'}}>
                    <LandingButton style={{minWidth: '8.5em'}}> 
                        Projects
                    </LandingButton>
                    </Link>
                    <Link to={"/skills"} style={{zIndex: '1'}}>
                    <LandingButton style={{minWidth: '8.5em'}}>
                        Skills
                    </LandingButton>
                    </Link>
                    <a href="#landinglinks" style={{zIndex: '1', scrollBehavior: 'smooth' }}>
                    <LandingButton style={{minWidth: '8.5em'}}>
                        Links
                    </LandingButton>
                    </a>

               
                </div>
                <div id="landinglinks">
            <LandingContent />
                </div>
           
            </div>
        </MainContainer>
  
    )
}

export default Landing;