import React from 'react'
import { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import assets from '../assets';

import SectionWrapper from './hero/SectionWrapper';
import Features from './hero/Features';
import Transfer from './hero/Transfer';
import AuthService from '../services/auth.service';




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
          description="A simple yet elegant webstore with stateful management of in-cart products, dynamic UI, and secure checkout.
         (Use '42' repeating to checkout with test card)."
          showDesc2
          desc2="Next.js, React.js, Stripe API, Sanity.io"
          reverse
          extLink
          btnText='Store Demo'
          route='https://ecommerce-react-hzhang20902.vercel.app/'
          demoVid={assets.ecomDemo}
        />
        <SectionWrapper 
          title='Minecraft Clone'
          description="A serverless, browser recreation of Minecraft that has stateful management for Cube implementation as well as saving a game to local storage. 
          Keyboard mapped with custom hooks; saving and reset implemented with custom context."
          showDesc2
          desc2="Three.js, React Three Fiber/Drei/Cannon"
          reverse
          extLink
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
          btnText='Landing Page'
          route='https://cold-waterfall-0983.on.fleek.co/'
          demoVid={assets.nftDemo}
        />
        <SectionWrapper 
          title='Animal Shelter Volunteer App'
          description="A collaborative CRUD app created using AGILE methodology. The app is designed for volunteers to signup and log activities with shelter animal cats and dogs; and the housekeeping tasks associated."
          showDesc2
          desc2="React.js, MUI, Java, SpringBoot, PSQL"
          reverse
          extLink
          btnText='App Demo'
          route='https://liftoffanimalshelterapp.vercel.app/'
          demoVid={assets.shelterApp}
        />
        <SectionWrapper 
          title='Video Chat App'
          description="A video chat app with no credentials stored or needed. Each refresh generates a new temporary ID which can be used to call someone else using the app."
          showDesc2
          desc2="React.js/Express.js/Socket.io/WebRTC"
          reverse
          extLink
          btnText='App Demo'
          route='https://effervescent-yeot-a07484.netlify.app/'
          mockupImg={assets.vidChatDemo}
        />
        </>
    ) : (<SectionWrapper 
        title={(content)}
        description="It takes a village- sometimes, multiple villages. 
        The way independent artists work is through one simple idea: 
        By the people; for the people. 
        See how artists everywhere collaborate anywhere- login below:"
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