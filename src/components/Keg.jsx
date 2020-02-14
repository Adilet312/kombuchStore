import React from "react";
import PropTypes from "prop-types";

function Keg(props)
{
  return (
    <div>
      <ul>
        <li>{props.name}</li>
        <li>{props.brand}</li>
        <li>{props.price}</li>
        <li>{props.alcoholContent}</li>
      </ul>
    </div>
  );
}
Keg.propTypes =
{
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.string
};
export default Keg;
