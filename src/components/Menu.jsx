import React from "react";
import { Link } from 'react-router-dom';

export default function Menu()
{
  var styleMenu =
  {
    width: "100%",
    height:"24px",
    backgroundColor: "#918B90",
    marginTop: "-15px",
    border: "2px solid grey",


  }
  var listLinks =
  {
    float: 'left',
    fontSize: '20px',
    color: 'white',
    padding: '2px',
    marginRight: "90px"
  }
  return (
    <div style ={styleMenu}>
      <Link to="/" style = {listLinks}>Home</Link>
      <Link to="/" style = {listLinks}>About</Link>
      <Link to="/newKeg" style = {listLinks}>Add newKeg</Link>
      <Link to="/" style = {listLinks}>Kegs</Link>

    </div>
  );
}
