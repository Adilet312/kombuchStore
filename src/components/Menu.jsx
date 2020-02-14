import React from "react";
import { Link } from 'react-router-dom';

export default function Menu()
{
  var styleMenu =
  {
    width: "100%",
    padding:"interval",
    height:"23px",
    backgroundColor: "#00ACEE",
    marginTop: "-12px"

  }
  var listLinks =
  {
    fontSize: '18px',
    color: 'white',
    padding: '2px',
    marginRight: "60px"
  }
  return (
    <div style ={styleMenu}>
      <Link to="/" style = {listLinks}>Home</Link>
      <Link to="/" style = {listLinks}>About</Link>
      <Link to="/" style = {listLinks}>Add newKeg</Link>

        <Link to="/pathToList" style = {listLinks}>Kegs</Link>
        <Link to="/" style = {listLinks}>About</Link>
        <Link to="/" style = {listLinks}>Add newKeg</Link>

          <Link to="/pathToList" style = {listLinks}>Kegs</Link>
          <Link to="/" style = {listLinks}>About</Link>
          <Link to="/" style = {listLinks}>Add newKeg</Link>
    </div>
  );
}
