import React from "react";
class NewKegController extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      isTrueOrFalse: false;
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
    if(isTrueOrFalse!=false)
    {
      currentConditionOfState = <CreateKeg/>
    }
    else
    {
      currentConditionOfState = <ConfirmationQuestions OnEventHendlerConfirmation = {this.handlerChangingState}/>
    }
  }
}
