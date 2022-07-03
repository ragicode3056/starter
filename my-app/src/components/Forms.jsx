import React, { Component } from 'react';
import { useState } from "react";
import { Button } from './Button';
import { View } from './View';


export const Forms = () =>{
    const [name,setName] = useState();
    const [age,setAge] = useState();
    const [isClick,setIsClick] = useState(false);
    const submitHandler = () =>{
        console.log("clicked")
        setIsClick(true);
    }
  

     return(
        <div>
            <label>Enter Name</label>
            <input
            value = {name}
            onChange = {((e)=>setName(e.target.value))}
            >
            </input>
            <label>Enter age</label>
            <input 
            value = {age}
            onChange = {((e)=>setAge(e.target.value))}>
            </input>
           <Button clickFn={submitHandler}/>
         
        {isClick ?  <View name={name} age = {age}/> : ""} 
        
            
        </div>
    )
}