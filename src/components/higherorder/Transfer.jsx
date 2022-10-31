import React from 'react'
import styles from '../../styles/Global'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { MainButton } from './StyledComp'

const Transfer = ({ image, srcLinkFront, srcLinkBack, srcLinkExp, showBtn, title }) => {
  return (
    <div className={`
    ${styles.section}
    ${styles.bgWhite}`}>
      <div className={`
      ${styles.subSection}
      flex-col
      text-center`}>
        <div>
          <h1 className={`
          ${styles.h1Text}
          ${styles.blackText}`}>{title}</h1>
          {srcLinkFront && (<a target="_blank" rel='noreferrer' href="https://github.com/hzhang20902/portfolioJs" className='nav-link'>Client Source Code</a>)}
          {srcLinkBack && (<a target="_blank" rel='noreferrer' href="https://github.com/hzhang20902/jwtSetup" className='nav-link'>Server Source Code</a>)}
          {srcLinkExp && (<a target="_blank" rel='noreferrer' href="https://github.com/hzhang20902/contactformapi" className='nav-link'>Express API Source Code</a>)}
        {showBtn && (
          <Link to={"/home"} className='nav-link'>
            <MainButton className={styles.btnPrimary}>          
              <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}>
                Enter
              </Typography>
            </MainButton>
          </Link>)}
        </div>
        <div className={styles.flexCenter}>
          <img 
            src={image}
            alt='download img'
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Transfer