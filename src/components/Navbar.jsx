import React from "react";
import backgroundPicture from "../assets/images/menuPicture.jpeg";
function Navbar()
{
  var navContainer =
  {
    width: "100%",
    padding: '0px',
    marginBottom: '16px',
    backgroundColor: '#918B90',
    border: "2px solid grey",
    paddingLeft: "-10px"
  };
  var inputSearch =
  {
    float: 'right',
    padding: '10px',
    width: '20%',
    border: '2px solid white',
    borderRadius: '20px ',
    textAlign: 'left',
    marginTop: '45px',
    marginRight: '60px',
    fontSize: '18px',
    margin: '20px'

  };
  var inputKeg =
  {
    float: 'right',
    padding: '10px',
    width: '9%',
    border: '2px solid grey',
    borderRadius: '20px ',
    textAlign: 'center',
    fontSize: '18px',
    color: "black",
    backgroundColor: 'white',
    marginRight: '30px',
    marginTop: '45px',
    margin: '20px'

  };
  var image =
  {
    width: "90px",
    marginTop: "10px",
    border: "2px solid white",
    borderRadius: "50px",
    marginLeft: "16px"
  };
  return (
     <div style={navContainer}>
     <img style = {image} src = {backgroundPicture}></img>
     <button id='tweedId' style={inputKeg}>Keg</button>
     <input type='text' id='searchId' style={inputSearch} placeholder='Search'/>
     <br/>
    </div>


  );
}
export default Navbar;
