import React, { useState } from 'react';

function App() {
  cosnt images = [
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis1.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis2.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis3.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis4.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis5.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis6.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis7.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis8.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis9.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis10.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis11.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis12.png',
    'https://zuumers.s3-us-west-1.amazonaws.com/pictures/mantis13.png'

  ]
   const [images, setImages] = useState(images)

    return (
      <div>
      hello Zuumers!
      </div>
    );

}

export default App;