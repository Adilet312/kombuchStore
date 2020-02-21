import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Menu from "./Menu";
import ListOfKegs from "./ListOfKegs";
import backgroundPicture from "../assets/images/background.jpg";
import CreateKeg from "./CreateKeg";
import NewKegController from "./NewKegController";
import Error404 from "./Error404";


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      kegList: []
    }
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);

  }
  handleAddingNewKeg(newKeg)
  {
    var tempKegList = this.state.kegList.slice();
    tempKegList.push(newKeg);
    this.setState({kegList: tempKegList});
  }
 render(){
   var imgStyling =
   {
       backgroundImage: "url("+backgroundPicture+")",
       width: "100%",
       border: "2px solid grey",
       paddingTop: "0px"
   }
    return (
      <div style ={imgStyling}>
        <div>
        <Navbar/>
        <Menu/>
        <Body/>
          <Switch>
            <Route exact path="/" render={()=><ListOfKegs OnUpdatedList = {this.state.kegList}/>} />
            <Route path="/newKeg" render={()=><NewKegController OnEventNewForm={this.handleAddingNewKeg}/>}/>
            <Route component = {Error404}/>
          </Switch>
      </div>
    </div>
    );
  }
}

export default App;
