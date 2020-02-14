import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Body from "./Body";

export default function App()
{

  return (
    <div>
      <Navbar/>
      <Body/>
    </div>
  );
}
