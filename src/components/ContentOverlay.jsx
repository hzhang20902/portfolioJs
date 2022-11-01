import { React, useState, useEffect } from 'react';
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
      </>
    ) : (
      <>
      <SectionWrapper 
        title={(content)}
        description="My projects include webstores for merchandise, browser games, and secured apps like this one.
        Some behind the scenes work include this page locked by JWT Authentication. If you see the title loaded above, that means connection to the server has been established! Login below with the default credentials or even create your own:"
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

export const LandingContent = () => {
    return (
      <>
      <Features 
        title="Links"
        iconUrl1={assets.linkedin}
        iconText1="LinkedIn"
        linkText1={"https://linkedin.com/in/henryzthatsme"}
        iconUrl2={assets.github}
        iconText2="Github"
        linkText2={"https://github.com/hzhang20902"}
        iconUrl3={assets.instagram}
        iconText3="Instagram"
        linkText3={"https://instagram.com/figgsboson"}
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
          iconUrl1="https://source.unsplash.com/random"
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

export const AboutSection = () => {
  return (
  <>
  <SectionWrapper 
      banner="banner03"
      title="Hi! My name is Henry... "
      description="...and I'm a former professional guitarist in the Philadelphia area turned software developer! I have a lifelong passion for learning. My hobbies and passions are history, film, music, and technology!"
      mockupImg={assets.henry}
    />
    <SectionWrapper 
      title="I have a passion for helping people any way I can."
      youtubeLink="R6bBF_57KaY"
      description="I thrive on change and the new challenges as well as successes it can bring. For the last two years, I have been learning, coding, and building..."
      banner='banner'
    />
    <SectionWrapper 
      banner='banner04'
      titleBlack="...to make my dream of funding community-first music and art initiatives a reality!"
      youtubeLink="2xAy6lxBZLY"
      description="Checkout what I've been working on as a software developer:"
      showBtn
      route='/home'
      btnText='Projects'
    />
  </>
  )
}