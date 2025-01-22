import { useState } from 'react';
import Tervehdys from "./hello";



function App() {
  
  console.log("onpa hienoa tämä react");
  let luku = 3;

  return (

    <div>
      <Tervehdys name= "marg"/>
      <Tervehdys/>
      <Tervehdys/>
    </div>

  )
}


export default App
