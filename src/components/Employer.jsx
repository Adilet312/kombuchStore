import React  from "react";
import PropTypes from "prop-types";
import ListOfKegs from "./ListOfKegs";
import KegDetail from "./KegDetail";
function Employer(props)
{
  let optionalSelectedKeg = null;
  if(props.selectedKeg !=null)
  {
    optionalSelectedKeg = <KegDetail selectedKeg = {props.selectedKeg}/>
  }
  return(
    <div>
      {optionalSelectedKeg}
      <ListOfKegs
        OnUpdatedList={props.OnUpdatedList}
        currentRoutePath={props.currentRoutePath}
        OnKegSelection={props.OnKegSelection}/>
    </div>
  );
}
Employer.propTypes =
{
  OnUpdatedList: PropTypes.array,
  currentRoutePath: PropTypes.string.isRequired,
  OnKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.object
};
export default Employer;
