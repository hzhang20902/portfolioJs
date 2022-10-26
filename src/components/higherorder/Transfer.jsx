import React from 'react'
import styles from '../../styles/Global'
import assets from '../../assets'
import { Link } from 'react-router-dom'
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
    border: 2px solid rgba(13, 78, 217, 0.94);
}
`;

const Transfer = ({ srcLinkFront, srcLinkBack, showBtn, title }) => {
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
        {showBtn && (
          <Link to={"/home"}>
          <UButton>
            Enter
          </UButton>
        </Link>)}
        </div>
        <div className={styles.flexCenter}>
          <img 
            src={assets.screens}
            alt='download img'
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Transfer