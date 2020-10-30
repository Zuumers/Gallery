import React from 'react';

function PictureView ({images}) {

  return(
    <div>
      {images.map(image => (

      // <li>{image}</li>
      <img src={image} width="100" height="80"></img>
      ))}
    </div>
  )
}

export default PictureView;