import React, { useState } from 'react';
import PictureView from './PictureView.jsx';
import styles from '../App.css';

function App() {
  const pimages = [
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis1.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis2.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis3.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis4.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis5.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis6.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis7.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis8.jpg',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis9.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis10.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis11.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis12.jpg',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis13.png'
  ];

   const [images, setImages] = useState(pimages);
   const [CurrentImage, setImage] = useState(pimages[0])

  function handleClick(e) {
    console.log('clicked', e);
    setImage(e.image);
   };

    return (
      <div className={styles.GalleryContainer}>
      hello Zuumers!
      <div>
        <img className={styles.currentImage} src={CurrentImage} ></img>
      </div>
      <PictureView currentImage={CurrentImage} images={images} handleClick={handleClick}/>
      </div>
    );

}

export default App;