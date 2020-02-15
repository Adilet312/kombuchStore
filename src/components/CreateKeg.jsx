import React from "react";

function CreateKeg()
{
  var frameStyle =
  {
    width: "30%",
    marginLeft: "600px",
    border: '2px solid LightBlue',
    paddingTop: "40px"
  }
  var nameStyle =
  {

    marginTop: "60px",
    padding: '30px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px'

  }
  var brandtyle =
  {

    marginTop: "60px",
    padding: '30px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px'

  }
  var priceStyle =
  {
    marginTop: "60px",
    padding: '30px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px'

  }
  var alcoholContentStyle =
  {
    marginTop: "60px",
    padding: '30px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px'

  }
  var imageStyle =
  {
    marginTop: "60px",
    padding: '30px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px',
    outline: 'none'
  }
  var buttonStyle =
  {
    marginTop: "60px",
    padding: '20px',
    width: '17%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'center',
    fontSize: '18px',
    outline: 'none'
  }

  return(
    <div>
      <form style={frameStyle}>
        <input style ={nameStyle}
          type='text'
          id='name'
          placeholder='Name'/><br/>
          <input style ={brandtyle}
            type='text'
            id='brand'
            placeholder='Brand'/><br/>
        <input style ={priceStyle}
          type='text'
          id='price'
          placeholder='Price'/><br/>
        <input style ={alcoholContentStyle}
          id='alcoholContent'
          placeholder='Alcohol Content.'/><br/>
        <input style ={imageStyle}
            type='text'
            id='img'
            placeholder='Image'/><br/>
          <button style ={buttonStyle} type='submit'>Create!</button>
      </form>
    </div>
  );
}
export default CreateKeg;
