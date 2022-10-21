import React from 'react'
import styles from '../../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img 
      src={iconUrl}
      alt='icon'
      className={styles.featureImg}
    />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = ({ 
  pText, 
  title, 
  iconUrl1, 
  iconText1, 
  showCard2,
  iconUrl2, 
  iconText2, 
  showCard3,
  iconUrl3, 
  iconText3 }) => {

  return (
    <div className={`
    ${styles.section}
    ${styles.bgPrimary}
    banner03`}>
    
      <div className={`
      ${styles.subSection}
      flex-col
      text-center`}>
        <div>
          <h1 className={`
          ${styles.h1Text}
          ${styles.whiteText}`}>{title}</h1>
          <p className={`
          ${styles.pText}
          ${styles.whiteText}`}>
          {pText}</p>
        </div>
        
        <div className={styles.flexWrap}>
        
          <FeatureCard 
            iconUrl={iconUrl1}
            iconText={iconText1}
          />
          {!showCard2 && (<FeatureCard 
            iconUrl={iconUrl2}
            iconText={iconText2}
          />)}
          {!showCard3 && (<FeatureCard 
            iconUrl={iconUrl3}
            iconText={iconText3}
          />)}

        </div>
        

      </div>
    
      
    </div>
  )
}

export default Features