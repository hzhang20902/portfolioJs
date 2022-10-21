import React from 'react'
import { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import assets from '../assets';

import SectionWrapper from './hero/SectionWrapper';
import Features from './hero/Features';
import FeatureExt from './hero/FeatureExt';



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
    <>
       <SectionWrapper 
        title={(content)}
        description="It takes a village- sometimes, multiple villages. 
        The way independent artists work is through one simple idea: 
        By the people; for the people. 
        See how artists everywhere collaborate anywhere."
        mockupImg={assets.absEarth}
        showBtn
        btnText='Login'
        route='/login'
        banner='banner'
    />
    </>
  )
}

export const LandingContent = () => {
    return (
      <>
      <Features 
        title="Technologies"
        pText="Client side is designed with ReactJs, ThreeJs, and Tailwind CSS."
        iconUrl1={assets.react}
        iconText1="React.js"
        iconUrl2={assets.threelogo}
        iconText2="Three.js"
        iconUrl3={assets.tailwind}
        iconText3="Tailwind CSS"
      />
      <FeatureExt 
        pText="Server side built with Java, SpringBoot, and PostgreSQL."
        iconUrl1={assets.javaLogo}
        iconText1="Java"
        iconUrl2={assets.springboot}
        iconText2="Spring Boot"
        iconUrl3={assets.psqlLogo}
        iconText3="PostgreSQL"
      />
      </>
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