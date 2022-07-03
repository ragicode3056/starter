import React, { Component } from 'react';
export const Box = (props) =>{
    return(
        <div className='box'>
            <h1>Hello {props.name}</h1>
            <button onClick={props.onClick}> Click me</button>
        </div>
    )
}