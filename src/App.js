import React, { useState } from 'react';

import './App.css';
import { Fireworks } from 'fireworks/lib/react'
import pic1 from './pics/IMG_8784.JPG'
import pic5 from './pics/lp_image.jpg'
import pic2 from './pics/lp_image (1).jpg'
import pic3 from './pics/lp_image (2).jpg'
import pic4 from './pics/lp_image (3).jpg'
import bomb from './pics/bomb.png'



function App() {
const [yes, setYes] = useState(false)
  let fxProps1 = {
    count: 3,
    interval: 200,
    colors: ['#cc3333', '#4CAF50', '#81C784'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  return (
    <div className="App">
      <div>
      <h1 style={{top: 0,backgroundColor: "#61dafb", padding: "15px 32px"}}>The Bomb(dot)com ;)</h1>
      {yes &&
      <div>
       <img src={bomb} className="App-logo" alt="logo" />
    <Fireworks {...fxProps1} />   </div>  }
    <button style={{backgroundColor: "#008CBA", padding: "15px 32px", cursor: "pointer" }} onClick={() => setYes(!yes)}>{yes? "SHE ALWAYS IS!" : "She bomb?"}</button>
    </div>
      <header className="App-header">
        <br/>
        <img src={pic1} className="App-logo" alt="logo" />
        <img src={pic2} className="App-logo" alt="logo" />
        <img src={pic3} className="App-logo" alt="logo" />
        <img src={pic4} className="App-logo" alt="logo" />
        <img src={pic5} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
