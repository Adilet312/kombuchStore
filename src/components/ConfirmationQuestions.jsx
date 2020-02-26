import React from 'react';
import PropTypes from "prop-types";
function ConfirmationQuestions(props){
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
    };
    var buttonStyling =
    {
      padding: "10px",
      width: "20%",
      borderRadius: "20px",
      border: "2px solid LightBlue",
      marginLeft: "40%"
    };
    var head_H2 =
    {
      fontSize: "30px",
      color: "black",
      backgroundPosition: "center",
      paddingLeft: "27%"
    };
  return (
    <div style={stlyleList}>
      <h2 style={head_H2}>Are you member of this store?</h2>
      <button style={buttonStyling} onClick={props.OnEventHendlerConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propType =
{
  OnEventHendlerConfirmation: PropTypes.func
};
export default ConfirmationQuestions;
