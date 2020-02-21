import React from 'react';
import PropTypes from "prop-types";
function ConfirmationQuestions(props){
  return (
    <div>
      <p>Are you member of this store?</p>
      <button onClick={props.OnEventHendlerConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propType =
{
  OnEventHendlerConfirmation: PropTypes.func
}
export default ConfirmationQuestions;
