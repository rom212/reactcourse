import React from 'react';

const person = (props) => {
    return(
        <div style={{border: "2px solid", display: "inline-block"}}>
            <p>Hi my name is {props.name}</p>
            <p>I am {props.age}</p>
        </div>
    );
}


export default person;