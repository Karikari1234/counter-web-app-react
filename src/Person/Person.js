import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am a {props.name}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
        
    ) 
}

export default person;