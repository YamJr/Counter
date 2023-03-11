import './App.css';
import React, { useState } from 'react';
function App() {
  //  let a=10;
  //  let b=20;
   const [num, setNum] = useState(0);
   //let c =a+b;
  return (
    <div className="App">
      <h1>COUNTER</h1>
      <div className="info-box">
          {num}
    </div>
    <button onClick={() =>{
      setNum(num +1);
    }} className="btn"
    >Increment</button>
     <button onClick={()=>{
        setNum(0);
     }} className="btn" >Reset</button>
     <button onClick={()=>{
        setNum(num-1);
     }} className="btn">Decrement</button>
     {/* <div className="info-box">
          {num}
    </div>  */}
    </div>
  );
}

export default App;
