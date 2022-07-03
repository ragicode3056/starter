import React, { Component } from 'react';
import './App.css';
import { Box } from './components/Box';
import {Forms} from './components/Forms';
function App(){
  const clickHandler = () =>{
    console.log("clicked");
    
  }
  return (
    <div>
      <Box name="Ragini" onClick = {clickHandler}></Box>
      <Box name ="Nivi"></Box>
      <Forms/>
    </div>
  )
}

export default App;
