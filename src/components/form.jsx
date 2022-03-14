import React, { useState } from 'react'

const Form = (props) => {

  const [Color, setColor] = useState('');
  const [allColors, setallColors] = useState([]);


  const createColor = (e) => {
    e.preventDefault();
    setColor(e.target.value)
    console.log(Color);
  }

  const addColor = (e) => {
    e.preventDefault();
    setallColors([...allColors, Color])
    console.log('color', allColors)
    props.updateColors(Color);
  }

  return (


    <div>
      <fieldset>
        <legend>Form</legend>
        <div>
          <div>
            {JSON.stringify(allColors)}
            <br />
            {JSON.stringify(Color)}
            <form onSubmit={addColor}>
              <label>Color</label>
              <input type="text"
                onChange={createColor} />
              <input type="submit" value="Add" />
            </form>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default Form