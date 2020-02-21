import React from "react";
import backgroundPicture from "../assets/images/background.jpg";
function CreateKeg()
{
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _img = null;

  function handlerNewTicketForm(event)
  {
    event.preventDefault();
    _name = "";
    _brand = "";
    _price = "";
    _alcoholContent = "";
    _img = "";

  }
  var frameStyle =
  {
    width: "30%",
    marginLeft: "600px",
    border: '2px solid white',
    paddingBottom: "20px",
    marginTop: "7px",
    backgroundColor: "#918B90",
    borderRadius: "30px",
    marginBottom: "10px"
  }
  var head_H3 =
  {
    paddingLeft: "120px",
    paddingTop: "30px",
    fontSize: "24px",
  }
  var nameStyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '100px',
    fontSize: '18px'
  }
  var brandtyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '100px',
    fontSize: '18px'
  }
  var priceStyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '100px',
    fontSize: '18px'
  }
  var alcoholContentStyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '100px',
    fontSize: '18px'
  }
  var imageStyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '100px',
    fontSize: '18px',
    outline: 'none'
  }
  var buttonStyle =
  {
    marginTop: "60px",
    padding: '10px',
    width: '50%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'center',
    fontSize: '18px',
    marginLeft: '100px',
    outline: 'none'
  }
  var outerStyling =
  {
      width: "100%",
      border: "2px solid grey",
      paddingTop: "0px",
      backgroundColor: "#E6D4D4"

  }

  return(
      <div style = {outerStyling}>

        <form onSubmit={handlerNewTicketForm} style={frameStyle}>
            <h3 style={head_H3}>Create New Keg</h3>
            <input style ={nameStyle}
              type='text'
              id='name'
              placeholder='Name'
              ref={(input)=>{_name = input;}}/><br/>
            <input style ={brandtyle}
                type='text'
                id='brand'
                placeholder='Brand'
                ref={(input)=>{_brand = input;}}/><br/>
            <input style ={priceStyle}
              type='text'
              id='price'
              placeholder='Price'
              ref={(input)=>{_price = input;}}/><br/>
            <input style ={alcoholContentStyle}
              id='alcoholContent'
              placeholder='Alcohol Content.'
              ref={(input)=>{_alcoholContent = input;}}/><br/>
            <input style ={imageStyle}
                type='text'
                id='img'
                placeholder='Image'
                ref={(input)=>{_img = input;}}/><br/>
              <button style ={buttonStyle} type='submit'>Create!</button>
          </form>
      </div>
  );
}
export default CreateKeg;
