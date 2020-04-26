import React from 'react';

const style = {
    padding: "25px",
    margin: "20px",
    border: "2px solid",
    display: "inline-block",
    width: "200px"
}

const person = (props) => {
    return(
        <div style={style} onClick={props.click} key={props.id}>
            <p>Hi my name is {props.name}</p>
            <p>I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}></input>
        </div>
    );
}


export default person;