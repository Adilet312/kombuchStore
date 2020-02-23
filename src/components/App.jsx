import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Menu from "./Menu";
import ListOfKegs from "./ListOfKegs";
import backgroundPicture from "../assets/images/background.jpg";
import CreateKeg from "./CreateKeg";
import NewKegController from "./NewKegController";
import Employer from "./Employer";
import Moment from "moment";
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
    newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true)
    tempKegList.push(newKeg);
    this.setState({kegList: tempKegList});
  }
  componentDidMount()
  {
    this.waitTimeUpdated = setInterval(()=>
    this.updateElapsedWaitTime(),
    60000
    );
  }
  updateElapsedWaitTime()
  {
    console.log('check');
    let tempKegList  = this.state.kegList.slice();
    tempKegList.forEach((keg)=>
    keg.formattedWaitTime = (keg.timeOpen).fromNow(true)
    );
    this.setState({kegList:tempKegList})
  }
  componentWillUnmount()
  {
    clearInterval(this.waitTimeUpdated)
  }
 render(){
    return (
        <div>
        <Navbar/>
        <Menu/>
          <Switch>
            <Route exact path="/" render={()=><ListOfKegs OnUpdatedList = {this.state.kegList}/>} />
            <Route path="/newKeg" render={()=><NewKegController OnEventNewForm={this.handleAddingNewKeg}/>}/>
            <Route path="/Employer" render={(props)=><Employer OnUpdatedList={this.state.kegList} currentRoutePath={props.location.pathname}/>}/>
            <Route component = {Error404}/>
          </Switch>
      </div>
    );
  }
}

export default App;
