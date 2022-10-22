import React from 'react'
import { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import assets from '../assets';

import SectionWrapper from './hero/SectionWrapper';
import Features from './hero/Features';
import Transfer from './hero/Transfer';




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
        title="Tech Stacks"
        pText="Client side designed with ReactJs, ThreeJs, and Tailwind CSS."
        iconUrl1={assets.react}
        iconText1="React.js"
        iconUrl2={assets.threelogo}
        iconText2="Three.js"
        iconUrl3={assets.tailwind}
        iconText3="Tailwind CSS"
      />
      <Features 
        title={null}
        pText="Server side built with Java, SpringBoot, and PostgreSQL."
        iconUrl1={assets.javaLogo}
        iconText1="Java"
        iconUrl2={assets.springboot}
        iconText2="Spring Boot"
        iconUrl3={assets.psqlLogo}
        iconText3="PostgreSQL"
      />
      <Transfer 
        title='Explore Tech'
        reverseBtn
      />
      </>
    )
  }

export const AuthContent = () => {
    return (
      <>
        <SectionWrapper 
          title='Project Title'
          description="Project Description and technologies"
          reverse
          showBtn
          btnText='Ext Link'
          route='/'
          demoVid={assets.lake}
        />
        <SectionWrapper 
          title='Project Title'
          description="Project Description and technologies"
          reverse
          showBtn
          btnText='Ext Link'
          route='/'
          demoVid={assets.lake}
        />
        <SectionWrapper 
          title='Project Title'
          description="Project Description and technologies"
          reverse
          showBtn
          btnText='Ext Link'
          route='/'
          demoVid={assets.lake}
        />
        <SectionWrapper 
          title='Project Title'
          description="Project Description and technologies"
          reverse
          showBtn
          btnText='Ext Link'
          route='/'
          demoVid={assets.lake}
        />
        <SectionWrapper 
          title='Project Title'
          description="Project Description and technologies"
          reverse
          showBtn
          btnText='Ext Link'
          route='/'
          demoVid={assets.lake}
        />
      </>
    )
  }
  
export const AdminAccess = () => {
  const [content, setContent]  = useState([]);

    useEffect(() => {
        UserService.getAdminBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content = 
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
                setContent(_content);
            }
        );
    }, []);

    return (
        <> 
        {content.slice(content.length-4, content.length).map((key) => (
          <Features
          title={key.id}
          pText={key.username} 
          iconUrl1="https://source.unsplash.com/random"
          iconText1={key.email}
          showCard2
          showCard3
          />))}
        </>
    )
}

export const ModBoard = () => {
  const [content, setContent]  = useState([]);

  useEffect(() => {
      UserService.getModeratorBoard().then(
          (response) => {
              setContent(response.data);
          },
          (error) => {
              const _content = 
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();
              setContent(_content);
          }
      );
  }, []);

    return (
        <> 
        {content.slice(content.length-4, content.length).map((key) => (
          <Features
          title={key.id}
          pText={key.username} 
          iconUrl1="https://source.unsplash.com/random"
          iconText1="ADMIN ONLY"
          showCard2
          showCard3
          />))}
        </>
    )
}