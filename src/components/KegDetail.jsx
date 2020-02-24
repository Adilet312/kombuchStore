import React from 'react';
import PropTypes from "prop-types";
function KegDetail(props){
  var buttonStyling =
  {
    padding: "10px",
    width: "30%",
    borderRadius: "20px",
    border: "2px solid LightBlue",
    marginLeft: "20px"
  }
  return (
    <div>
      <hr/>
        <ul>
          <li>{props.selectedKeg.name}</li>
          <li>{props.selectedKeg.brand}</li>
          <li>{props.selectedKeg.price}</li>
          <li>{props.selectedKeg.alcoholContent}</li>
        </ul>
        <button style = {buttonStyling}>Remove</button>
      <hr/>
  </div>
  );
}
KegDetail.propTypes =
{
  selectedKeg: PropTypes.object
}
export default KegDetail;
