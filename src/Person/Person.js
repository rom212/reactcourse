import React from 'react';

const style = {
    padding: "25px",
    margin: "20px",
    border: "2px solid",
    display: "inline-block"
}

const person = (props) => {
    return(
        <div style={style}>
            <p>Hi my name is {props.name}</p>
            <p>I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}


export default person;