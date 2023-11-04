import { React, useState, useEffect } from 'react';
import UserService from '../services/user.service';
import assets from '../assets';

import SectionWrapper from './higherorder/SectionWrapper';
import Features from './higherorder/Features';
import Transfer from './higherorder/Transfer';
import AuthService from '../services/auth.service';
import { Grid, Typography } from '@mui/material';

export const LandingContent = () => {
    return (
      <>
      <Features 
        className='linkmobile'
        title="Links"
        iconUrl1={assets.linkedin}
        iconText1="LinkedIn"
        linkText1={"https://linkedin.com/in/henryz19151"}
        iconUrl2={assets.github}
        iconText2="Github"
        linkText2={"https://github.com/hzhang20902"}
        iconUrl3={assets.gmail}
        iconText3="Gmail"
        linkText3={"/contact"}
        banner='banner02'
      />
      <Transfer 
        title='Source Code For This Site'
        srcLinkFront
        srcLinkBack
        srcLinkExp
        image={assets.screens}
      />
      </>
    )
  }

export const AboutSection = () => {
  return (
    <>
  <SectionWrapper 
      banner="banner03"
      title="My name is Henry... "
      description="...and I have a lifelong passion for learning. My hobbies and passions are history, film, music, and technology! 
      This page has some content that I enjoy, including topics about mental health, history, and my own music endeavors as an independent artist."
      youtubeLink="jtIZZs-GAOA"
      showDesc2
      desc2={(
      <a target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=jtIZZs-GAOA"><Typography fontSize={12} color='black'>(Mobile View: John Oliver pontificating on mental health advocacy)</Typography></a>
      )}
    />
    <SectionWrapper 
      title="I have a passion for helping people any way I can."
      youtubeLink="0faCad2kKeg"
      showDesc2
      desc2={(
      <a target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=0faCad2kKeg"><Typography fontSize={12} color='black'>(Mobile View: The fascinating history of how radio and binary led to wifi and cell phones)</Typography></a>
      )}
      description="I thrive on change and the new challenges as well as successes it can bring. Accomplishing great things with great people is the underlying theme of my career and I value the insights of 
      my colleagues to be tantamount to success. For the last two years, I have been learning, coding, and building..."
      banner='banner'
    />
    <SectionWrapper 
      banner='banner04'
      titleBlack="...to invest in community-first music and artistic initiatives!"
      youtubeLink="rulQQNQryCU"
      description="Check out what I've been working on as a software developer:"
      showBtn
      showDesc2
      desc2={(
      <a target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=rulQQNQryCU"><Typography fontSize={12} color='#fff'>(Mobile View: My arrangement of Kendrick Lamar's "United in Grief")</Typography></a>
      )}
      route='/projects'
      btnText='Projects'
    />
  </>
  )
}

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
        description="If you're seeing this, that means you've successfully logged in!"
        showDesc2
        desc2="Scroll down to view and demo some of my projects."
        mockupImg={assets.absEarth}
        banner='banner'
        />
        <SectionWrapper 
          title='Client Website'
          description="An SPA for promotion, info, and contacting client for their small business."
          showDesc2
          desc2="Vite, React.js, MUI, TypeScript, Express.js"
          reverse
          extLink
          srcLink
          gitUrl="https://github.com/hzhang20902/jkeim_website_vite"
          btnText='Page Demo'
          route='https://jkeim-website-vite.vercel.app/'
          demoVid={assets.jkeimsite}
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
          btnText='Game Demo'
          route='https://minecraft3clone-g8o6.vercel.app/'
          demoVid={assets.minecraft}
        />
        <SectionWrapper 
          title='Real Estate Marketplace'
          description="A real estate rent/buy marketplace populated with stock data from RapidAPI. Each search filter query is dynamically generated. All sample data is destructured into individual property pages."
          showDesc2
          desc2="Next.js, React.js, Chakra-UI, RapidAPI"
          reverse
          extLink
          srcLink
          gitUrl="https://github.com/hzhang20902/realestateNextjs"
          btnText='App Demo'
          route='https://nextrealtymarket.vercel.app/'
          demoVid={assets.realestate}
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
          btnText='Chat Demo'
          route='https://effervescent-yeot-a07484.netlify.app/'
          demoVid={assets.vidChatDemo}
        />
      </>
    ) : (
      <>
      <SectionWrapper 
        title={(content)}
        description="My projects include webstores for merchandise, browser games, and a real estate marketplace.
        Some behind the scenes work include this page locked by JWT Authentication. If you see the title loaded above, 
        connection to the Java/SpringBoot server has been established! To view my work, LOGIN below with the default credentials or create your own:"
        mockupImg={assets.absEarth}
        showBtn
        btnText='Login'
        route='/login'
        banner='banner03'
        state={true}
    />
    <Features 
        title="UI/UX Build"
        iconUrl1={assets.react}
        iconText1="React.js"
        iconUrl2={assets.threelogo}
        iconText2="Three.js"
        iconUrl3={assets.tailwind}
        iconText3="Tailwind CSS"
        banner='banner'
      />
      <Features 
        title="API"
        iconUrl1={assets.express}
        iconText1="Express.js"
        iconUrl2={assets.springboot}
        iconText2="Spring Boot"
        showCard3
        banner='banner03'
      />
      <Features 
        title="Backend"
        iconUrl1={assets.javaLogo}
        iconText1="Java"
        iconUrl2={assets.springboot}
        iconText2="Spring Boot"
        iconUrl3={assets.psqlLogo}
        iconText3="PostgreSQL"
        banner='banner'
      />
      </>
    )}
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
         {content.map((key) => (
          <Grid item xs={6} md={2} zeroMinWidth>
          <Features
          pText2={key.username}
          pText={`ID: ${key.id}`}
          iconUrl1="https://source.unsplash.com/random/?city,night"
          iconText1={`Email: ${key.email}`}
          showCard2
          showCard3
          banner='banner02'
          />
          </Grid>))}
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
          <Grid item xs={6} md={2} zeroMinWidth>
          <Features
          pText2={key.username}
          pText={`ID: ${key.id}`}
          iconUrl1="https://source.unsplash.com/random/?city,night"
          iconText1={`Email: ${key.email.substring(0,3)}****`}
          showCard2
          showCard3
          banner='banner02'
          />
          </Grid>))}
        </>
    )
}