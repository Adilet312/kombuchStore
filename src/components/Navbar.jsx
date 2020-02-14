import React from "react";
function Navbar()
{
  var navContainer =
  {
    padding: '40px',
    marginBottom: '15px',
    border: '2px',
    backgroundColor: '#00ACEE'
  };
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
  var image =
  {
    width: "90px",
    marginTop: "-10px",
    border: "2px solid LightBlue",
    borderRadius: "50px",
    marginLeft: "16px"
  }
  return (
     <div style={navContainer}>
     <img style = {image} src = "https://bluelti.com/wp-content/uploads/2018/06//group-1824145_640.png"></img>
     <button id='tweedId' style={inputKeg}>Keg</button>
     <input type='text' id='searchId' style={inputSearch} placeholder='Search'/>
     <br/>
    </div>


  );
}
export default Navbar;
