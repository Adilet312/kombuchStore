import React  from "react";
import PropTypes from "prop-types";
import ListOfKegs from "./ListOfKegs"
function Employer(props)
{
  return(
    <div>
      <ListOfKegs OnUpdatedList={props.OnUpdatedList} currentRoutePath={props.currentRoutePath}/>
    </div>
  );
}
Employer.propTypes =
{
  OnUpdatedList: PropTypes.array,
  currentRoutePath: PropTypes.string.isRequired
};
export default Employer;
