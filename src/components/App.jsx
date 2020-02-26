import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Menu from "./Menu";
import ListOfKegs from "./ListOfKegs";
import NewKegController from "./NewKegController";
import Employer from "./Employer";
import Error404 from "./Error404";
import {v4} from "uuid";
import Background from '../assets/images/background.jpg';


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      kegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleUpdateKeg = this.handleUpdateKeg.bind(this);

  }
  handleAddingNewKeg(newKeg)
  {
    var newKegId = v4();
    var tempKegList = Object.assign({},this.state.kegList,{
      [newKegId]:newKeg
    });
    tempKegList[newKegId].formattedWaitTime = tempKegList[newKegId].timeOpen.fromNow(true);
    this.setState({kegList: tempKegList});
  }
  handleUpdateKeg(kegId)
  {
    this.setState({selectedKeg:kegId});

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
    let tempKegList  = Object.assign({},this.state.kegList);
    Object.keys(tempKegList).forEach(kegId =>{
    tempKegList[kegId].formattedWaitTime = (tempKegList[kegId].timeOpen).fromNow(true);
  });
    this.setState({kegList:tempKegList});
  }
  componentWillUnmount()
  {
    clearInterval(this.waitTimeUpdated);
  }
 render() {
   var styleImg =
   {
     backgroundImage: 'url(' + Background + ')',
     backgroundPosition: 'fixed',
     backgroundSize: 'cover',
     backgroundRepeat: 'repeat',
     minHeight: '100vh',
     minWidth: '100%',
     border:"2px solid grey"
   };
    return (
        <div style={styleImg}>
        <Navbar/>
        <Menu/>
          <Switch>
            <Route exact path="/" render={()=><ListOfKegs OnUpdatedList = {this.state.kegList}/>} />
            <Route path="/newKeg" render={()=><NewKegController OnEventNewForm={this.handleAddingNewKeg}/>}/>
            <Route path="/Employer" render={(props)=><Employer OnUpdatedList={this.state.kegList} currentRoutePath={props.location.pathname} OnKegSelection={this.handleUpdateKeg} selectedKeg={this.state.selectedKeg}/>}/>
            <Route component = {Error404}/>
          </Switch>
      </div>
    );
  }
}
export default App;
