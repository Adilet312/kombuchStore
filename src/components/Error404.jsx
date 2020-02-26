import React from 'react';
import BackgroundPicture from "../assets/images/symbol.png";

function Error404(props){
  var errorStyle =
  {
    width: "40%",
    height: "300px",
    borderRadius: "40px",
    border:"2px solid black",
    marginLeft: "33%",
    marginTop: "10%",
    backgroundImage: 'url(' + BackgroundPicture + ')',

  }
  var head_H2 =
  {
    fontSize: "30px",
    color: "black",
    backgroundPosition: "center",
    paddingLeft: "27%"
  }
  return (
    <div style={errorStyle}>
      <h2 style={head_H2}>The page " {props.location.pathname} " does not exist!</h2>
    </div>
  );
}

export default Error404;
