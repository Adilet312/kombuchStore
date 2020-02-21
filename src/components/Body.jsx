import React from "react";
import Background from '../assets/images/background.jpg';
function Body()
{
  var styleImg =
  {
    backgroundImage: 'url(' + Background + ')',
    backgroundPosition: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    minHeight: '100vh',
    minWidth: '100%',
    border:"2px solid grey"
  };
  return (
    <div style={styleImg} >

    </div>
  );
}
export default Body;
