import React from "react";
import Keg from "./Keg";

function ListOfKegs()
{
  var stlyleList =

    {
      padding: "10px",
      positive: "relative",
      display: "inline-block",
      border: "2px solid grey"
    }
    var list =
    [
      {
        name: "Amsterdam",
        brand: "Holland beer",
        price: 3,
        alcoholContent: "20%"
      },
      {
        name: "Carona",
        brand: "Mexican beer",
        price: 2,
        alcoholContent: "10%"
      },
      {
        name: "Holsten",
        brand: "German beer",
        price: 5,
        alcoholContent: "30%"
      }
  ];

  return (
    <div style={stlyleList}>
      {list.map((keg,idNumber) =>
        <Keg
          name = {keg.name}
          brand = {keg.brand}
          price = {keg.price}
          alcoholContent = {keg.alcoholContent}
          key = {idNumber}/>

      )}
    </div>
  );
}
export default ListOfKegs;
