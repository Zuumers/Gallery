import React from 'react';
import styles from '../PictureView.css';

function PictureView ({images, handleClick, currentImage}) {

  // console.log('hello',CurrentImage)
  return(

    <div className={styles.thumbnailContainer}>

      {images.map(image => (

      // <li>{image}</li>
      <img onClick={() => handleClick({image})} className={image === currentImage ? styles.imagesBorder : styles.images} src={image} width="100" height="80"></img>

      ))}
    </div>
  )
}

export default PictureView;