import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Body from "./Body";
import Menu from "./Menu";
import ListOfKegs from "./ListOfKegs";

export default function App()
{

  return (
    <div>
      <Navbar/>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Body}/>
        <Route path="/pathToList" component={ListOfKegs}/>
      </Switch>
    </div>
  );
}
