import React, { useState } from 'react';
import PictureView from './PictureView.jsx';
import MantisInfo from './MantisInfo.jsx';
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
  const [CurrentImage, setImage] = useState(pimages[0]);
  const [ModelSpec, setSpec] = useState({models:"n/a", colors:"n/a"});
  const [isAvaiable, setAvailable] = useState(true);

  function handleClick(e) {
    console.log('clicked', e);
    setImage(e.image);
  };

  function handleSubmit(info) {
    console.log(info)
    setSpec(info)

  };


  return (
    <div className={styles.container}>
      <div className={styles.GalleryContainer}>
        hello Zuumers!
       <div>
          <img className={styles.currentImage} id="currentImage" src={CurrentImage} ></img>
          {/* <img className={styles.currentImage2} id="currentImage2" src={CurrentImage} width="200%" height="200%"></img> */}
        </div>
        <PictureView currentImage={CurrentImage} images={images} handleClick={handleClick} />
      </div>
      <MantisInfo handleSubmit={handleSubmit} isAvaiable={isAvaiable} />
    </div>
  );

}

export default App;