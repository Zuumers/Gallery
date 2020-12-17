import React, { useState } from 'react';
import PictureView from './PictureView.jsx';
import MantisInfo from './MantisInfo.jsx';
import MantisSpec2 from './MantisSpec2.jsx';
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
  const [ModelSpec, setSpec] = useState({models:"n/a", colors:"n/a", shipMethod: "n/a"});
  const [isAvailable, setAvailable] = useState(true);
  const [idx, setIdx] = useState(0)

  function handleClick(e) {
    console.log('clicked', e.image);
    setImage(e.image);
  };

  function handleSubmit(info) {
    console.log(ModelSpec)
    setSpec(info)

  };

  function NextImage() {
    // console.log('clicked next', CurrentImage);
    if (idx === pimages.length-1){
      setIdx(0)
      setImage(images[idx])
    } else {
      setIdx(idx => idx +1);
      setImage(images[idx])
    }
  }

  function PrevImage() {
    // console.log('clicked prev', CurrentImage);
    if (idx === 0){
      setIdx(pimages.length-1)
      setImage(images[idx])
    } else {
      setIdx(idx => idx -1);
      setImage(images[idx])
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.GalleryContainer}>
        hello Zuumers!
       <div className={styles.mainImage}>
          <button className={styles.buttonL} onClick={PrevImage}>L</button>
           <img className={styles.currentImage} id="currentImage" src={CurrentImage} ></img>
          <button className={styles.buttonR} onClick={NextImage}>R</button>
        </div>
        <PictureView currentImage={CurrentImage} images={images} handleClick={handleClick} />
      </div>
      <MantisInfo handleSubmit={handleSubmit} isAvailable={isAvailable} />
      <MantisSpec2/>
    </div>
  );

}

export default App;