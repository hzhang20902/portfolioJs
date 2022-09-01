import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    background-color: #1755cc42;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7%;
    z-index: 99;
    display: flex;
    object-fit: cover;
    
`;

const Logo = styled.div`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 45px;
`;

const Slogan = styled.h4`
margin: 0;
color: #fff;
font-weight: 700;
font-size: 30px;
margin-top: 1em;
`
const UButton = styled.button`
    outline: none;
    border: none;
    background-color: #27b927;
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
        border: 2px solid #27b927;
    }

`

const Home = () => {
    const [content, setContent]  = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content = 
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
                setContent(_content);
            }
        );
    }, []);

    return(
        <TopSectionContainer>
        <Logo>
            {content}
        </Logo>
        <Slogan>
            Sustainability Through Collaboration
        </Slogan>
        <h4>
            It takes a village. Sometimes multiple villages.
            The way independent artists work is through one simple idea:
        </h4>
        <h3>
            By the people, for the people.
        </h3>
        <h4>
            As a professional musician and artist for the past 10 years,
            I have been lucky to work with many people in many places to achieve independent expression.
        </h4>
        <h4>
            Sign up below to see an interactive map!
        </h4>
        <Link to={"/register"}>
        <UButton>Collabs</UButton>
        </Link>

        <h6>
            (Or use the default login info on the "Login" page)
        </h6>
        
        
    </TopSectionContainer>



        // <div className="container">
        //     <header className="jumbotron">
        //         <h3>{content}</h3>
        //     </header>
        // </div>
    );
};
export default Home;