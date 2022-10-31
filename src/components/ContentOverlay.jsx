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
    ) : (<SectionWrapper 
        title={(content)}
        description="It takes a village- sometimes, multiple villages. 
        The way independent artists work is through one simple idea: 
        By the people; for the people. 
        See how artists everywhere collaborate anywhere. Login below with the default credentials to see my work:"
        mockupImg={assets.absEarth}
        showBtn
        btnText='Login'
        route='/login'
        banner='banner'
        state={true}
    />
    )}
    </>
  )
}

export const LandingContent = () => {
    return (
      <>
      <Features 
        title="Tech Stack"
        iconUrl1={assets.react}
        iconText1="React.js"
        iconUrl2={assets.threelogo}
        iconText2="Three.js"
        iconUrl3={assets.tailwind}
        iconText3="Tailwind CSS"
        banner='banner03'
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
      <Transfer 
        title='Explore Tech'
        showBtn
        srcLinkFront
        srcLinkBack
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
      reverse
      title="So many great artists bring joy and empathy to humanity... "
      description="...yet so few are heard or seen because even fewer decide it is a worthwhile investment. I am one of the few who decided it is."
      showDesc2
      desc2="Who am I?"
      mockupImg={assets.henry}
    />
    <SectionWrapper 
      title="My name is Henry Zhang aka. Figgs"
      description="I am a classically trained violinist turned professional Jazz/Rnb guitarist turned Software Developer.
      I thrive on change and the new challenges as well as successes it can bring. I have a passion for helping humanity through any way I can."
      youtubeLink='rulQQNQryCU'
      reverse
      showDesc2
      desc2="Before, I could only do that through
      the emotional, the spiritual, the aesthetic; music and the joys it can bring to people. 
      My other lifelong passion for technology and science was always in the background, manifesting through hobby and curiosity.
      I had never thought of myself as a serious 'engineer' of any kind besides an audio one."
    />
    <SectionWrapper 
      reverse
      youtubeLink='2xAy6lxBZLY'
      description='I have had an extensive career as a professional guitarist in Philadelphia and around the US East Coast from 2013-2022.
      During that decade, I wore many hats: independent artist, bandleader, music director, audio engineer, mix/master engineer, producer, executive producer, corporate band guitarist, arranger/instrumentalist, promoter, videographer--
      and subsequently found myself overextended and a bit disillusioned with the musician lifestyle/lifecycle.'
      showDesc2
      desc2="I saw how contradictory the industry of music was relative to the joy that music and the musicians who make it bring. It treated its workers, artists, and visionaries as nothing more than a product to market, sell, and profit from.
      Far be it from me to call myself a visionary. However I have certainly been lucky enough to work with and make music with more than a few who can be called such. And to see them chewed up, swallowed, and spit out by this industry in such an uncaring way- it changed my
      outlook on what I should be doing with my life."
    />
    <SectionWrapper 
      banner='banner04'
      youtubeLink='R6bBF_57KaY'
      description="For the last two years, I have been learning, coding, and building to improve my skills as a software engineer. Along with my deep-dive into securities analytics, I envision this as the best way to help people and artists around the world: 
      AI-powered algo-trading platforms to generate passive yet substantial funding for community-first musical and artistic initiatives."
      showDesc2
      desc2='If this is something that interests you, please reach out and send me a message!'
      showBtn
      route='/contact'
      btnText='Contact'
    />
    
  </>
  )
}