import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Body from "./Body";
import Menu from "./Menu";

export default function App()
{

  return (
    <div>
      <Navbar/>
      <Menu/>
      <Body/>
    </div>
  );
}
