import React, { Component } from 'react';
export const Button = ({clickFn}) =>{
    return (
        <button type ="submit" onClick = {clickFn}>Click me </button>
    )
}