import React, { Component } from 'react';
import './App.css';
import { Box } from './components/Box';
function App(){
  const clickHandler = () =>{
    console.log("clicked");
    
  }
  return (
    <div>
      <Box name="Ragini" onClick = {clickHandler}></Box>
      <Box name ="Nivi"></Box>
    </div>
  )
}

export default App;
