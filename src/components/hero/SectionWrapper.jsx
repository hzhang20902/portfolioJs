import React from 'react'
import styles from '../../styles/Global'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import styled from 'styled-components'

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
    color: black;
    border: 2px solid rgba(13, 78, 217, 0.94);
}

`

const SectionWrapper = ({ title, description, srcLink, gitUrl, showDesc2, desc2, showDesc3, desc3, showBtn, extLink, mockupImg, banner, reverse, route, btnText, demoVid }) => {
  return (
    <div className={`
    min-h-screen 
    ${styles.section} 
    ${reverse? styles.bgWhite : styles.bgPrimary} 
    ${banner}`}>
        <div className={`
        flex items-center 
        ${reverse? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}>
            <div className={`
            ${styles.descDiv} 
            ${reverse? "fadeRightMini" : "fadeLeftMini"}
            ${reverse? styles.textRight : styles.textLeft}`}>
            <h1 className={`
            ${styles.h1Text}
            ${reverse? styles.blackText : styles.whiteText}`}>{title}</h1>
            <p className={`${styles.descriptionText}`}>{description}</p>
            {showDesc2 && (<p className={`${styles.descriptionText}`}>{desc2}</p>)}
            {showDesc3 && (<p className={`${styles.descriptionText}`}>{desc3}</p>)}
            {srcLink && (<a target="_blank" rel='noreferrer' href={gitUrl} className='nav-link'>Source Code</a>)}
            {showBtn && (
              <Link to={route} className="nav-link" state={true}>
                <UButton>
                  <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}>
                    {btnText}
                  </Typography>
                </UButton>
               </Link>
            )}
            {extLink && (
              <a target="_blank" rel='noreferrer' href={route} className='nav-link'>
                <UButton className={styles.btnPrimary}>
                  <Typography sx={{ "font-weight": "bold"}}>
                    {btnText}
                  </Typography>
                </UButton>
              </a>
            )}
            </div>
            <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
              {mockupImg && (<img
                  src={mockupImg} 
                  alt="mockup" 
                  className={`
                  ${reverse? "fadeRightMini" : "fadeLeftMini"}
                  ${styles.sectionImg}`} />)}
              {demoVid && (<video 
                  src={demoVid}
                  alt="video"
                  className={`
                  ${reverse? "fadeRightMini" : "fadeLeftMini"}
                  ${styles.sectionImg}`}
                  loop
                  muted
                  autoPlay />)}
            </div>
        </div>
    </div>
  )
}

export default SectionWrapper