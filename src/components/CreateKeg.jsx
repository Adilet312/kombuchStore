import React from "react";
function CreateKeg()
{
  var frameStyle =
  {
    width: "30%",
    marginLeft: "600px",
    border: '2px solid white',
    paddingBottom: "20px",
    marginTop: "7px",
    backgroundColor: "#918B90",
    borderRadius: "30px"
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

  return(
      <div>
        <form style={frameStyle}>
            <h3 style={head_H3}>Create New Keg</h3>
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
