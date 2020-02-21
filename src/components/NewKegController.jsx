import React from "react";
import ConfirmationQuestions from "./ConfirmationQuestions";
import CreateKeg from "./CreateKeg";
import PropTypes from "prop-types";
class NewKegController extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      isTrueOrFalse: false
    }
    this.handlerChangingState = this.handlerChangingState.bind(this);
  }
  handlerChangingState()
  {
    this.setState(isTrueOrFalse: true);
  }
  render()
  {
    var currentConditionOfState = null;
    if(this.state.isTrueOrFalse)
    {
      currentConditionOfState = <CreateKeg OnEventNewForm ={this.props.OnEventNewForm}/>;
    }
    else
    {
      currentConditionOfState = <ConfirmationQuestions OnEventHendlerConfirmation = {this.handlerChangingState}/>
    }
    return(
      <div>
      {currentConditionOfState}
      </div>
    );
  }
}
NewKegController.propTypes =
{
  OnEventNewForm: PropTypes.func
}
export default NewKegController;
