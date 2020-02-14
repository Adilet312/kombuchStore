import React from "react";
import Keg from "./Keg";

function ListOfKegs()
{
  var stlyleList =

    {
      marginLeft: "500px",
      marginTop: "6px",
      width: "40%",
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
        price: "3$",
        alcoholContent: "20%",
        img: "https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
      },
      {
        name: "Carona",
        brand: "Mexican beer",
        price: "2$",
        alcoholContent: "10%",
        img: "https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
      },
      {
        name: "Holsten",
        brand: "German beer",
        price: "5$",
        alcoholContent: "30%",
        img: "https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
      },
      {
        name: "Holsten",
        brand: "German beer",
        price: "5$",
        alcoholContent: "30%",
        img:"https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
      },
      {
        name: "Holsten",
        brand: "German beer",
        price: "5$",
        alcoholContent: "30%",
        img: "https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
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
          img = {keg.img}
          key = {idNumber}/>

      )}
    </div>
  );
}
export default ListOfKegs;
