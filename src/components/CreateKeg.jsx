import React from "react";
import PropTypes from "prop-types";
import Moment from 'moment';

function CreateKeg(props)
{
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _img = null;

  function handlerNewTicketForm(event)
  {
    event.preventDefault();
    props.OnEventNewForm({name: _name.value, brand: _brand.value,price: _price.value, alcoholContent: _alcoholContent.value,img: _img.value,timeOpen: new Moment()});
    _name = "";
    _brand = "";
    _price = "";
    _alcoholContent = "";
    _img = "";

  }
  var frameStyle =
  {
    width: "30%",
    marginLeft: "33%",
    border: '2px solid white',
    paddingBottom: "20px",
    marginTop: "77px",
    backgroundColor: "#918B90",
    borderRadius: "30px",
    marginBottom: "10px"
  };
  var head_H3 =
  {
    paddingLeft: "35%",
    paddingTop: "30px",
    fontSize: "24px",
  };
  var nameStyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '33%',
    fontSize: '18px'
  };
  var brandtyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '33%',
    fontSize: '18px'
  };
  var priceStyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '33%',
    fontSize: '18px'
  };
  var alcoholContentStyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '33%',
    fontSize: '18px'
  };
  var imageStyle =
  {
    marginTop: "60px",
    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginLeft: '33%',
    fontSize: '18px',
    outline: 'none'
  };
  var buttonStyle =
  {
    marginTop: "60px",
    padding: '10px',
    width: '50%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'center',
    fontSize: '18px',
    marginLeft: '23%',
    outline: 'none'
  };

  return(
      <div>

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
CreateKeg.propTypes =
{
  OnEventNewForm: PropTypes.func
};
export default CreateKeg;
