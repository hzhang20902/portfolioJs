import React from 'react'
import styles from '../../styles/Global'
import assets from '../../assets'
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

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse, route, btnText }) => {
  return (
    <div className={`
    min-h-screen 
    ${styles.section} 
    ${reverse? styles.bgWhite : styles.bgPrimary} 
    ${banner}`}>
        <div className={`
        flex items-center 
        ${reverse? styles.boxReverseClass : styles.boxClass} 
        w-10/12 sm:w-full minmd:w-3/4`}>
            <div className={`
            ${styles.descDiv} 
            ${reverse? "fadeRightMini" : "fadeLeftMini"}
            ${reverse? styles.textRight : styles.textLeft}`}>
            <h1 className={`
            ${styles.h1Text}
            ${reverse? styles.blackText : styles.whiteText}`}>{title}</h1>
            <p className={`${styles.descriptionText}`}>{description}</p>
            {showBtn && (
              <UButton>
                <Link to={route} className="nav-link">
                  <Typography variant="h6" sx={{ flexGrow: 1, "font-weight": "bold", letterSpacing: 1 }}>
                    {btnText}
                  </Typography>
                </Link>
            </UButton>
            )}
            </div>
            <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
            <img
            src={mockupImg} 
            alt="mockup" 
            className={`
            ${reverse? "fadeRightMini" : "fadeLeftMini"}
            ${styles.sectionImg}`} />
            </div>
        </div>
    </div>
  )
}

export default SectionWrapper