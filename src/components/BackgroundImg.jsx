import Background from '../assets/images/background.jpg';
import React from 'react';

function BackgroundImg(){
  var style = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
  };
  return(
    <div>
      <img style={style} src={Background}/>
    </div>
  );
}

export default BackgroundImg;
