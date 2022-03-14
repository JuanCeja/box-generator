import './App.css';
import Form from './components/form'
import Display from './components/display';
import React, { useState } from 'react';



function App() {

  const [colors, setColors] = useState([])

  const updateColors = (expectedColor) => {
    console.log('hey there');
    setColors([...colors, expectedColor])

  } 

  return (
    <div>
      <fieldset>
        <legend>App.js</legend>
        <div>
          <div className="App">
            <Form colors={colors} updateColors={updateColors}/>
            <Display colors={colors} />
          </div>
        </div>
      </fieldset>
    </div>

  );
}

export default App;
