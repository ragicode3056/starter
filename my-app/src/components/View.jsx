import React, { Component } from 'react';
export const View = (props) =>{
    return (
        <div>
        <h3>Display Items </h3>
        <h4>Name is{props.name} </h4>
        <h4>Age is {props.age}</h4>
    </div>
    )
}