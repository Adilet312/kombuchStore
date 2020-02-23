import React from 'react';
import backgroundPicture from "../assets/images/symbol.png";

function Error404(props){
  var errorStyle =
  {
    width: "500px",
    height: "300px",
    borderRadius: "40px",
    border:"2px solid red",
    marginLeft: "33%",
    marginTop: "10%"

  }
  return (
    <div style={errorStyle}>
      <h2>The page {props.location.pathname} does not exist!</h2>
    </div>
  );
}

export default Error404;
