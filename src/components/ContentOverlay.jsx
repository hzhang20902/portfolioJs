import React from 'react'
import { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import assets from '../assets';

import SectionWrapper from './hero/SectionWrapper';
import Features from './hero/Features';


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
       <SectionWrapper 
        title={(content)}
        description="The way independent artists work is through one simple idea: By the people; for the people."
        mockupImg={assets.absEarth}
        banner='banner'
    />
  )
}

export const LandingContent = () => {
    return (
      <Features />
      
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