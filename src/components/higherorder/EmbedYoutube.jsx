import React from 'react'
import styles from '../../styles/Global';

const EmbedYoutube = ({ embedId }) => {
  return (
    // <div className='video-responsive'>
    <iframe className={styles.mobileBtn}
        width='581'
        height='320'
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    // </div>
);

}

export default EmbedYoutube