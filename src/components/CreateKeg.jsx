import React from "react";

function CreateKeg()
{
  var inputStyle =
  {

    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px',
    outline: 'none'
  }
  var buttonStyle =
  {

    padding: '10px',
    width: '9%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'center',
    fontSize: '18px',
    outline: 'none'
  }

  return(
    <div>
      <form>
        <input style ={inputStyle}
          type='text'
          id='name'
          placeholder='Name'/><br/>
          <input style ={inputStyle}
            type='text'
            id='brand'
            placeholder='Brand'/><br/>
        <input style ={inputStyle}
          type='text'
          id='price'
          placeholder='Price'/><br/>
        <input style ={inputStyle}
          id='alcoholContent'
          placeholder='Alcohol Content.'/><br/>
        <input style ={inputStyle}
            type='text'
            id='img'
            placeholder='Image'/><br/>
          <button style ={buttonStyle} type='submit'>Create!</button>
      </form>
    </div>
  );
}
export default CreateKeg;
