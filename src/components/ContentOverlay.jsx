import React from 'react'
import { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import assets from '../assets';

import SectionWrapper from './higherorder/SectionWrapper';
import Features from './higherorder/Features';
import Transfer from './higherorder/Transfer';
import AuthService from '../services/auth.service';
import { Grid } from '@mui/material';




export const HomeContent = () => {

    const currentUser = AuthService.getCurrentUser();
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
    {currentUser? (
      <>
        <SectionWrapper 
        title={(content)}
        description="It takes a village- sometimes, multiple villages. 
        The way independent artists work is through one simple idea: 
        By the people; for the people. 
        See how artists everywhere collaborate anywhere."
        showDesc2
        desc2="Scroll down to view and demo my projects."
        mockupImg={assets.absEarth}
        banner='banner'
        />
        <SectionWrapper 
          title='Webstore App'
          description="A simple yet elegant webstore with stateful management of in-cart products, dynamic UI, and Stripe checkout."
          showDesc2
          desc2="Next.js, React.js, Stripe API, Sanity.io"
          reverse
          extLink
          srcLink
          gitUrl="https://github.com/hzhang20902/ecommerceReact"
          btnText='Store Demo'
          route='https://ecommerce-react-hzhang20902.vercel.app/'
          demoVid={assets.ecomDemo}
        />
        <SectionWrapper 
          title='Minecraft Clone'
          description="A serverless, browser recreation of Minecraft that has stateful management for Cube generation and game saves to local storage."
          desc2="Three.js, React Three Fiber/Drei/Cannon"
          reverse
          extLink
          srcLink
          gitUrl="https://github.com/hzhang20902/minecraft3clone"
          btnText='App Demo'
          route='https://minecraft3clone-g8o6.vercel.app/'
          demoVid={assets.minecraft}
        />
        <SectionWrapper 
          title='NFT Market UI/UX Mobile Demo'
          description="A frontend demo of a web3.0 store for NFTs. Visit the landing page for more info."
          showDesc2
          desc2="React Native, Landing: React.js, Tailwind CSS"
          reverse
          extLink
          srcLink
          gitUrl="https://github.com/hzhang20902/reactn_nft_market"
          btnText='Landing Page'
          route='https://cold-waterfall-0983.on.fleek.co/'
          demoVid={assets.nftDemo}
        />
        <SectionWrapper 
          title='Zoom Type App'
          description="A lite-weight video chat app. Each refresh generates a new temp ID which can be used to call someone via WebRTC datastream."
          showDesc2
          desc2="React.js/Express.js/Socket.io/WebRTC"
          reverse
          extLink
          srcLink
          gitUrl="https://github.com/hzhang20902/videochatappfs"
          btnText='App Demo'
          route='https://effervescent-yeot-a07484.netlify.app/'
          demoVid={assets.vidChatDemo}
        />
        <SectionWrapper 
          title='Animal Shelter Volunteer App'
          description="CRUD app created using AGILE methodology on 4-person dev team for LaunchCode bootcamp. The app is designed for volunteers to signup and log activities with shelter animal cats and dogs; and the housekeeping tasks associated."
          showDesc2
          desc2="React.js, MUI, Java, SpringBoot, PSQL"
          reverse
          extLink
          srcLink
          gitUrl="https://github.com/hzhang20902/animalShelterApp-frontend"
          btnText='App Demo'
          route='https://liftoffanimalshelterapp.vercel.app/'
          demoVid={assets.shelterApp}
        />
        
        </>
    ) : (<SectionWrapper 
        title={(content)}
        description="It takes a village- sometimes, multiple villages. 
        The way independent artists work is through one simple idea: 
        By the people; for the people. 
        See how artists everywhere collaborate anywhere."
        showDesc2
        desc2="Login below with the default credentials to see my work:"
        mockupImg={assets.absEarth}
        showBtn
        btnText='Login'
        route='/login'
        banner='banner'
    />
    )}
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
        banner='banner03'
      />
      <Features 
        pText="Server side built with Java, SpringBoot, and PostgreSQL."
        iconUrl1={assets.javaLogo}
        iconText1="Java"
        iconUrl2={assets.springboot}
        iconText2="Spring Boot"
        iconUrl3={assets.psqlLogo}
        iconText3="PostgreSQL"
        banner='banner'
      />
      <Transfer 
        title='Explore Tech'
        showBtn
        srcLinkFront
        srcLinkBack
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
        {content.map((key) => (
          <Grid item xs={12} md={2} zeroMinWidth>
          <Features
          pText2={key.username}
          pText={`ID: ${key.id}`}
          iconUrl1="https://source.unsplash.com/random"
          iconText1={`Email: ${key.email.substring(0,3)}****`}
          showCard2
          showCard3
          banner='banner02'
          />
          </Grid>))}
        </>
    )
}