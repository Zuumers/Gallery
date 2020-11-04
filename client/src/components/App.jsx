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
  const [CurrentImage, setImage] = useState(pimages[0])

  function handleClick(e) {
    console.log('clicked', e);
    setImage(e.image);
  };

  //  const zoom = document.querySelector("#currentImage");

  //  zoom.addEventListener("mousemove", (e) => {
  //    zoom.style.backgroundPositionX = -e.offsetX + "px";
  //    zoom.style.backgroundPositionY = -e.offsetY + "px";


  //  })
  // function zoom(e) {
  //   let ele = document.getElementById("currentImage");
  //   ele.style.display = "inline-block";
  //   let img = document.getElementById("currentImage");
  //   let posX = e.offsetX ? (e.pageX) : event.pageX - img.offsetLeft;
  //   let posY = e.offsetY ? (e.pageY) : event.pageY - img.offsetTop;


  // }

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
      <MantisInfo />
    </div>
  );

}

export default App;