import React from 'react';
import PropTypes from "prop-types";
function KegDetail(props){

var stlyleList =

  {
    marginLeft: "3%",
    marginTop: "6px",
    width: "40%",
    padding: "10px",
    positive: "relative",
    display: "inline-block",
    border: "2px solid white",
    backgroundColor: "#918B90",
    borderRadius: "20px"
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
  width: "20%",
  borderRadius: "20px",
  border: "2px solid LightBlue",
  marginLeft: "20px"
}
  return (
    <div style={stlyleList}>
      <hr/>
        <ul>
          <li>{props.selectedKeg.name}</li>
          <li>{props.selectedKeg.brand}</li>
          <li>{props.selectedKeg.price}</li>
          <li>{props.selectedKeg.alcoholContent}</li>
          <li>{props.selectedKeg.formattedWaitTime} ago posted</li>
        </ul>
        <button style = {buttonStyling}>Remove</button>
        <button style = {buttonStyling}>Update</button>
        <img style={imgStyling} src = {props.selectedKeg.img}/>
      <hr/>
  </div>
  );
}
KegDetail.propTypes =
{
  selectedKeg: PropTypes.object
}
export default KegDetail;
