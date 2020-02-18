import React from 'react';
import { Link } from 'react-router-dom';
import backgroundPicture from "../assets/images/symbol.png";

function Error404(){
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
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

export default Error404;
