import React from 'react'
import styles from '../../styles/Global'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { MainButton } from './StyledComp'

const SectionWrapper = ({ title, description, srcLink, gitUrl, showDesc2, desc2, showDesc3, desc3, showBtn, extLink, mockupImg, banner, reverse, route, btnText, demoVid, state }) => {
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
            
            {showBtn && (
              <Link to={route} className="nav-link" state={state}>
                <MainButton>
                  <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}>
                    {btnText}
                  </Typography>
                </MainButton>
               </Link>
            )}
            {extLink && (
              <a target="_blank" rel='noreferrer' href={route} className='nav-link'>
                <MainButton>
                  <Typography sx={{ "font-weight": "bold"}}>
                    {btnText}
                  </Typography>
                </MainButton>
              </a>
            )}
            {srcLink && (<a target="_blank" rel='noreferrer' href={gitUrl} className='nav-link'>
            <Typography color={'black'}>[Source Code]</Typography></a>)}
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