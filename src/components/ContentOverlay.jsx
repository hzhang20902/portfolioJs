import React from 'react'
import { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 0%;
    top: 0;
    left: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7%;
    padding: 1em;
    z-index: 99;
`;
    const Logo = styled.div`
    margin: auto;
    color: #fff;
    font-weight: 700;
    font-size: 45px;
    margin-top: 1em;
    padding-top: 1em;
`;

    const Slogan = styled.h4`
    margin: 0.4;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 1em;
    margin-bottom: 2em;
    padding: 0.3em;
`
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

`
export const HomeContent = () => {
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
  return (
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
            <h4>
                By the people, for the people.
            </h4>
            <h4>
                See how that works:
            </h4>

        <Link to={"/login"}>
            <UButton>Login</UButton>
        </Link>
        
    </TopSectionContainer>
  )
}

export const Project1Content = () => {
    return (
      <div>Content1</div>
    )
  }

export const Project2Content = () => {
    return (
      <div>Content2</div>
    )
  }
  
export const Project3Content = () => {
    return (
        <div>Content3</div>
    )
}