import React from "react";
import backgroundPicture from "../assets/images/background.jpg";
import { Switch, Route } from 'react-router-dom';
import ListOfKegs from "./ListOfKegs";
import CreateKeg from "./CreateKeg";
function Body()
{
  var imgStyling =
  {
      width: "100%",
      border: "2px solid grey",
      paddingTop: "0px"
  }
  return (
    <div>
      <img style = {imgStyling} src = {backgroundPicture}/>
    </div>
  );
}

export default Body;
