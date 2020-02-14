import React from "react";
import { Link } from 'react-router-dom';
function Navbar()
{
  var navContainer =
  {
    padding: '40px',
    marginBottom: '15px',
    border: '2px',
    backgroundColor: '#00ACEE'
  };
  var listLinks =
  {
    float: 'left',
    fontSize: '20px',
    border: '2px solid white',
    color: 'white',
    padding: '9px',
    marginRight:'-1px',

  }
  var inputSearch =
  {
    float: 'right',
    padding: '10px',
    width: '20%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px',
    outline: 'none'
  }
  var inputKeg =
  {
    float: 'right',
    padding: '10px',
    width: '9%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'center',
    fontSize: '18px',
    color: "white",
    backgroundColor: '#00ACEE',
    outline: 'none'
  }
  return (
     <div style={navContainer}>
     <Link to="/" style = {listLinks}>Home</Link>
     <Link to="/" style = {listLinks}>About</Link>
     <Link to="/pathToForm" style = {listLinks}>Add newKeg</Link>
     <button id='tweedId' style={inputKeg}>Keg</button>
     <input type='text' id='searchId' style={inputSearch} placeholder='Search'/>
     <br/>
    </div>


  );
}
export default Navbar;
