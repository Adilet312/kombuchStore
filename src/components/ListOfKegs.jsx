import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import Background from '../assets/images/background.jpg';

function ListOfKegs(props)
{
  var outerStyling =
  {
      border: "2px solid grey",
      backgroundImage: 'url(' + Background + ')',
      backgroundPosition: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      minHeight: '100vh',
      minWidth: '100%'


  };
  var stlyleList =

    {
      marginLeft: "29%",
      marginTop: "10%",
      width: "40%",
      padding: "10px",
      positive: "relative",
      display: "inline-block",
      border: "2px solid white",
      backgroundColor: "#918B90",
      borderRadius: "20px"
    };

  return (
    <div style={outerStyling}>
      <div style={stlyleList}>
        {Object.keys(props.OnUpdatedList).map(function(kegId)
          {
            var keg = props.OnUpdatedList[kegId];
            return <Keg
                        name={keg.name}
                        brand={keg.brand}
                        price={keg.price}
                        alcoholContent={keg.alcoholContent}
                        img={keg.img}
                        formattedWaitTime={keg.formattedWaitTime}
                        currentRoutePath={props.currentRoutePath}
                        key={kegId}
                        kegId={kegId}
                        OnKegSelection={props.OnKegSelection}/>;
                    })}
          </div>
        </div>
  );
}
ListOfKegs.propTypes =
{
  OnUpdatedList: PropTypes.object,
  currentRoutePath: PropTypes.string,
  OnKegSelection:PropTypes.func
};
export default ListOfKegs;

//   var list =
//   [
//     {
//       name: "Amsterdam",
//       brand: "Holland beer",
//       price: "3$",
//       alcoholContent: "20%",
//       img: "https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
//     },
//     {
//       name: "Carona",
//       brand: "Mexican beer",
//       price: "2$",
//       alcoholContent: "10%",
//       img: "https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
//     },
//     {
//       name: "Holsten",
//       brand: "German beer",
//       price: "5$",
//       alcoholContent: "30%",
//       img: "https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
//     },
//     {
//       name: "Holsten",
//       brand: "German beer",
//       price: "5$",
//       alcoholContent: "30%",
//       img:"https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
//     },
//     {
//       name: "Holsten",
//       brand: "German beer",
//       price: "5$",
//       alcoholContent: "30%",
//       img: "https://cdn.xl.thumbs.canstockphoto.com/keg-of-beer-still-life-with-a-keg-of-beer-and-draft-beer-by-the-glass-stock-photography_csp21320502.jpg"
//     }
//
// ];
