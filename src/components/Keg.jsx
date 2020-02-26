import React from "react";
import PropTypes from "prop-types";
import Moment from 'moment';

function Keg(props)
{
    var styling =
  {
     //   display: "block",
     border: "2px solid #C3C5C7",
     padding: "10px",
     paddingBottom: "30px"
  }

  var imgStyling =
  {
      width: "190px",
      padding: "10px",
      float: "right",
      marginTop: "-113px"
  }

  var buttonStyling =
  {
    padding: "10px",
    width: "30%",
    borderRadius: "20px",
    border: "2px solid LightBlue",
    marginLeft: "20px"
  }
  const kegInfo =
  <div>
    <ul>
      <li>{props.name}</li>
      <li>{props.brand}</li>
      <li>{props.price}</li>
      <li>{props.alcoholContent}</li>
    </ul>
    <button style = {buttonStyling}>Add</button>
    <img style={imgStyling} src = {props.img}/>
    <hr/>
  </div>;
  if(props.currentRoutePath==="/Employer")
  {
    return(
      <div onClick={() => {props.OnKegSelection(props.kegId);}}>
        {kegInfo}
      </div>
    );
  }
  else
  {
    return (
      <div>
        {kegInfo}
      </div>
    );
  }

}

Keg.propTypes =
{
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  img:PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRoutePath: PropTypes.string,
  OnKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired

};
export default Keg;
